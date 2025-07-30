import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-2xl mt-2 text-blue-600">1,250</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold">Total Investments</h2>
          <p className="text-2xl mt-2 text-green-600">$245,000</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold">Pending KYC</h2>
          <p className="text-2xl mt-2 text-yellow-600">35</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold">Withdrawals</h2>
          <p className="text-2xl mt-2 text-red-500">$12,400</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold">Active Plans</h2>
          <p className="text-2xl mt-2 text-purple-600">9</p>
        </div>

        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold">System Health</h2>
          <p className="text-2xl mt-2 text-emerald-600">Good</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
