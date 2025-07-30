import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Admin Layout and Pages
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/Dashboard";
import InvestmentPlans from "./components/admin/InvestmentPlans";
import KYCRequests from "./components/admin/KYCRequests";
import Withdrawals from "./components/admin/Withdrawals";
import UserBalances from "./components/admin/UserBalances";
import DepositAddresses from "./components/admin/DepositAddresses";
import ActivityLog from "./components/admin/ActivityLog";
import Settings from "./components/admin/Settings";

// User Layout and Pages
import UserLayout from "./components/user/UserLayout";
import UserDashboard from "./components/user/Dashboard";
import Invest from "./components/user/Invest";
import Withdraw from "./components/user/Withdraw";
import KYC from "./components/user/KYC";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to admin investment plans page */}
        <Route path="/" element={<Navigate to="/admin/investment-plans" replace />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="investment-plans" element={<InvestmentPlans />} />
          <Route path="kyc-requests" element={<KYCRequests />} />
          <Route path="withdrawals" element={<Withdrawals />} />
          <Route path="user-balances" element={<UserBalances />} />
          <Route path="deposit-addresses" element={<DepositAddresses />} />
          <Route path="activity-log" element={<ActivityLog />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* User routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="invest" element={<Invest />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="kyc" element={<KYC />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
