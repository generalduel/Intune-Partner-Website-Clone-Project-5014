import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiLock, FiEye, FiAlertTriangle, FiCheckCircle, FiArrowRight } = FiIcons;

const EndpointSecurity = () => {
  const threats = [
    'Malware and ransomware attacks',
    'Unauthorized device access',
    'Data breaches and leaks',
    'Compliance violations',
    'Insider threats',
    'Zero-day exploits'
  ];

  const solutions = [
    {
      icon: FiShield,
      title: 'Advanced Threat Protection',
      description: 'Real-time threat detection and response with Microsoft Defender for Endpoint integration.',
      features: ['Behavioral analysis', 'Machine learning detection', 'Automated response', 'Threat intelligence']
    },
    {
      icon: FiLock,
      title: 'Device Compliance',
      description: 'Enforce security policies and ensure all devices meet organizational standards.',
      features: ['Compliance policies', 'Device encryption', 'PIN requirements', 'App restrictions']
    },
    {
      icon: FiEye,
      title: 'Continuous Monitoring',
      description: '24/7 monitoring and alerting for security events and policy violations.',
      features: ['Real-time alerts', 'Security dashboards', 'Incident response', 'Forensic analysis']
    }
  ];

  const benefits = [
    'Proactive threat detection and prevention',
    'Centralized security management',
    'Automated incident response',
    'Comprehensive compliance reporting',
    'Reduced security operational overhead',
    'Enhanced visibility across all endpoints'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Endpoint Security
                <span className="text-red-200 block">Solutions</span>
              </h1>
              <p className="text-xl text-red-100 leading-relaxed">
                Advanced endpoint security and threat protection to safeguard your 
                organization's devices and data from evolving cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-700 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center justify-center"
                >
                  Secure Your Endpoints
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
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Endpoint Security" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Today's Endpoint Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations face an ever-evolving landscape of endpoint threats that 
              require advanced protection and proactive monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiAlertTriangle} className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{threat}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-layered endpoint security approach to protect against all types of threats.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={solution.icon} className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
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

      {/* Security Framework */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Zero Trust Security Framework
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our endpoint security solutions are built on zero trust principles, 
                ensuring every device and user is verified before accessing resources.
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
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Zero Trust Security" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Security Performance Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track and measure your security posture with comprehensive reporting and analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '99.9%', label: 'Threat Detection Rate' },
              { metric: '<5min', label: 'Average Response Time' },
              { metric: '24/7', label: 'Continuous Monitoring' },
              { metric: '100%', label: 'Compliance Coverage' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Strengthen Your Endpoint Security Today
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Don't wait for a security incident. Contact us to implement advanced 
              endpoint protection for your organization.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center justify-center"
            >
              Secure Your Organization
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EndpointSecurity;