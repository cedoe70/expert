import React from "react";
import UserLayout from "./UserLayout"; // ✅ Fixed path

const Dashboard = () => {
  return (
    <UserLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-2">Total Investment</h2>
            <p className="text-2xl font-bold text-blue-600">$0.00</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-2">Earnings</h2>
            <p className="text-2xl font-bold text-green-600">$0.00</p>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-2">Withdrawable</h2>
            <p className="text-2xl font-bold text-yellow-500">$0.00</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
              <span>Joined Expert Earn</span>
              <span>Just now</span>
            </li>
            {/* Add more dynamic activity entries here */}
          </ul>
        </div>
      </div>
    </UserLayout>
  );
};

export default Dashboard;
