import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiServer, FiUsers, FiSettings, FiDatabase, FiShield, FiMonitor, FiTool, FiActivity, FiCpu } = FiIcons;

const SystemAdministration = () => {
  const { user } = useAuth();

  const systemStats = [
    { icon: FiServer, title: 'Active Tenants', value: '12', status: 'healthy', color: 'green' },
    { icon: FiUsers, title: 'Total Users', value: '2,847', status: 'normal', color: 'blue' },
    { icon: FiDatabase, title: 'Database Health', value: '98%', status: 'excellent', color: 'green' },
    { icon: FiMonitor, title: 'System Uptime', value: '99.9%', status: 'excellent', color: 'green' }
  ];

  const systemServices = [
    {
      name: 'Intune Management Service',
      status: 'running',
      uptime: '99.8%',
      lastRestart: '2 days ago',
      description: 'Core Microsoft Intune management and policy enforcement'
    },
    {
      name: 'Compliance Monitor',
      status: 'running',
      uptime: '99.5%',
      lastRestart: '1 week ago',
      description: 'Automated compliance checking and reporting system'
    },
    {
      name: 'Device Sync Engine',
      status: 'running',
      uptime: '99.9%',
      lastRestart: '3 days ago',
      description: 'Real-time device synchronization and status updates'
    },
    {
      name: 'Security Analytics',
      status: 'warning',
      uptime: '97.2%',
      lastRestart: '6 hours ago',
      description: 'Advanced threat detection and security monitoring'
    }
  ];

  const adminActions = [
    { icon: FiTool, title: 'System Maintenance', description: 'Schedule and manage system maintenance windows' },
    { icon: FiActivity, title: 'Performance Monitoring', description: 'View detailed system performance metrics' },
    { icon: FiCpu, title: 'Resource Management', description: 'Monitor and allocate system resources' },
    { icon: FiShield, title: 'Security Audit', description: 'Run comprehensive security audits' }
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
              <h1 className="text-2xl font-bold text-gray-900">System Administration</h1>
            </div>
            <div className="text-sm text-gray-500">
              Admin: {user?.name || 'Administrator'}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* System Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    stat.color === 'green' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    <SafeIcon icon={stat.icon} className={`w-6 h-6 ${
                      stat.color === 'green' ? 'text-green-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    stat.status === 'excellent' ? 'bg-green-100 text-green-800' :
                    stat.status === 'healthy' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {stat.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">System Services</h2>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Service Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Uptime
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Restart
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {systemServices.map((service, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          service.status === 'running' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {service.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {service.uptime}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {service.lastRestart}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-primary-600 hover:text-primary-900 mr-3">
                          Restart
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          Logs
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Admin Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">Administrative Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adminActions.map((action, index) => (
              <button
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-left group"
              >
                <SafeIcon icon={action.icon} className="w-8 h-8 text-primary-600 mb-4 group-hover:text-primary-700 transition-colors" />
                <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-gray-600 text-sm">{action.description}</p>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SystemAdministration;