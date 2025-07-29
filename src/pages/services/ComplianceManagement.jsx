import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheckSquare, FiFileText, FiShield, FiBarChart3, FiCheckCircle, FiArrowRight } = FiIcons;

const ComplianceManagement = () => {
  const regulations = [
    { name: 'GDPR', description: 'General Data Protection Regulation compliance for EU data protection' },
    { name: 'HIPAA', description: 'Healthcare data protection and privacy requirements' },
    { name: 'SOX', description: 'Sarbanes-Oxley Act compliance for financial reporting' },
    { name: 'ISO 27001', description: 'Information security management system standards' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standards' },
    { name: 'CCPA', description: 'California Consumer Privacy Act requirements' }
  ];

  const features = [
    {
      icon: FiCheckSquare,
      title: 'Automated Compliance Monitoring',
      description: 'Continuous monitoring of compliance status with automated alerts and remediation suggestions.',
      capabilities: ['Real-time compliance scoring', 'Policy violation detection', 'Automated reporting', 'Risk assessment']
    },
    {
      icon: FiFileText,
      title: 'Documentation & Audit Trails',
      description: 'Comprehensive documentation and audit trails to support compliance audits and reviews.',
      capabilities: ['Audit log management', 'Evidence collection', 'Report generation', 'Document retention']
    },
    {
      icon: FiBarChart3,
      title: 'Compliance Analytics',
      description: 'Advanced analytics and reporting to track compliance trends and identify improvement areas.',
      capabilities: ['Compliance dashboards', 'Trend analysis', 'Risk scoring', 'Performance metrics']
    }
  ];

  const benefits = [
    'Reduced compliance risks and penalties',
    'Streamlined audit processes',
    'Automated policy enforcement',
    'Comprehensive reporting capabilities',
    'Proactive risk identification',
    'Centralized compliance management'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Compliance
                <span className="text-green-200 block">Management</span>
              </h1>
              <p className="text-xl text-green-100 leading-relaxed">
                Comprehensive compliance management solutions to ensure your organization 
                meets regulatory requirements and maintains audit readiness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
                >
                  Ensure Compliance
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
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Compliance Management" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Regulatory Compliance Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help organizations meet a wide range of regulatory requirements 
              with automated compliance monitoring and reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regulations.map((regulation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={FiShield} className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {regulation.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {regulation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compliance Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced tools and capabilities to streamline compliance management 
              and reduce administrative overhead.
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
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{capability}</span>
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
                Compliance Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our compliance management solutions help organizations reduce risk, 
                streamline audits, and maintain continuous compliance posture.
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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Compliance Benefits" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Compliance Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured approach to implementing and maintaining compliance across your organization.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Assessment', description: 'Evaluate current compliance posture and identify gaps' },
                { step: '2', title: 'Planning', description: 'Develop comprehensive compliance strategy and roadmap' },
                { step: '3', title: 'Implementation', description: 'Deploy compliance controls and monitoring systems' },
                { step: '4', title: 'Monitoring', description: 'Continuous compliance monitoring and improvement' }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Achieve Continuous Compliance
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Ready to streamline your compliance management? Contact us to learn 
              how we can help your organization stay compliant and audit-ready.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
            >
              Start Your Compliance Journey
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComplianceManagement;