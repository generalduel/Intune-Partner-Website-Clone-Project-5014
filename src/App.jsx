import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QuestProvider } from '@questlabs/react-sdk';
import '@questlabs/react-sdk/dist/style.css';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';

// Auth Pages
import LoginPage from './pages/auth/LoginPage';
import OnboardingPage from './pages/auth/OnboardingPage';
import Dashboard from './pages/Dashboard';

// Admin Pages
import SystemAdministration from './pages/admin/SystemAdministration';
import GlobalPolicies from './pages/admin/GlobalPolicies';
import SecurityOverview from './pages/admin/SecurityOverview';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import IntuneManagement from './pages/services/IntuneManagement';
import PurviewServices from './pages/services/PurviewServices';
import EndpointSecurity from './pages/services/EndpointSecurity';
import ComplianceManagement from './pages/services/ComplianceManagement';
import DeviceManagement from './pages/services/DeviceManagement';
import CloudMigration from './pages/projects/CloudMigration';
import IntuneDeployment from './pages/projects/IntuneDeployment';
import PurviewImplementation from './pages/projects/PurviewImplementation';
import SecurityAssessment from './pages/projects/SecurityAssessment';
import AdvisoryServices from './pages/AdvisoryServices';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

import questConfig from './config/questConfig';
import './index.css';

function App() {
  return (
    <QuestProvider
      apiKey={questConfig.APIKEY}
      entityId={questConfig.ENTITYID}
      apiType="PRODUCTION"
    >
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/onboarding"
                element={
                  <ProtectedRoute>
                    <OnboardingPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              {/* Admin Routes */}
              <Route
                path="/admin/system-administration"
                element={
                  <ProtectedRoute>
                    <SystemAdministration />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/global-policies"
                element={
                  <ProtectedRoute>
                    <GlobalPolicies />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/security-overview"
                element={
                  <ProtectedRoute>
                    <SecurityOverview />
                  </ProtectedRoute>
                }
              />

              {/* Public Routes with Header/Footer */}
              <Route
                path="/*"
                element={
                  <>
                    <Header />
                    <main>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services/intune-management" element={<IntuneManagement />} />
                        <Route path="/services/purview-services" element={<PurviewServices />} />
                        <Route path="/services/endpoint-security" element={<EndpointSecurity />} />
                        <Route path="/services/compliance-management" element={<ComplianceManagement />} />
                        <Route path="/services/device-management" element={<DeviceManagement />} />
                        <Route path="/projects/cloud-migration" element={<CloudMigration />} />
                        <Route path="/projects/intune-deployment" element={<IntuneDeployment />} />
                        <Route path="/projects/purview-implementation" element={<PurviewImplementation />} />
                        <Route path="/projects/security-assessment" element={<SecurityAssessment />} />
                        <Route path="/advisory-services" element={<AdvisoryServices />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QuestProvider>
  );
}

export default App;