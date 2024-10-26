// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import MainLayout from './layouts/MainLayout';
import Dashboard from './admin/pages/Dashboard/Dashboard';
import Home from './main/pages/Home';
import BannerView from './admin/pages/Banner/BannerView';
import BannerCreate from './admin/pages/Banner/BannerCreate';


function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout Routes */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />

        {/* Admin Layout Routes */}
        <Route path="/dashboard/*" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/dashboard/banner/view" element={<AdminLayout> <BannerView/> </AdminLayout>} />
        <Route path="/dashboard/banner/create" element={<AdminLayout> <BannerCreate/> </AdminLayout>} />
      </Routes>
    </Router>
  );
} 

export default App;
