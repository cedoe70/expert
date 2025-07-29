import React from 'react';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <nav className="space-y-3">
          <Link to="/admin" className="block hover:text-blue-400">Dashboard</Link>
          <Link to="/admin/investment-plans" className="block hover:text-blue-400">Investment Plans</Link>
          <Link to="/admin/kyc" className="block hover:text-blue-400">KYC Requests</Link>
          <Link to="/admin/withdrawals" className="block hover:text-blue-400">Withdrawals</Link>
          <Link to="/admin/users" className="block hover:text-blue-400">User Balances</Link>
          <Link to="/admin/deposit-addresses" className="block hover:text-blue-400">Deposit Addresses</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-10">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
