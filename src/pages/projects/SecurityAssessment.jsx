import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiShield, FiArrowRight, FiCheckCircle, FiEye, FiAlertTriangle, FiBarChart3 } = FiIcons;

const SecurityAssessment = () => {
  const assessmentPhases = [
    {
      title: 'Initial Discovery',
      description: 'Comprehensive inventory and analysis of your current security posture.',
      duration: '1-2 weeks',
      activities: ['Asset inventory', 'Security tool assessment', 'Policy review', 'Risk identification']
    },
    {
      title: 'Vulnerability Analysis',
      description: 'In-depth analysis of security vulnerabilities and threat vectors.',
      duration: '2-3 weeks',
      activities: ['Vulnerability scanning', 'Penetration testing', 'Configuration review', 'Compliance assessment']
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis and business impact evaluation.',
      duration: '1-2 weeks',
      activities: ['Risk scoring', 'Business impact analysis', 'Threat modeling', 'Control effectiveness']
    },
    {
      title: 'Recommendations & Roadmap',
      description: 'Detailed recommendations and implementation roadmap for security improvements.',
      duration: '1 week',
      activities: ['Security roadmap', 'Priority recommendations', 'Cost-benefit analysis', 'Implementation plan']
    }
  ];

  const assessmentAreas = [
    {
      icon: FiShield,
      title: 'Endpoint Security',
      description: 'Comprehensive assessment of endpoint protection and device security.',
      scope: ['Device compliance', 'Antivirus effectiveness', 'Patch management', 'Mobile device security']
    },
    {
      icon: FiEye,
      title: 'Identity & Access',
      description: 'Evaluation of identity management and access control systems.',
      scope: ['Authentication methods', 'Privileged access', 'Access reviews', 'Identity governance']
    },
    {
      icon: FiBarChart3,
      title: 'Data Protection',
      description: 'Assessment of data classification, protection, and loss prevention measures.',
      scope: ['Data classification', 'DLP policies', 'Encryption status', 'Data governance']
    }
  ];

  const deliverables = [
    'Executive security summary',
    'Detailed vulnerability report',
    'Risk assessment matrix',
    'Compliance gap analysis',
    'Remediation roadmap',
    'Security improvement recommendations'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Security Assessment
                <span className="text-orange-200 block">Projects</span>
              </h1>
              <p className="text-xl text-orange-100 leading-relaxed">
                Comprehensive security assessments to identify vulnerabilities, 
                assess risks, and provide actionable recommendations for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-orange-700 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center"
                >
                  Assess Your Security
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
                alt="Security Assessment" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Assessment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach provides comprehensive security assessment and actionable insights.
            </p>
          </div>

          <div className="space-y-12">
            {assessmentPhases.map((phase, index) => (
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
                      <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {phase.title}
                        </h3>
                        <p className="text-orange-600 font-medium">{phase.duration}</p>
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

      {/* Assessment Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Assessment Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive evaluation across all critical security domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {assessmentAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={area.icon} className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <h4 className="font-semibold text-gray-900 mb-3">Assessment Scope:</h4>
                <ul className="space-y-2">
                  {area.scope.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Assessment Deliverables
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive reports and recommendations to guide your security improvement efforts.
              </p>
              
              <div className="space-y-4">
                {deliverables.map((deliverable, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{deliverable}</span>
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
                alt="Security Reports" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assessment Value */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Assessment Value
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our security assessments provide measurable value and actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: '100+', label: 'Security Controls Evaluated' },
              { metric: '95%', label: 'Risk Identification Rate' },
              { metric: '30 days', label: 'Assessment Timeline' },
              { metric: '24/7', label: 'Post-Assessment Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Understand Your Security Posture
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Ready to assess your organization's security? Get comprehensive insights 
              and actionable recommendations from our security experts.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center"
            >
              Schedule Your Security Assessment
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityAssessment;