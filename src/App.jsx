import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;