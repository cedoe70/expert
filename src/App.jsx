import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import InvestmentPlans from "./pages/admin/InvestmentPlans";
import KYCRequests from "./pages/admin/KYCRequests";
import Withdrawals from "./pages/admin/Withdrawals";
import UserBalances from "./pages/admin/UserBalances";
import DepositAddresses from "./pages/admin/DepositAddresses";
import ActivityLog from "./pages/admin/ActivityLog";
import Settings from "./pages/admin/Settings";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root to default admin route */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

        {/* Admin layout with nested routes */}
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
      </Routes>
    </Router>
  );
}

export default App;
