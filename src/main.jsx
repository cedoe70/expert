import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import InvestmentPlans from "./pages/admin/InvestmentPlans";

// You can add the following as you build them:
import KYCRequests from "./pages/admin/KYCRequests";
import Withdrawals from "./pages/admin/Withdrawals";
import UserBalances from "./pages/admin/UserBalances";
import DepositAddresses from "./pages/admin/DepositAddresses";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/investment-plans" element={<InvestmentPlans />} />
        <Route path="/admin/kyc" element={<KYCRequests />} />
        <Route path="/admin/withdrawals" element={<Withdrawals />} />
        <Route path="/admin/users" element={<UserBalances />} />
        <Route path="/admin/deposit-addresses" element={<DepositAddresses />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
