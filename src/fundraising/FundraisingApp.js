import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import RecentActivities from './RecentActivities';
import './App.css';

function FundraisingApp() {
  useEffect(() => {
    // Add class to body when fundraising app is active
    document.body.classList.add('fundraising-app-active');
    
    // Cleanup: remove class when component unmounts
    return () => {
      document.body.classList.remove('fundraising-app-active');
    };
  }, []);

  return (
    <div className="fundraising-app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="recent-activities" element={<RecentActivities />} />
      </Routes>
    </div>
  );
}

export default FundraisingApp;
