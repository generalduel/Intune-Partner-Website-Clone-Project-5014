import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSmartphone, FiMonitor, FiTablet, FiSettings, FiCheckCircle, FiArrowRight } = FiIcons;

const DeviceManagement = () => {
  const platforms = [
    {
      icon: FiMonitor,
      name: 'Windows',
      description: 'Complete Windows device management including Windows 10/11, Surface devices, and traditional PCs.',
      features: ['Group Policy integration', 'Windows Update management', 'BitLocker encryption', 'Application deployment']
    },
    {
      icon: FiSmartphone,
      name: 'iOS & Android',
      description: 'Mobile device management for smartphones and tablets with comprehensive security controls.',
      features: ['App store management', 'VPN configuration', 'Email profiles', 'Device restrictions']
    },
    {
      icon: FiTablet,
      name: 'macOS',
      description: 'Apple device management with native macOS integration and enterprise security features.',
      features: ['FileVault encryption', 'System preferences', 'App distribution', 'Security policies']
    }
  ];

  const capabilities = [
    'Cross-platform device enrollment',
    'Automated policy deployment',
    'Remote device management',
    'Application lifecycle management',
    'Security compliance monitoring',
    'Device inventory and reporting'
  ];

  const features = [
    {
      icon: FiSettings,
      title: 'Unified Management Console',
      description: 'Single pane of glass for managing all devices across your organization regardless of platform.',
      benefits: ['Centralized administration', 'Consistent policies', 'Streamlined workflows', 'Reduced complexity']
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Application Management',
      description: 'Comprehensive mobile app deployment, updates, and security for both corporate and BYOD devices.',
      benefits: ['App wrapping', 'Conditional access', 'Data protection', 'App-level VPN']
    },
    {
      icon: FiMonitor,
      title: 'Desktop Management',
      description: 'Complete desktop and laptop management with automated provisioning and configuration.',
      benefits: ['Zero-touch deployment', 'Hardware inventory', 'Software distribution', 'Remote assistance']
    }
  ];

  const benefits = [
    'Reduced IT management overhead',
    'Improved security posture',
    'Enhanced user productivity',
    'Streamlined device provisioning',
    'Centralized policy management',
    'Comprehensive reporting and analytics'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Device
                <span className="text-purple-200 block">Management</span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Comprehensive device management solutions for all platforms - Windows, iOS, 
                Android, and macOS - from a single, unified management console.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
                >
                  Manage Your Devices
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Device Management" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Multi-Platform Device Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage all your devices from a single console, regardless of platform or operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={platform.icon} className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {platform.description}
                </p>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools and capabilities to streamline device management and enhance security.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Device Management Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive device management solutions provide significant operational 
                and security benefits for organizations of all sizes.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Device Management Benefits" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Device Management Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures smooth device onboarding and ongoing management.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Enrollment', description: 'Seamless device enrollment with zero-touch provisioning' },
                { step: '2', title: 'Configuration', description: 'Automated policy deployment and application installation' },
                { step: '3', title: 'Management', description: 'Ongoing monitoring, updates, and security management' },
                { step: '4', title: 'Retirement', description: 'Secure device retirement and data protection' }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Simplify Your Device Management
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Ready to streamline device management across your organization? 
              Contact us to learn how we can help you manage all your devices efficiently.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center justify-center"
            >
              Start Managing Your Devices
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DeviceManagement;