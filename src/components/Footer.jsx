import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMail, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753747297020-blob"
                alt="YourIntunePartner"
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">YourIntunePartner</h3>
                <p className="text-sm text-gray-400">Microsoft Intune Specialists</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for Microsoft Intune managed services, Purview implementation, and endpoint security solutions. We help organizations secure and manage their digital workplace.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Managed Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/intune-management"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Intune Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/purview-services"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Purview Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/endpoint-security"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Endpoint Security
                </Link>
              </li>
              <li>
                <Link
                  to="/services/compliance-management"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Compliance Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/device-management"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Device Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Projects & Migrations</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/projects/cloud-migration"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Cloud Migration
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/intune-deployment"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Intune Deployment
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/purview-implementation"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Purview Implementation
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/security-assessment"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Security Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300 text-sm">(404) 480-3547</span>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-400 mt-0.5" />
                <div className="text-gray-300 text-sm space-y-1">
                  <div>support@yourintunepartner.com</div>
                  <div>sales@yourintunepartner.com</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 YourIntunePartner.com. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;