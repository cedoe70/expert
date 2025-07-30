// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Admin Layout and Pages
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import InvestmentPlans from "./pages/admin/InvestmentPlans";
import KYCRequests from "./pages/admin/KYCRequests";
import Withdrawals from "./pages/admin/Withdrawals";
import UserBalances from "./pages/admin/UserBalances";
import DepositAddresses from "./pages/admin/DepositAddresses";
import ActivityLog from "./pages/admin/ActivityLog";
import Settings from "./pages/admin/Settings";

// User Layout and Pages
import UserLayout from "./components/user/UserLayout";
import UserDashboard from "./pages/user/Dashboard";
// Future: import Invest from "./pages/user/Invest";
// Future: import Withdraw from "./pages/user/Withdraw";
// Future: import KYC from "./pages/user/KYC";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to admin dashboard */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="investment-plans" element={<InvestmentPlans />} />
          <Route path="kyc-requests" element={<KYCRequests />} />
          <Route path="withdrawals" element={<Withdrawals />} />
          <Route path="user-balances" element={<UserBalances />} />
          <Route path="deposit-addresses" element={<DepositAddresses />} />
          <Route path="activity-log" element={<ActivityLog />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* User Routes */}
        <Route path="/user/*" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          {/* Uncomment and add these as you build them:
          <Route path="invest" element={<Invest />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="kyc" element={<KYC />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
