import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { OnBoarding } from '@questlabs/react-sdk';
import { useAuth } from '../../context/AuthContext';
import questConfig from '../../config/questConfig';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheckCircle, FiArrowRight, FiSettings, FiShield, FiUsers } = FiIcons;

const OnboardingPage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
  }, [isAuthenticated, navigate]);

  const getAnswers = () => {
    // Handle completion of onboarding
    console.log('Onboarding completed with answers:', answers);
    // Navigate to main application
    navigate('/');
  };

  const onboardingSteps = [
    {
      icon: FiSettings,
      title: 'Setup Your Workspace',
      description: 'Configure your preferences and settings'
    },
    {
      icon: FiShield,
      title: 'Security Configuration',
      description: 'Set up your security preferences'
    },
    {
      icon: FiUsers,
      title: 'Team Integration',
      description: 'Connect with your team and resources'
    }
  ];

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Section - Branding & Progress */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753747297020-blob" 
                alt="YourIntunePartner" 
                className="h-12 w-auto"
              />
              <div>
                <h2 className="text-2xl font-bold">YourIntunePartner</h2>
                <p className="text-emerald-200 text-sm">Microsoft Intune Specialists</p>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Let's Get You
              <span className="text-emerald-200 block">Set Up!</span>
            </h1>
            
            <p className="text-xl text-emerald-100 mb-12 leading-relaxed">
              We're setting up your personalized Microsoft Intune management experience. This will only take a few minutes.
            </p>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold mb-4">What we're setting up:</h3>
              {onboardingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={step.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                    <p className="text-emerald-100 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-center space-x-3 mb-3">
                <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-emerald-200" />
                <span className="font-semibold">Secure & Private</span>
              </div>
              <p className="text-emerald-100 text-sm">
                Your information is encrypted and secure. We follow industry best practices for data protection.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
      </div>

      {/* Right Section - Onboarding Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753747297020-blob" 
                alt="YourIntunePartner" 
                className="h-10 w-auto"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900">YourIntunePartner</h2>
                <p className="text-emerald-600 text-sm">Microsoft Intune Specialists</p>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Let's Get Started!</h1>
            <p className="text-gray-600">Setting up your personalized experience</p>
          </div>

          {/* Quest Onboarding Component */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100" style={{ minHeight: '400px' }}>
            <div className="hidden lg:block text-center pt-8 px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome!</h2>
              <p className="text-gray-600 mb-6">Let's personalize your experience</p>
            </div>

            <div className="quest-onboarding-container p-8">
              <OnBoarding
                userId={user?.id}
                token={user?.token}
                questId={questConfig.QUEST_ONBOARDING_QUESTID}
                answer={answers}
                setAnswer={setAnswers}
                getAnswers={getAnswers}
                singleChoose="modal1"
                multiChoice="modal2"
                primaryColor={questConfig.PRIMARY_COLOR}
              >
                <OnBoarding.Header />
                <OnBoarding.Content />
                <OnBoarding.Footer />
              </OnBoarding>
            </div>
          </div>

          {/* Skip Option */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-gray-500 hover:text-gray-700 text-sm font-medium inline-flex items-center"
            >
              Skip for now
              <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4" />
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Need assistance?{' '}
              <a href="mailto:support@yourintunepartner.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                Contact Support
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingPage;