import React from "react";
import { FaUsers, FaUserShield, FaExchangeAlt, FaWallet, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Welcome Admin 👋</h1>
        <p className="text-gray-500 mt-1">Here’s a quick overview of the platform’s activity.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-4">
            <FaUsers className="text-blue-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-lg font-semibold text-gray-800">1,254</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-4">
            <FaUserShield className="text-yellow-500 text-2xl" />
            <div>
              <p className="text-sm text-gray-500">KYC Requests</p>
              <p className="text-lg font-semibold text-gray-800">32 Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-4">
            <FaExchangeAlt className="text-red-500 text-2xl" />
            <div>
              <p className="text-sm text-gray-500">Withdrawals</p>
              <p className="text-lg font-semibold text-gray-800">89 Requests</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-4">
            <FaWallet className="text-green-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-500">Total Balance</p>
              <p className="text-lg font-semibold text-gray-800">$194,000</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-center gap-4">
            <FaChartLine className="text-purple-600 text-2xl" />
            <div>
              <p className="text-sm text-gray-500">Investments</p>
              <p className="text-lg font-semibold text-gray-800">$820K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 text-sm text-gray-700 flex justify-between">
            <span>John Doe submitted KYC</span>
            <span className="text-gray-400">2 hours ago</span>
          </li>
          <li className="py-3 text-sm text-gray-700 flex justify-between">
            <span>Jane Smith requested a withdrawal</span>
            <span className="text-gray-400">5 hours ago</span>
          </li>
          <li className="py-3 text-sm text-gray-700 flex justify-between">
            <span>Admin updated investment plan</span>
            <span className="text-gray-400">1 day ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
