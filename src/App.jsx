import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/admin/AdminLayout";
import InvestmentPlans from "./pages/admin/InvestmentPlans";
import KYCRequests from "./pages/admin/KYCRequests";
import Withdrawals from "./pages/admin/Withdrawals";
import UserBalances from "./pages/admin/UserBalances";
import DepositAddresses from "./pages/admin/DepositAddresses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/investment-plans" replace />} />
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="investment-plans" element={<InvestmentPlans />} />
          <Route path="kyc-requests" element={<KYCRequests />} />
          <Route path="withdrawals" element={<Withdrawals />} />
          <Route path="user-balances" element={<UserBalances />} />
          <Route path="deposit-addresses" element={<DepositAddresses />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
