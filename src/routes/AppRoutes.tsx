import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';
import ProfileDisplay from '../components/ProfileDisplay';
import NotFound from '../components/NotFound';
import Navbar from '../components/Navbar';

const AppRoutes: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/profile-form" element={<ProfileForm />} />
      <Route path="/profile" element={<ProfileDisplay />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  </Router>
);

export default AppRoutes;
