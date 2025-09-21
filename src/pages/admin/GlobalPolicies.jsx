import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiShield, FiSettings, FiUsers, FiMonitor, FiEdit3, FiTrash2, FiPlus, FiCheck, FiX } = FiIcons;

const GlobalPolicies = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('security');

  const policyCategories = [
    { id: 'security', name: 'Security Policies', icon: FiShield, count: 8 },
    { id: 'device', name: 'Device Policies', icon: FiMonitor, count: 12 },
    { id: 'user', name: 'User Policies', icon: FiUsers, count: 6 },
    { id: 'application', name: 'Application Policies', icon: FiSettings, count: 15 }
  ];

  const securityPolicies = [
    {
      id: 1,
      name: 'Enterprise Security Baseline',
      description: 'Core security requirements for all enterprise devices',
      status: 'active',
      lastModified: '2024-01-15',
      assignedDevices: 2847,
      compliance: 98.5
    },
    {
      id: 2,
      name: 'Password Complexity Requirements',
      description: 'Enforces strong password policies across all platforms',
      status: 'active',
      lastModified: '2024-01-12',
      assignedDevices: 2847,
      compliance: 96.2
    },
    {
      id: 3,
      name: 'BitLocker Encryption Policy',
      description: 'Mandatory encryption for Windows devices',
      status: 'active',
      lastModified: '2024-01-10',
      assignedDevices: 1523,
      compliance: 99.1
    },
    {
      id: 4,
      name: 'Mobile Device Security',
      description: 'Security requirements for iOS and Android devices',
      status: 'draft',
      lastModified: '2024-01-08',
      assignedDevices: 0,
      compliance: 0
    }
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
              <h1 className="text-2xl font-bold text-gray-900">Global Policies</h1>
            </div>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
              <SafeIcon icon={FiPlus} className="w-4 h-4" />
              <span>Create Policy</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Policy Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policyCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  activeTab === category.id
                    ? 'border-primary-300 bg-primary-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <SafeIcon 
                    icon={category.icon} 
                    className={`w-8 h-8 ${
                      activeTab === category.id ? 'text-primary-600' : 'text-gray-400'
                    }`} 
                  />
                  <span className={`text-2xl font-bold ${
                    activeTab === category.id ? 'text-primary-600' : 'text-gray-900'
                  }`}>
                    {category.count}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">Active policies in this category</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Policy List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                {policyCategories.find(cat => cat.id === activeTab)?.name}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Policy Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Assigned Devices
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Compliance
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Modified
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {securityPolicies.map((policy, index) => (
                    <tr key={policy.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{policy.name}</div>
                          <div className="text-sm text-gray-500">{policy.description}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          policy.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {policy.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {policy.assignedDevices.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                            <div
                              className={`h-2 rounded-full ${
                                policy.compliance >= 95 ? 'bg-green-500' :
                                policy.compliance >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${policy.compliance}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-900">{policy.compliance}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {policy.lastModified}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-primary-600 hover:text-primary-900 mr-3">
                          <SafeIcon icon={FiEdit3} className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Policy Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <SafeIcon icon={FiCheck} className="w-8 h-8 text-green-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Deploy Policies</h3>
            <p className="text-gray-600 text-sm mb-4">Push selected policies to target device groups</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
              Deploy Selected
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <SafeIcon icon={FiSettings} className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Bulk Operations</h3>
            <p className="text-gray-600 text-sm mb-4">Perform bulk operations on multiple policies</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Bulk Actions
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <SafeIcon icon={FiShield} className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="font-semibold text-gray-900 mb-2">Policy Templates</h3>
            <p className="text-gray-600 text-sm mb-4">Create policies from predefined templates</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
              Browse Templates
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalPolicies;