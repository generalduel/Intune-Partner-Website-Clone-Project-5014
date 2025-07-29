import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiArrowRight, FiCheckCircle, FiSettings, FiUsers, FiMonitor } = FiIcons;

const IntuneDeployment = () => {
  const deploymentPhases = [
    {
      title: 'Planning & Assessment',
      description: 'Comprehensive evaluation of your current environment and deployment requirements.',
      duration: '1-2 weeks',
      activities: ['Current state assessment', 'Requirements gathering', 'Architecture design', 'Migration planning']
    },
    {
      title: 'Tenant Setup & Configuration',
      description: 'Initial Intune tenant configuration and policy framework establishment.',
      duration: '1-2 weeks',
      activities: ['Tenant configuration', 'Policy creation', 'Group structure', 'Compliance settings']
    },
    {
      title: 'Pilot Deployment',
      description: 'Limited pilot deployment to validate configurations and processes.',
      duration: '2-3 weeks',
      activities: ['Pilot group selection', 'Device enrollment', 'Policy testing', 'User training']
    },
    {
      title: 'Full Rollout',
      description: 'Organization-wide deployment with phased approach and support.',
      duration: '4-8 weeks',
      activities: ['Phased enrollment', 'User communication', 'Support processes', 'Monitoring & optimization']
    }
  ];

  const components = [
    {
      icon: FiShield,
      title: 'Security Policies',
      description: 'Comprehensive security policy configuration for device and data protection.',
      features: ['Device compliance', 'Conditional access', 'App protection', 'Threat detection']
    },
    {
      icon: FiSettings,
      title: 'Device Configuration',
      description: 'Automated device configuration and management policies.',
      features: ['Configuration profiles', 'App deployment', 'Update management', 'Wi-Fi & VPN']
    },
    {
      icon: FiUsers,
      title: 'User Management',
      description: 'User provisioning and group-based policy assignment.',
      features: ['User enrollment', 'Group policies', 'Self-service portal', 'Role-based access']
    }
  ];

  const benefits = [
    'Simplified device management',
    'Enhanced security posture',
    'Reduced IT overhead',
    'Improved user productivity',
    'Centralized policy management',
    'Scalable deployment model'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Intune Deployment
                <span className="text-indigo-200 block">Projects</span>
              </h1>
              <p className="text-xl text-indigo-100 leading-relaxed">
                Expert Microsoft Intune deployment services to establish comprehensive 
                device management and security for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center justify-center"
                >
                  Deploy Intune
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
                alt="Intune Deployment" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deployment Phases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Deployment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful Intune deployment with minimal disruption.
            </p>
          </div>

          <div className="space-y-12">
            {deploymentPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {phase.title}
                        </h3>
                        <p className="text-indigo-600 font-medium">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Activities:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-center space-x-3">
                          <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Components */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Deployment Components
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Intune deployment covering all essential components for device management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {components.map((component, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={component.icon} className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {component.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {component.description}
                </p>
                <ul className="space-y-2">
                  {component.features.map((feature, featureIndex) => (
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
                Deployment Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Professional Intune deployment provides immediate and long-term benefits 
                for your organization's device management strategy.
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
                alt="Intune Benefits" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Deployment Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We measure deployment success through key performance indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '95%+', label: 'Successful Enrollments' },
              { metric: '<30 days', label: 'Deployment Timeline' },
              { metric: '99%', label: 'Policy Compliance' },
              { metric: '24/7', label: 'Post-Deployment Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Deploy Intune with Confidence
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Ready to implement Microsoft Intune in your organization? 
              Let our experts guide you through a successful deployment.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center justify-center"
            >
              Start Your Intune Deployment
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IntuneDeployment;