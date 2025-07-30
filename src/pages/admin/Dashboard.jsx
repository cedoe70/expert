import React from "react";
import { FaUsers, FaChartLine, FaWallet, FaExchangeAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-5 flex items-center gap-4">
          <FaUsers className="text-3xl text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="text-xl font-bold">1,240</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-5 flex items-center gap-4">
          <FaChartLine className="text-3xl text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Active Plans</p>
            <p className="text-xl font-bold">320</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-5 flex items-center gap-4">
          <FaWallet className="text-3xl text-purple-600" />
          <div>
            <p className="text-sm text-gray-500">Total Balance</p>
            <p className="text-xl font-bold">$92,410</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-5 flex items-center gap-4">
          <FaExchangeAlt className="text-3xl text-red-600" />
          <div>
            <p className="text-sm text-gray-500">Pending Withdrawals</p>
            <p className="text-xl font-bold">38</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
