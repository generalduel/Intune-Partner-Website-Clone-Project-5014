import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiSettings, FiShield, FiTrendingUp, FiLogOut, FiCrown, FiUsers } = FiIcons;

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const dashboardStats = [
    { icon: FiShield, title: 'Devices Managed', value: '1,234', change: '+12%', color: 'text-green-600' },
    { icon: FiUser, title: 'Active Users', value: '856', change: '+8%', color: 'text-blue-600' },
    { icon: FiSettings, title: 'Policies Active', value: '42', change: '+3%', color: 'text-purple-600' },
    { icon: FiTrendingUp, title: 'Compliance Rate', value: '98.5%', change: '+2%', color: 'text-emerald-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                {user?.role === 'admin' && (
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <SafeIcon icon={FiCrown} className="w-3 h-3" />
                    <span>Admin</span>
                  </span>
                )}
              </div>
              <p className="text-gray-600">
                Welcome back{user?.name ? `, ${user.name}` : ''} to your Intune management console
              </p>
              {user?.email && (
                <p className="text-sm text-gray-500 mt-1">{user.email}</p>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <SafeIcon icon={FiLogOut} className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">
            Welcome to YourIntunePartner Dashboard
          </h2>
          <p className="text-primary-100 text-lg">
            Your comprehensive Microsoft Intune management solution is ready. Monitor devices, manage policies, and ensure security across your organization.
          </p>
          <div className="mt-6 flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiUser} className="w-4 h-4" />
              <span>
                {user?.role === 'admin' ? `Admin: ${user?.name || 'Administrator'}` : `User ID: ${user?.id}`}
              </span>
            </div>
            <div className="w-1 h-4 bg-primary-400"></div>
            <span>Microsoft Intune Specialist Dashboard</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  stat.color === 'text-green-600' ? 'bg-green-100' :
                  stat.color === 'text-blue-600' ? 'bg-blue-100' :
                  stat.color === 'text-purple-600' ? 'bg-purple-100' : 'bg-emerald-100'
                }`}>
                  <SafeIcon icon={stat.icon} className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className={`text-sm font-medium ${stat.color}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-colors text-left">
              <SafeIcon icon={FiShield} className="w-8 h-8 text-primary-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Security Policies</h4>
              <p className="text-gray-600 text-sm">Manage and update security policies</p>
            </button>

            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-colors text-left">
              <SafeIcon icon={FiUser} className="w-8 h-8 text-primary-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">User Management</h4>
              <p className="text-gray-600 text-sm">Add and manage user accounts</p>
            </button>

            <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-colors text-left">
              <SafeIcon icon={FiSettings} className="w-8 h-8 text-primary-600 mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Device Configuration</h4>
              <p className="text-gray-600 text-sm">Configure device settings and policies</p>
            </button>
          </div>
        </motion.div>

        {/* Admin-only Section */}
        {user?.role === 'admin' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 bg-amber-50 rounded-2xl shadow-lg border border-amber-200 p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <SafeIcon icon={FiCrown} className="w-6 h-6 text-amber-600" />
              <h3 className="text-xl font-bold text-amber-900">Admin Controls</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                to="/admin/system-administration"
                className="p-6 bg-white border-2 border-amber-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-colors text-left block"
              >
                <SafeIcon icon={FiUsers} className="w-8 h-8 text-amber-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">System Administration</h4>
                <p className="text-gray-600 text-sm">Manage system-wide settings and configurations</p>
              </Link>

              <Link
                to="/admin/global-policies"
                className="p-6 bg-white border-2 border-amber-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-colors text-left block"
              >
                <SafeIcon icon={FiSettings} className="w-8 h-8 text-amber-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Global Policies</h4>
                <p className="text-gray-600 text-sm">Configure organization-wide policies and rules</p>
              </Link>

              <Link
                to="/admin/security-overview"
                className="p-6 bg-white border-2 border-amber-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-colors text-left block"
              >
                <SafeIcon icon={FiShield} className="w-8 h-8 text-amber-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Security Overview</h4>
                <p className="text-gray-600 text-sm">Monitor security status across all tenants</p>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;