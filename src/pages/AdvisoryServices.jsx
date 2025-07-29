import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiBookOpen, FiTrendingUp, FiTarget, FiCheckCircle, FiArrowRight } = FiIcons;

const AdvisoryServices = () => {
  const services = [
    {
      icon: FiUsers,
      title: 'Strategic Consulting',
      description: 'Expert guidance on Microsoft Intune strategy, roadmap planning, and best practices.',
      features: ['Strategic planning', 'Technology roadmaps', 'Best practice guidance', 'Risk assessment']
    },
    {
      icon: FiBookOpen,
      title: 'Training & Education',
      description: 'Comprehensive training programs for your IT team on Microsoft Intune and security.',
      features: ['Hands-on training', 'Certification preparation', 'Custom workshops', 'Knowledge transfer']
    },
    {
      icon: FiTrendingUp,
      title: 'Optimization Services',
      description: 'Ongoing optimization and improvement of your Microsoft Intune environment.',
      features: ['Performance optimization', 'Policy refinement', 'Cost optimization', 'Security enhancement']
    },
    {
      icon: FiTarget,
      title: 'Architecture Review',
      description: 'Comprehensive review of your current architecture with improvement recommendations.',
      features: ['Architecture assessment', 'Gap analysis', 'Improvement plans', 'Future-proofing']
    }
  ];

  const benefits = [
    'Expert guidance from certified professionals',
    'Customized solutions for your organization',
    'Reduced implementation risks',
    'Accelerated time to value',
    'Knowledge transfer to internal teams',
    'Ongoing support and optimization'
  ];

  const approaches = [
    {
      title: 'Assessment & Analysis',
      description: 'Comprehensive evaluation of your current state and requirements.',
      duration: '1-2 weeks'
    },
    {
      title: 'Strategy Development',
      description: 'Development of customized strategy and roadmap for your organization.',
      duration: '2-3 weeks'
    },
    {
      title: 'Implementation Support',
      description: 'Guidance and support during implementation phases.',
      duration: 'Ongoing'
    },
    {
      title: 'Optimization & Training',
      description: 'Continuous optimization and team training for sustained success.',
      duration: 'Ongoing'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Advisory &
                <span className="text-emerald-200 block">Mentoring Services</span>
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed">
                Expert advisory and mentoring services to guide your Microsoft Intune 
                journey with strategic insights and hands-on support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
                >
                  Get Expert Guidance
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Advisory Services" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Advisory Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive advisory and mentoring services to ensure your success 
              with Microsoft Intune and related technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Advisory Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured methodology to deliver maximum value and ensure successful outcomes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-6 mb-12 last:mb-0"
              >
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {approach.title}
                      </h3>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {approach.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {approach.description}
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
                Why Choose Our Advisory Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our advisory services provide strategic guidance and hands-on support 
                to ensure your Microsoft Intune initiatives deliver maximum value.
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Advisory Benefits" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep expertise across the Microsoft ecosystem to provide comprehensive advisory services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Microsoft Intune',
                areas: ['Device management', 'Application deployment', 'Security policies', 'Compliance management']
              },
              {
                title: 'Microsoft Purview',
                areas: ['Data governance', 'Information protection', 'Compliance automation', 'Risk management']
              },
              {
                title: 'Security & Compliance',
                areas: ['Zero trust architecture', 'Conditional access', 'Identity management', 'Threat protection']
              }
            ].map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {expertise.title}
                </h3>
                <ul className="space-y-3">
                  {expertise.areas.map((area, areaIndex) => (
                    <li key={areaIndex} className="flex items-center space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Get Expert Advisory Support
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Ready to accelerate your Microsoft Intune success? Contact us for 
              expert advisory and mentoring services tailored to your needs.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors inline-flex items-center justify-center"
            >
              Start Your Advisory Journey
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvisoryServices;