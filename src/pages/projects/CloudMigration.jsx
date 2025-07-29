import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCloud, FiArrowRight, FiCheckCircle, FiTrendingUp, FiShield, FiUsers } = FiIcons;

const CloudMigration = () => {
  const phases = [
    {
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current infrastructure and migration readiness.',
      duration: '2-4 weeks',
      deliverables: ['Infrastructure inventory', 'Migration readiness assessment', 'Risk analysis', 'Cost estimation']
    },
    {
      title: 'Planning & Design',
      description: 'Detailed migration strategy and cloud architecture design.',
      duration: '3-6 weeks',
      deliverables: ['Migration strategy', 'Cloud architecture design', 'Security framework', 'Implementation timeline']
    },
    {
      title: 'Migration Execution',
      description: 'Phased migration of applications, data, and services to Microsoft Azure.',
      duration: '8-16 weeks',
      deliverables: ['Data migration', 'Application migration', 'Service configuration', 'Testing & validation']
    },
    {
      title: 'Optimization & Support',
      description: 'Post-migration optimization and ongoing support services.',
      duration: 'Ongoing',
      deliverables: ['Performance optimization', 'Cost optimization', 'Monitoring setup', '24/7 support']
    }
  ];

  const benefits = [
    'Reduced infrastructure costs',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    'Better disaster recovery capabilities',
    'Increased operational efficiency',
    'Access to advanced cloud services'
  ];

  const services = [
    {
      icon: FiCloud,
      title: 'Azure Infrastructure Migration',
      description: 'Complete migration of on-premises infrastructure to Microsoft Azure cloud.',
      features: ['Virtual machine migration', 'Network configuration', 'Storage optimization', 'Backup & recovery']
    },
    {
      icon: FiShield,
      title: 'Security & Compliance',
      description: 'Ensure security and compliance throughout the migration process.',
      features: ['Security assessment', 'Compliance mapping', 'Identity management', 'Data protection']
    },
    {
      icon: FiTrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize cloud resources for maximum performance and cost efficiency.',
      features: ['Resource rightsizing', 'Cost optimization', 'Performance monitoring', 'Auto-scaling configuration']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Cloud Migration
                <span className="text-blue-200 block">Projects</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Seamless migration to Microsoft Azure with comprehensive planning, 
                execution, and optimization services for your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Migration
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cloud Migration" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration Phases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures a smooth and successful migration to the cloud.
            </p>
          </div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
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
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {phase.title}
                        </h3>
                        <p className="text-blue-600 font-medium">{phase.duration}</p>
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Migration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud migration services to ensure successful transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-blue-600" />
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
                Cloud Migration Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Migrating to Microsoft Azure provides significant benefits for your organization's 
                efficiency, security, and scalability.
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cloud Benefits" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your cloud transformation journey with our expert migration services. 
              Contact us for a free assessment and migration strategy.
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Begin Your Cloud Journey
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudMigration;