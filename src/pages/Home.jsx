import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { 
  FiShield, FiCloud, FiMonitor, FiUsers, FiTrendingUp, 
  FiCheckCircle, FiArrowRight, FiAward, FiClock, FiStar, FiPhone 
} = FiIcons;

const Home = () => {
  const services = [
    {
      icon: FiShield,
      title: 'Microsoft Intune Management',
      description: 'Comprehensive device and application management with Microsoft Intune.',
      link: '/services/intune-management'
    },
    {
      icon: FiCloud,
      title: 'Purview Services',
      description: 'Data governance, compliance, and risk management with Microsoft Purview.',
      link: '/services/purview-services'
    },
    {
      icon: FiMonitor,
      title: 'Endpoint Security',
      description: 'Advanced endpoint protection and security monitoring solutions.',
      link: '/services/endpoint-security'
    },
    {
      icon: FiUsers,
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance across your organization.',
      link: '/services/compliance-management'
    }
  ];

  const stats = [
    { number: '500+', label: 'Devices Managed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  const benefits = [
    'Expert Microsoft Intune specialists',
    'Proactive monitoring and management',
    'Rapid deployment and migration',
    'Comprehensive security solutions',
    '24/7 technical support',
    'Cost-effective managed services'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Trusted 
                <span className="text-primary-200 block">Intune Partner</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                Specialized Microsoft Intune managed services, Purview implementation, 
                and endpoint security solutions for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
                >
                  Get Started Today
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Microsoft Intune Management" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-6 space-y-4">
                  <h3 className="text-xl font-semibold">Enterprise-Grade Solutions</h3>
                  <p className="text-primary-100">
                    Secure, scalable, and compliant Microsoft ecosystem management.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Managed Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Microsoft Intune and security solutions tailored to your business needs.
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
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center"
                >
                  Learn More
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose YourIntunePartner?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We specialize exclusively in Microsoft Intune and related technologies, 
                ensuring you get the expertise and attention your business deserves.
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
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Microsoft Technology Expertise" 
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiAward} className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Microsoft Certified</div>
                    <div className="text-sm text-gray-600">Expert Partners</div>
                  </div>
                </div>
              </div>
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
              Ready to Secure Your Digital Workplace?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact us today for a free consultation and discover how we can help 
              optimize your Microsoft Intune environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiClock} className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Link>
              <a 
                href="tel:4044803547" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="mr-2 w-5 h-5" />
                Call (404) 480-3547
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;