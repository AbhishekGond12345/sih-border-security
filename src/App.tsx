import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OcrExtraction from './pages/OcrExtraction';
import Screening from './pages/Screening';
import Validation from './pages/Validation';
import Tampering from './pages/Tampering';
import FaceVerification from './pages/FaceVerification';
import RiskAssessment from './pages/RiskAssessment';
import History from './pages/History';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import AuditLogs from './pages/AuditLogs';
import CaseDetails from './pages/CaseDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="screening" element={<Screening />} />
          <Route path="ocr" element={<OcrExtraction />} />
          <Route path="validation" element={<Validation />} />
          <Route path="tampering" element={<Tampering />} />
          <Route path="face-verification" element={<FaceVerification />} />
          <Route path="risk-assessment" element={<RiskAssessment />} />
          <Route path="history" element={<History />} />
          <Route path="case/:id" element={<CaseDetails />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="audit-logs" element={<AuditLogs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
