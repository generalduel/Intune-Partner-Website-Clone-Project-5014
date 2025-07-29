import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiChevronDown, FiPhone, FiMail } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const managedServices = [
    { name: 'Intune Management', path: '/services/intune-management' },
    { name: 'Purview Services', path: '/services/purview-services' },
    { name: 'Endpoint Security', path: '/services/endpoint-security' },
    { name: 'Compliance Management', path: '/services/compliance-management' },
    { name: 'Device Management', path: '/services/device-management' },
  ];

  const projects = [
    { name: 'Cloud Migration', path: '/projects/cloud-migration' },
    { name: 'Intune Deployment', path: '/projects/intune-deployment' },
    { name: 'Purview Implementation', path: '/projects/purview-implementation' },
    { name: 'Security Assessment', path: '/projects/security-assessment' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary-700 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              <span>(404) 480-3547</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiMail} className="w-4 h-4" />
              <span>contact@yourintunepartner.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Support: support@yourintunepartner.com</span>
            <span>Sales: sales@yourintunepartner.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753747297020-blob" 
                alt="YourIntunePartner" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary-700">YourIntunePartner</h1>
                <p className="text-xs text-gray-600">Microsoft Intune Specialists</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === '/' ? 'text-primary-600 font-semibold' : ''
                }`}
              >
                Home
              </Link>

              {/* Managed Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
                  <span>Managed Services</span>
                  <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                    >
                      {managedServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Projects & Migrations Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('projects')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors">
                  <span>Projects & Migrations</span>
                  <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'projects' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                    >
                      {projects.map((project) => (
                        <Link
                          key={project.path}
                          to={project.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {project.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/advisory-services" 
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === '/advisory-services' ? 'text-primary-600 font-semibold' : ''
                }`}
              >
                Advisory & Mentoring
              </Link>

              <Link 
                to="/about" 
                className={`text-gray-700 hover:text-primary-600 transition-colors ${
                  location.pathname === '/about' ? 'text-primary-600 font-semibold' : ''
                }`}
              >
                About
              </Link>

              <Link 
                to="/contact" 
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-gray-200"
              >
                <div className="py-4 space-y-2">
                  <Link 
                    to="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-md"
                  >
                    Home
                  </Link>
                  
                  <div className="px-4 py-2">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Managed Services</p>
                    <div className="pl-4 space-y-1">
                      {managedServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-1 text-gray-600 hover:text-primary-600"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="px-4 py-2">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Projects & Migrations</p>
                    <div className="pl-4 space-y-1">
                      {projects.map((project) => (
                        <Link
                          key={project.path}
                          to={project.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-1 text-gray-600 hover:text-primary-600"
                        >
                          {project.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to="/advisory-services" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-md"
                  >
                    Advisory & Mentoring
                  </Link>

                  <Link 
                    to="/about" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 rounded-md"
                  >
                    About
                  </Link>

                  <Link 
                    to="/contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className="block mx-4 mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg text-center"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;