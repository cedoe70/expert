// src/components/user/UserLayout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaTachometerAlt, FaWallet, FaExchangeAlt, FaIdCard, FaPowerOff } from "react-icons/fa";

const UserLayout = () => {
  const menu = [
    { name: "Dashboard", path: "dashboard", icon: <FaTachometerAlt /> },
    { name: "Invest", path: "invest", icon: <FaWallet /> },
    { name: "Withdraw", path: "withdraw", icon: <FaExchangeAlt /> },
    { name: "KYC", path: "kyc", icon: <FaIdCard /> },
    { name: "Logout", path: "/", icon: <FaPowerOff /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">Expert Earn</h2>
        <nav className="flex flex-col gap-4">
          {menu.map((item) => (
            <NavLink
              to={`/user/${item.path}`}
              key={item.name}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                  isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-200"
                }`
              }
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
