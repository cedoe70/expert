import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "./pages/user/Dashboard"
import Invest from "./pages/user/Invest"
import Withdraw from "./pages/user/Withdraw"
import KYC from "./pages/user/KYC"
import UserLayout from "./components/UserLayout"

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-soft min-h-screen text-dark">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/" element={<UserLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/kyc" element={<KYC />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
