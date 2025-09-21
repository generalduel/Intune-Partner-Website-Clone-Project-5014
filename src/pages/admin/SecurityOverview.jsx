import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiShield, FiAlertTriangle, FiCheckCircle, FiXCircle, FiActivity, FiTrendingUp, FiUsers, FiMonitor } = FiIcons;

const SecurityOverview = () => {
  const { user } = useAuth();
  const [timeRange, setTimeRange] = useState('7d');

  const securityMetrics = [
    {
      icon: FiShield,
      title: 'Overall Security Score',
      value: '94%',
      change: '+2%',
      status: 'excellent',
      color: 'green'
    },
    {
      icon: FiAlertTriangle,
      title: 'Active Threats',
      value: '3',
      change: '-5',
      status: 'warning',
      color: 'yellow'
    },
    {
      icon: FiCheckCircle,
      title: 'Compliant Devices',
      value: '2,789',
      change: '+12',
      status: 'good',
      color: 'green'
    },
    {
      icon: FiXCircle,
      title: 'Non-Compliant Devices',
      value: '58',
      change: '-8',
      status: 'attention',
      color: 'red'
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      severity: 'high',
      title: 'Suspicious Login Activity Detected',
      description: 'Multiple failed login attempts from unusual location',
      time: '2 minutes ago',
      device: 'LAPTOP-ABC123',
      user: 'john.doe@company.com'
    },
    {
      id: 2,
      severity: 'medium',
      title: 'Device Compliance Violation',
      description: 'Device missing required security updates',
      time: '15 minutes ago',
      device: 'PHONE-DEF456',
      user: 'jane.smith@company.com'
    },
    {
      id: 3,
      severity: 'low',
      title: 'Policy Update Required',
      description: 'Security policy needs review and update',
      time: '1 hour ago',
      device: 'Multiple devices',
      user: 'System'
    },
    {
      id: 4,
      severity: 'medium',
      title: 'Unauthorized App Installation',
      description: 'Non-approved application detected on managed device',
      time: '2 hours ago',
      device: 'TABLET-GHI789',
      user: 'mike.wilson@company.com'
    }
  ];

  const complianceByCategory = [
    { category: 'Password Policy', compliant: 98, nonCompliant: 2, total: 2847 },
    { category: 'Device Encryption', compliant: 95, nonCompliant: 5, total: 2847 },
    { category: 'OS Updates', compliant: 92, nonCompliant: 8, total: 2847 },
    { category: 'Antivirus Status', compliant: 99, nonCompliant: 1, total: 2847 },
    { category: 'App Restrictions', compliant: 89, nonCompliant: 11, total: 2847 }
  ];

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">You don't have permission to access this page.</p>
          <Link to="/dashboard" className="text-primary-600 hover:text-primary-700">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/dashboard" 
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2" />
                Back to Dashboard
              </Link>
              <div className="w-px h-6 bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Security Overview</h1>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Security Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Security Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    metric.color === 'green' ? 'bg-green-100' :
                    metric.color === 'yellow' ? 'bg-yellow-100' :
                    metric.color === 'red' ? 'bg-red-100' : 'bg-blue-100'
                  }`}>
                    <SafeIcon icon={metric.icon} className={`w-6 h-6 ${
                      metric.color === 'green' ? 'text-green-600' :
                      metric.color === 'yellow' ? 'text-yellow-600' :
                      metric.color === 'red' ? 'text-red-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <span className={`text-sm font-medium ${
                    metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-gray-600 text-sm">{metric.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Security Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Security Alerts</h2>
              </div>
              <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                      alert.severity === 'high' ? 'bg-red-500' :
                      alert.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900">{alert.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <span>{alert.time}</span>
                        <span>{alert.device} • {alert.user}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Compliance by Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Compliance by Category</h2>
              </div>
              <div className="p-6 space-y-4">
                {complianceByCategory.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900">{item.category}</span>
                      <span className="text-sm text-gray-600">{item.compliant}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          item.compliant >= 95 ? 'bg-green-500' :
                          item.compliant >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${item.compliant}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{Math.round(item.total * item.compliant / 100)} compliant</span>
                      <span>{Math.round(item.total * item.nonCompliant / 100)} non-compliant</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Security Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Security Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-left group">
              <SafeIcon icon={FiShield} className="w-8 h-8 text-primary-600 mb-4 group-hover:text-primary-700 transition-colors" />
              <h3 className="font-semibold text-gray-900 mb-2">Run Security Scan</h3>
              <p className="text-gray-600 text-sm">Perform comprehensive security assessment across all devices</p>
            </button>

            <button className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-left group">
              <SafeIcon icon={FiActivity} className="w-8 h-8 text-green-600 mb-4 group-hover:text-green-700 transition-colors" />
              <h3 className="font-semibold text-gray-900 mb-2">Generate Report</h3>
              <p className="text-gray-600 text-sm">Create detailed security compliance reports for stakeholders</p>
            </button>

            <button className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-left group">
              <SafeIcon icon={FiAlertTriangle} className="w-8 h-8 text-orange-600 mb-4 group-hover:text-orange-700 transition-colors" />
              <h3 className="font-semibold text-gray-900 mb-2">Review Alerts</h3>
              <p className="text-gray-600 text-sm">Investigate and resolve outstanding security alerts</p>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SecurityOverview;