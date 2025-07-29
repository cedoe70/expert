import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Admin pages
import InvestmentPlans from "./pages/admin/InvestmentPlans";
import KYCRequests from "./pages/admin/KYCRequests";
import Withdrawals from "./pages/admin/Withdrawals";
import UserBalances from "./pages/admin/UserBalances";
import DepositAddresses from "./pages/admin/DepositAddresses";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/investment-plans" element={<InvestmentPlans />} />
        <Route path="/admin/kyc-requests" element={<KYCRequests />} />
        <Route path="/admin/withdrawals" element={<Withdrawals />} />
        <Route path="/admin/user-balances" element={<UserBalances />} />
        <Route path="/admin/deposit-addresses" element={<DepositAddresses />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
