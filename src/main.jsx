import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import InvestmentPlans from "./pages/admin/InvestmentPlans";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/investment-plans" element={<InvestmentPlans />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
