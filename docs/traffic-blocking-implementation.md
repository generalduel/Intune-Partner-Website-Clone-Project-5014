# Traffic Blocking Implementation Guide

## Overview
This guide covers multiple approaches to block traffic from Tor nodes and China across different infrastructure levels.

## 1. Application-Level Blocking (React/Node.js)

### Client-Side IP Detection Component
```jsx
// src/components/security/IPBlocker.jsx
import React, { useEffect, useState } from 'react';

const IPBlocker = ({ children }) => {
  const [isBlocked, setIsBlocked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkIPRestrictions();
  }, []);

  const checkIPRestrictions = async () => {
    try {
      // Get user's IP and check against blocklists
      const response = await fetch('/api/check-ip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (data.blocked) {
        setIsBlocked(true);
      }
    } catch (error) {
      console.error('IP check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (isBlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Restricted</h1>
          <p className="text-gray-600 mb-6">
            Access to this service is not available from your current location or network.
          </p>
          <p className="text-sm text-gray-500">
            If you believe this is an error, please contact support.
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default IPBlocker;
```

### Server-Side IP Checking Service
```javascript
// server/services/ipBlockingService.js
const axios = require('axios');
const fs = require('fs');
const path = require('path');

class IPBlockingService {
  constructor() {
    this.torExitNodes = new Set();
    this.chinaIPRanges = [];
    this.lastUpdate = null;
    
    // Update blocklists every 6 hours
    this.updateInterval = 6 * 60 * 60 * 1000;
    
    this.initializeBlocklists();
    setInterval(() => this.updateBlocklists(), this.updateInterval);
  }

  async initializeBlocklists() {
    await this.updateBlocklists();
  }

  async updateBlocklists() {
    try {
      console.log('Updating IP blocklists...');
      
      // Update Tor exit nodes
      await this.updateTorExitNodes();
      
      // Update China IP ranges
      await this.updateChinaIPRanges();
      
      this.lastUpdate = new Date();
      console.log('IP blocklists updated successfully');
    } catch (error) {
      console.error('Failed to update blocklists:', error);
    }
  }

  async updateTorExitNodes() {
    try {
      // Tor Project's official exit node list
      const response = await axios.get('https://check.torproject.org/torbulkexitlist', {
        timeout: 30000
      });
      
      const exitNodes = response.data
        .split('\n')
        .filter(line => line.trim() && !line.startsWith('#'))
        .map(ip => ip.trim());
      
      this.torExitNodes = new Set(exitNodes);
      console.log(`Updated ${exitNodes.length} Tor exit nodes`);
    } catch (error) {
      console.error('Failed to update Tor exit nodes:', error);
      // Fallback to local file if available
      this.loadLocalTorList();
    }
  }

  async updateChinaIPRanges() {
    try {
      // Multiple sources for China IP ranges
      const sources = [
        'https://raw.githubusercontent.com/17mon/china_ip_list/master/china_ip_list.txt',
        'https://raw.githubusercontent.com/metowolf/iplist/master/data/country/CN.txt'
      ];

      let allRanges = [];
      
      for (const source of sources) {
        try {
          const response = await axios.get(source, { timeout: 30000 });
          const ranges = response.data
            .split('\n')
            .filter(line => line.trim() && !line.startsWith('#'))
            .map(line => line.trim());
          
          allRanges = allRanges.concat(ranges);
        } catch (error) {
          console.warn(`Failed to fetch from ${source}:`, error.message);
        }
      }

      // Remove duplicates
      this.chinaIPRanges = [...new Set(allRanges)];
      console.log(`Updated ${this.chinaIPRanges.length} China IP ranges`);
    } catch (error) {
      console.error('Failed to update China IP ranges:', error);
      // Fallback to local file if available
      this.loadLocalChinaList();
    }
  }

  loadLocalTorList() {
    try {
      const filePath = path.join(__dirname, '../data/tor-exit-nodes.txt');
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        const nodes = data.split('\n').filter(line => line.trim());
        this.torExitNodes = new Set(nodes);
        console.log(`Loaded ${nodes.length} Tor nodes from local file`);
      }
    } catch (error) {
      console.error('Failed to load local Tor list:', error);
    }
  }

  loadLocalChinaList() {
    try {
      const filePath = path.join(__dirname, '../data/china-ip-ranges.txt');
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        this.chinaIPRanges = data.split('\n').filter(line => line.trim());
        console.log(`Loaded ${this.chinaIPRanges.length} China IP ranges from local file`);
      }
    } catch (error) {
      console.error('Failed to load local China list:', error);
    }
  }

  isIPBlocked(ip) {
    // Check if IP is a Tor exit node
    if (this.torExitNodes.has(ip)) {
      return { blocked: true, reason: 'tor_exit_node' };
    }

    // Check if IP is in China ranges
    if (this.isIPInChinaRanges(ip)) {
      return { blocked: true, reason: 'china_ip' };
    }

    return { blocked: false };
  }

  isIPInChinaRanges(ip) {
    const ipNum = this.ipToNumber(ip);
    
    return this.chinaIPRanges.some(range => {
      if (range.includes('/')) {
        // CIDR notation
        return this.isIPInCIDR(ip, range);
      } else if (range.includes('-')) {
        // Range notation (start-end)
        const [start, end] = range.split('-').map(ip => this.ipToNumber(ip.trim()));
        return ipNum >= start && ipNum <= end;
      } else {
        // Single IP
        return ip === range;
      }
    });
  }

  ipToNumber(ip) {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet), 0) >>> 0;
  }

  isIPInCIDR(ip, cidr) {
    const [network, prefixLength] = cidr.split('/');
    const mask = (0xffffffff << (32 - parseInt(prefixLength))) >>> 0;
    
    const ipNum = this.ipToNumber(ip);
    const networkNum = this.ipToNumber(network);
    
    return (ipNum & mask) === (networkNum & mask);
  }

  getStats() {
    return {
      torExitNodes: this.torExitNodes.size,
      chinaIPRanges: this.chinaIPRanges.length,
      lastUpdate: this.lastUpdate
    };
  }
}

module.exports = new IPBlockingService();
```

### Express.js Middleware
```javascript
// server/middleware/ipBlocking.js
const ipBlockingService = require('../services/ipBlockingService');

const getClientIP = (req) => {
  return req.headers['x-forwarded-for']?.split(',')[0] || 
         req.headers['x-real-ip'] || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress ||
         req.ip;
};

const ipBlockingMiddleware = (req, res, next) => {
  const clientIP = getClientIP(req);
  
  // Skip blocking for local development
  if (process.env.NODE_ENV === 'development' || 
      clientIP === '127.0.0.1' || 
      clientIP === '::1' ||
      clientIP?.startsWith('192.168.') ||
      clientIP?.startsWith('10.')) {
    return next();
  }

  const blockResult = ipBlockingService.isIPBlocked(clientIP);
  
  if (blockResult.blocked) {
    console.log(`Blocked IP ${clientIP} - Reason: ${blockResult.reason}`);
    
    return res.status(403).json({
      error: 'Access Denied',
      message: 'Access to this service is restricted from your location',
      code: 'IP_BLOCKED',
      reason: blockResult.reason
    });
  }

  next();
};

module.exports = ipBlockingMiddleware;
```

## 2. Cloudflare Configuration

### Cloudflare Workers Script
```javascript
// cloudflare-worker.js
const BLOCKED_COUNTRIES = ['CN']; // China country code
const TOR_ASN_LIST = [
  // Known Tor hosting ASNs
  'AS19281', // QUADRANET
  'AS51167', // CONTABO
  'AS16276', // OVH
  // Add more ASNs as needed
];

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const country = request.cf.country;
  const asn = request.cf.asOrganization;
  
  // Block China
  if (BLOCKED_COUNTRIES.includes(country)) {
    return new Response('Access denied - Geographic restriction', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  
  // Block known Tor ASNs
  if (TOR_ASN_LIST.some(torAsn => asn?.includes(torAsn))) {
    return new Response('Access denied - Network restriction', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  
  // Check Tor exit nodes (using external API)
  const clientIP = request.headers.get('CF-Connecting-IP');
  if (await isTorExitNode(clientIP)) {
    return new Response('Access denied - Tor exit node detected', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  
  // Allow the request to proceed
  return fetch(request);
}

async function isTorExitNode(ip) {
  try {
    // Use a Tor detection service
    const response = await fetch(`https://check.torproject.org/api/ip/${ip}`);
    const data = await response.json();
    return data.IsTor === true;
  } catch (error) {
    console.error('Tor check failed:', error);
    return false;
  }
}
```

## 3. Nginx Configuration

### Nginx Blocking Rules
```nginx
# /etc/nginx/conf.d/ip-blocking.conf

# GeoIP module for country blocking
map $geoip_country_code $blocked_country {
    default 0;
    CN 1;  # China
}

# Real IP configuration for proper IP detection
set_real_ip_from 103.21.244.0/22;
set_real_ip_from 103.22.200.0/22;
set_real_ip_from 103.31.4.0/22;
set_real_ip_from 104.16.0.0/12;
set_real_ip_from 108.162.192.0/18;
set_real_ip_from 131.0.72.0/22;
set_real_ip_from 141.101.64.0/18;
set_real_ip_from 162.158.0.0/15;
set_real_ip_from 172.64.0.0/13;
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 188.114.96.0/20;
set_real_ip_from 190.93.240.0/20;
set_real_ip_from 197.234.240.0/22;
set_real_ip_from 198.41.128.0/17;
real_ip_header CF-Connecting-IP;

server {
    listen 80;
    server_name yourdomain.com;

    # Block based on country
    if ($blocked_country) {
        return 403 "Access denied from your country";
    }

    # Include Tor exit node blocking
    include /etc/nginx/conf.d/tor-blocking.conf;
    
    # Include China IP range blocking
    include /etc/nginx/conf.d/china-blocking.conf;

    # Your normal configuration
    location / {
        proxy_pass http://your-backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

### Tor Exit Node Blocking
```nginx
# /etc/nginx/conf.d/tor-blocking.conf

# Map to check Tor exit nodes
map $remote_addr $is_tor_exit {
    include /etc/nginx/tor-exit-nodes.map;
    default 0;
}

# Block Tor exit nodes
if ($is_tor_exit) {
    return 403 "Tor exit nodes are not allowed";
}
```

### Generate Tor Exit Nodes Map
```bash
#!/bin/bash
# generate-tor-blocklist.sh

# Download Tor exit node list
curl -s https://check.torproject.org/torbulkexitlist > /tmp/tor-exit-nodes.txt

# Generate nginx map file
echo "# Auto-generated Tor exit node blocklist - $(date)" > /etc/nginx/tor-exit-nodes.map
echo "# Total nodes: $(wc -l < /tmp/tor-exit-nodes.txt)" >> /etc/nginx/tor-exit-nodes.map

while read -r ip; do
    if [[ $ip =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
        echo "$ip 1;" >> /etc/nginx/tor-exit-nodes.map
    fi
done < /tmp/tor-exit-nodes.txt

# Reload nginx
nginx -t && systemctl reload nginx

echo "Tor blocklist updated with $(grep -c "1;" /etc/nginx/tor-exit-nodes.map) exit nodes"
```

## 4. Firewall-Level Blocking (iptables)

### IPTables Script
```bash
#!/bin/bash
# firewall-blocking.sh

# Create ipsets for efficient IP blocking
ipset create china-ips hash:net maxelem 100000
ipset create tor-exit-nodes hash:ip maxelem 10000

# Download and load China IP ranges
curl -s https://raw.githubusercontent.com/17mon/china_ip_list/master/china_ip_list.txt | \
while read range; do
    ipset add china-ips $range 2>/dev/null
done

# Download and load Tor exit nodes
curl -s https://check.torproject.org/torbulkexitlist | \
while read ip; do
    if [[ $ip =~ ^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
        ipset add tor-exit-nodes $ip 2>/dev/null
    fi
done

# Create iptables rules
iptables -A INPUT -m set --match-set china-ips src -j DROP
iptables -A INPUT -m set --match-set tor-exit-nodes src -j DROP

# Log blocked connections (optional)
iptables -A INPUT -m set --match-set china-ips src -j LOG --log-prefix "BLOCKED-CHINA: "
iptables -A INPUT -m set --match-set tor-exit-nodes src -j LOG --log-prefix "BLOCKED-TOR: "

echo "Firewall rules applied successfully"
echo "China IPs blocked: $(ipset list china-ips | grep -c "^[0-9]")"
echo "Tor exit nodes blocked: $(ipset list tor-exit-nodes | grep -c "^[0-9]")"
```

## 5. DNS-Level Blocking

### Pi-hole Configuration
```bash
# Add to Pi-hole blocklists
echo "https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/gambling-porn/hosts" >> /etc/pihole/adlists.list

# Custom blocklist for Tor and China
cat > /etc/pihole/custom-blocks.txt << EOF
# Block Tor directory authorities
authority.torproject.org
longclaw.torproject.org
bastet.torproject.org
faravahar.torproject.org

# Block common Tor bridges (update regularly)
# Add known bridge IPs here
EOF
```

## 6. Monitoring and Alerting

### Monitoring Script
```bash
#!/bin/bash
# monitor-blocked-traffic.sh

LOG_FILE="/var/log/blocked-traffic.log"
ALERT_EMAIL="admin@yourdomain.com"

# Count blocked attempts in last hour
CHINA_BLOCKS=$(grep "BLOCKED-CHINA" /var/log/syslog | grep "$(date '+%b %d %H')" | wc -l)
TOR_BLOCKS=$(grep "BLOCKED-TOR" /var/log/syslog | grep "$(date '+%b %d %H')" | wc -l)

# Log statistics
echo "$(date): China blocks: $CHINA_BLOCKS, Tor blocks: $TOR_BLOCKS" >> $LOG_FILE

# Alert if high volume
if [ $CHINA_BLOCKS -gt 100 ] || [ $TOR_BLOCKS -gt 50 ]; then
    echo "High volume of blocked traffic detected at $(date)" | \
    mail -s "Traffic Blocking Alert" $ALERT_EMAIL
fi
```

## 7. Application Integration

### React App Integration
```jsx
// src/App.jsx - Add IP blocking wrapper
import IPBlocker from './components/security/IPBlocker';

function App() {
  return (
    <IPBlocker>
      {/* Your existing app content */}
      <Router>
        {/* ... */}
      </Router>
    </IPBlocker>
  );
}
```

## 8. Deployment Considerations

### Environment Variables
```bash
# .env
ENABLE_IP_BLOCKING=true
BLOCK_TOR=true
BLOCK_CHINA=true
WHITELIST_IPS=192.168.1.1,10.0.0.1
BLOCKLIST_UPDATE_INTERVAL=21600  # 6 hours
```

### Docker Configuration
```dockerfile
# Dockerfile additions for IP blocking
RUN apt-get update && apt-get install -y \
    ipset \
    iptables \
    geoip-bin \
    geoip-database

COPY scripts/update-blocklists.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/update-blocklists.sh

# Add cron job for regular updates
RUN echo "0 */6 * * * /usr/local/bin/update-blocklists.sh" | crontab -
```

## 9. Testing and Validation

### Test Script
```bash
#!/bin/bash
# test-blocking.sh

echo "Testing IP blocking functionality..."

# Test Tor exit node (use a known exit node IP)
echo "Testing Tor blocking..."
curl -H "X-Forwarded-For: 199.87.154.255" http://localhost/api/test

# Test China IP (use a known China IP)
echo "Testing China blocking..."
curl -H "X-Forwarded-For: 1.2.4.8" http://localhost/api/test

# Test normal IP
echo "Testing normal access..."
curl -H "X-Forwarded-For: 8.8.8.8" http://localhost/api/test
```

## 10. Maintenance and Updates

### Automated Update Script
```bash
#!/bin/bash
# update-all-blocklists.sh

# Update Tor exit nodes
/usr/local/bin/generate-tor-blocklist.sh

# Update China IP ranges
/usr/local/bin/update-china-ips.sh

# Update firewall rules
/usr/local/bin/firewall-blocking.sh

# Restart services
systemctl reload nginx
systemctl restart your-app

echo "All blocklists updated successfully at $(date)"
```

## Important Notes

1. **Legal Compliance**: Ensure blocking complies with your jurisdiction's laws
2. **False Positives**: Monitor for legitimate users being blocked
3. **Performance**: IP checking adds latency - optimize accordingly
4. **Maintenance**: Keep blocklists updated regularly
5. **Logging**: Log all blocking events for analysis
6. **Bypass Methods**: Be aware that determined users may find ways around blocks
7. **Business Impact**: Consider impact on legitimate users who may be affected

## Recommended Implementation Order

1. Start with application-level blocking for testing
2. Add Cloudflare rules for broad protection
3. Implement nginx rules for additional security
4. Add firewall-level blocking for comprehensive protection
5. Set up monitoring and alerting
6. Establish regular maintenance procedures