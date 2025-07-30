import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaMoneyBillWave, FaUserShield, FaWallet, FaUsers, FaChartLine, FaHome, FaCog, FaExchangeAlt } from "react-icons/fa";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col justify-between">
        <div>
          <div className="p-6 text-2xl font-bold text-blue-600 border-b">Expert Earn Admin</div>
          <nav className="mt-6">
            <ul className="space-y-2 px-4">
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-md font-medium hover:bg-blue-100 ${
                      isActive ? "bg-blue-500 text-white" : "text-gray-700"
                    }`
                  }
                >
                  <FaHome /> Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/investment-plans"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-md font-medium hover:bg-blue-100 ${
                      isActive ? "bg-blue-500 text-white" : "text-gray-700"
                    }`
                  }
                >
                  <FaChartLine /> Investment Plans
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/kyc-requests"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-md font-medium hover:bg-blue-100 ${
                      isActive ? "bg-blue-500 text-white" : "text-gray-700"
                    }`
                  }
                >
                  <FaUserShield /> KYC Requests
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/withdrawals"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-md font-medium hover:bg-blue-100 ${
                      isActive ? "bg-blue-500 text-white" : "text-gray-700"
                    }`
                  }
                >
                  <FaExchangeAlt /> Withdrawals
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/user-balances"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-md font-medium hover:bg-blue-100 ${
                      isActive ? "bg-blue-500 text-white" : "text-gray-700"
                    }`
                  }
                >
                  <FaWallet /> User Balances
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/deposit-addresses"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-md font-medium hover:bg-blue-100 ${
                      isActive ? "bg-blue-500 text-white" : "text-gray-700"
                    }`
                  }
                >
                  <FaMoneyBillWave /> Deposit Addresses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/activity-log"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-md font-medium hover:bg-blue-100 ${
                      isActive ? "bg-blue-500 text-white" : "text-gray-700"
                    }`
                  }
                >
                  <FaUsers /> Activity Log
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/settings"
                  className={({ isActive }) =>
                    `flex items-center gap-3 p-3 rounded-md font-medium hover:bg-blue-100 ${
                      isActive ? "bg-blue-500 text-white" : "text-gray-700"
                    }`
                  }
                >
                  <FaCog /> Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4 text-sm text-center text-gray-400 border-t">
          &copy; {new Date().getFullYear()} Expert Earn
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
