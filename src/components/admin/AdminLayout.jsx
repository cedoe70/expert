import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaMoneyCheckAlt, FaUsers, FaCog, FaAddressCard, FaChartLine, FaHistory, FaFileUpload } from "react-icons/fa";

const AdminLayout = () => {
  const location = useLocation();

  const navItems = [
    { path: "/admin/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
    { path: "/admin/investment-plans", label: "Investment Plans", icon: <FaChartLine /> },
    { path: "/admin/kyc-requests", label: "KYC Requests", icon: <FaAddressCard /> },
    { path: "/admin/withdrawals", label: "Withdrawals", icon: <FaMoneyCheckAlt /> },
    { path: "/admin/user-balances", label: "User Balances", icon: <FaUsers /> },
    { path: "/admin/deposit-addresses", label: "Deposit Addresses", icon: <FaFileUpload /> },
    { path: "/admin/activity-log", label: "Activity Log", icon: <FaHistory /> },
    { path: "/admin/settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-700 transition ${
                location.pathname === item.path ? "bg-gray-700" : ""
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
