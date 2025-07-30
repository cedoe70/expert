import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Admin components
import AdminLayout from "./components/admin/AdminLayout";
import InvestmentPlans from "./components/admin/InvestmentPlans";
import KYCRequests from "./components/admin/KYCRequests";
import Withdrawals from "./components/admin/Withdrawals";
import UserBalances from "./components/admin/UserBalances";
import DepositAddresses from "./components/admin/DepositAddresses";
import ActivityLog from "./components/admin/ActivityLog";
import AdminSettings from "./components/admin/Settings";
import AdminDashboard from "./components/admin/AdminDashboard"; // Only if you later re-create this

// User components
import UserDashboard from "./components/user/Dashboard";
import Invest from "./components/user/Invest";
import Withdraw from "./components/user/Withdraw";
import KYC from "./components/user/KYC";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to user dashboard */}
        <Route path="/" element={<Navigate to="/user/dashboard" />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/investment-plans" element={<AdminLayout><InvestmentPlans /></AdminLayout>} />
        <Route path="/admin/kyc-requests" element={<AdminLayout><KYCRequests /></AdminLayout>} />
        <Route path="/admin/withdrawals" element={<AdminLayout><Withdrawals /></AdminLayout>} />
        <Route path="/admin/user-balances" element={<AdminLayout><UserBalances /></AdminLayout>} />
        <Route path="/admin/deposit-addresses" element={<AdminLayout><DepositAddresses /></AdminLayout>} />
        <Route path="/admin/activity-log" element={<AdminLayout><ActivityLog /></AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />

        {/* User Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/invest" element={<Invest />} />
        <Route path="/user/withdraw" element={<Withdraw />} />
        <Route path="/user/kyc" element={<KYC />} />
      </Routes>
    </Router>
  );
}

export default App;
