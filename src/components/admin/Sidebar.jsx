import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { path: "/admin/investment-plans", label: "Investment Plans" },
    { path: "/admin/kyc-requests", label: "KYC Requests" },
    { path: "/admin/withdrawals", label: "Withdrawals" },
    { path: "/admin/user-balances", label: "User Balances" },
    { path: "/admin/deposit-addresses", label: "Deposit Addresses" },
  ];

  return (
    <aside className="w-64 h-screen bg-white shadow-md fixed">
      <div className="p-6 text-xl font-bold border-b">Expert Earn Admin</div>
      <nav className="flex flex-col p-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 ${
                isActive ? "bg-blue-100 text-blue-600 font-semibold" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
