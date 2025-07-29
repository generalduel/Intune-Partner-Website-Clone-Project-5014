import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiMonitor, FiSettings, FiUsers, FiCheckCircle, FiArrowRight } = FiIcons;

const IntuneManagement = () => {
  const features = [
    {
      icon: FiMonitor,
      title: 'Device Enrollment & Configuration',
      description: 'Streamlined device enrollment with automated configuration policies for Windows, iOS, Android, and macOS devices.'
    },
    {
      icon: FiSettings,
      title: 'Application Management',
      description: 'Deploy, update, and manage applications across all devices with granular control and automated policies.'
    },
    {
      icon: FiShield,
      title: 'Security Policy Management',
      description: 'Implement and maintain comprehensive security policies including compliance, conditional access, and threat protection.'
    },
    {
      icon: FiUsers,
      title: 'User & Group Management',
      description: 'Efficient user provisioning and group-based policy assignment for streamlined administration.'
    }
  ];

  const benefits = [
    'Centralized device management across all platforms',
    'Automated compliance monitoring and reporting',
    'Reduced IT overhead with streamlined processes',
    'Enhanced security with zero-trust principles',
    'Scalable solutions for growing organizations',
    '24/7 monitoring and proactive support'
  ];

  const services = [
    {
      title: 'Initial Setup & Configuration',
      description: 'Complete Intune tenant setup, policy configuration, and device enrollment preparation.',
      timeline: '1-2 weeks'
    },
    {
      title: 'Device Migration',
      description: 'Seamless migration of existing devices to Intune management with minimal disruption.',
      timeline: '2-4 weeks'
    },
    {
      title: 'Ongoing Management',
      description: 'Continuous monitoring, policy updates, and optimization of your Intune environment.',
      timeline: 'Ongoing'
    },
    {
      title: 'Compliance Reporting',
      description: 'Regular compliance reports and recommendations for security improvements.',
      timeline: 'Monthly'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Microsoft Intune
                <span className="text-primary-200 block">Management Services</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Comprehensive Microsoft Intune management services to secure, configure, 
                and manage all your devices from a single, centralized platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
                >
                  Get Started
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Microsoft Intune Management" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Complete Intune Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive Intune management services cover every aspect of device 
              and application management for your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial setup to ongoing management, we provide end-to-end Intune services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-6 mb-12 last:mb-0"
              >
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {service.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
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
                Why Choose Our Intune Management?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our specialized Intune management services provide comprehensive device 
                security and management while reducing your IT overhead.
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Intune Management Benefits" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Streamline Your Device Management?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us today to learn how our Intune management services can 
              secure and simplify your device ecosystem.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
            >
              Start Your Intune Journey
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IntuneManagement;