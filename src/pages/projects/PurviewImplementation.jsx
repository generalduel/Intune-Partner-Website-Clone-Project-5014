import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDatabase, FiArrowRight, FiCheckCircle, FiEye, FiLock, FiFileText } = FiIcons;

const PurviewImplementation = () => {
  const implementationPhases = [
    {
      title: 'Data Discovery & Assessment',
      description: 'Comprehensive discovery and assessment of your data landscape and governance needs.',
      duration: '2-3 weeks',
      deliverables: ['Data inventory', 'Risk assessment', 'Compliance gap analysis', 'Implementation roadmap']
    },
    {
      title: 'Architecture & Design',
      description: 'Design comprehensive data governance architecture and policy framework.',
      duration: '2-4 weeks',
      deliverables: ['Architecture design', 'Policy framework', 'Classification schema', 'Integration plan']
    },
    {
      title: 'Purview Deployment',
      description: 'Deploy and configure Microsoft Purview with initial policies and classifications.',
      duration: '3-5 weeks',
      deliverables: ['Purview configuration', 'Policy deployment', 'Data classification', 'Testing & validation']
    },
    {
      title: 'Training & Optimization',
      description: 'User training, documentation, and ongoing optimization of Purview implementation.',
      duration: '2-3 weeks',
      deliverables: ['User training', 'Documentation', 'Optimization recommendations', 'Support handover']
    }
  ];

  const capabilities = [
    {
      icon: FiDatabase,
      title: 'Data Governance',
      description: 'Comprehensive data governance framework with automated discovery and classification.',
      features: ['Data discovery', 'Automated classification', 'Lineage tracking', 'Quality monitoring']
    },
    {
      icon: FiEye,
      title: 'Data Loss Prevention',
      description: 'Advanced DLP policies to protect sensitive information across all platforms.',
      features: ['Policy configuration', 'Endpoint protection', 'Email security', 'Cloud app protection']
    },
    {
      icon: FiLock,
      title: 'Information Protection',
      description: 'Sensitivity labeling and encryption to protect data throughout its lifecycle.',
      features: ['Sensitivity labels', 'Encryption policies', 'Rights management', 'Access controls']
    }
  ];

  const benefits = [
    'Enhanced data visibility and control',
    'Automated compliance monitoring',
    'Reduced data security risks',
    'Streamlined regulatory reporting',
    'Improved data quality',
    'Centralized governance framework'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Purview Implementation
                <span className="text-teal-200 block">Projects</span>
              </h1>
              <p className="text-xl text-teal-100 leading-relaxed">
                Comprehensive Microsoft Purview implementation services to establish 
                data governance, protection, and compliance across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors inline-flex items-center justify-center"
                >
                  Implement Purview
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Purview Implementation" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures successful Purview implementation with comprehensive data governance.
            </p>
          </div>

          <div className="space-y-12">
            {implementationPhases.map((phase, index) => (
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
                      <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {phase.title}
                        </h3>
                        <p className="text-teal-600 font-medium">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Deliverables:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-3">
                          <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{deliverable}</span>
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

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Purview Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data governance and protection capabilities implemented through Microsoft Purview.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={capability.icon} className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
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
                Implementation Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Microsoft Purview implementation provides comprehensive data governance 
                and protection benefits for your organization.
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
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Purview Benefits" 
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
              Implementation Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We measure implementation success through comprehensive data governance metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '100%', label: 'Data Discovery Coverage' },
              { metric: '95%+', label: 'Classification Accuracy' },
              { metric: '90%', label: 'Policy Compliance' },
              { metric: '<60 days', label: 'Implementation Timeline' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Implement Comprehensive Data Governance
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Ready to establish data governance with Microsoft Purview? 
              Let our experts guide you through a successful implementation.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-50 transition-colors inline-flex items-center justify-center"
            >
              Start Your Purview Implementation
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PurviewImplementation;