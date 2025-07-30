import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/user/dashboard" },
  { name: "Invest", path: "/user/invest" },
  { name: "Withdraw", path: "/user/withdraw" },
  { name: "KYC", path: "/user/kyc" },
];

const UserLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="px-6 py-4 text-center border-b">
          <h2 className="text-2xl font-bold text-indigo-600">Expert Earn</h2>
          <p className="text-sm text-gray-500">User Dashboard</p>
        </div>
        <nav className="mt-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-6 py-3 text-sm font-medium rounded-lg ${
                location.pathname === item.path
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-indigo-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="bg-white shadow rounded-lg p-6 h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default UserLayout;
