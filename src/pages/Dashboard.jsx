import React from "react";

const Dashboard = () => {
  const userName = "John Doe"; // replace with dynamic user data
  const currentBalance = "$5,200.00";
  const activePlan = {
    name: "Gold Plan",
    interestRate: "12%",
    amount: "$2,000",
  };
  const transactions = [
    { id: 1, type: "Deposit", amount: "$1,000", date: "2025-07-28" },
    { id: 2, type: "Withdrawal", amount: "$500", date: "2025-07-26" },
    { id: 3, type: "Deposit", amount: "$2,000", date: "2025-07-22" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Welcome, {userName} 👋</h1>

      {/* Balance and Plan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Current Balance</h2>
          <p className="text-3xl font-bold text-green-600">{currentBalance}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Active Plan</h2>
          <p className="text-gray-800">{activePlan.name}</p>
          <p className="text-sm text-gray-500">Amount: {activePlan.amount}</p>
          <p className="text-sm text-gray-500">Interest: {activePlan.interestRate}</p>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Recent Transactions</h2>
        <ul className="space-y-3">
          {transactions.map(tx => (
            <li key={tx.id} className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-600">{tx.type}</span>
              <span className="text-gray-800 font-semibold">{tx.amount}</span>
              <span className="text-sm text-gray-500">{tx.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-blue-600 text-white py-3 rounded-xl shadow hover:bg-blue-700">
          Invest Now
        </button>
        <button className="bg-yellow-500 text-white py-3 rounded-xl shadow hover:bg-yellow-600">
          Withdraw Funds
        </button>
        <button className="bg-gray-800 text-white py-3 rounded-xl shadow hover:bg-gray-900">
          View KYC Status
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
