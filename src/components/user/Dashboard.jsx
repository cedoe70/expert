import React from "react";
import UserLayout from "@/components/user/UserLayout";
import { FaWallet, FaChartLine, FaCheckCircle } from "react-icons/fa";

const Dashboard = () => {
  const user = {
    name: "John Doe",
    totalInvested: 1200,
    totalWithdrawn: 600,
    kycStatus: "Verified",
  };

  const stats = [
    {
      title: "Total Invested",
      value: `$${user.totalInvested}`,
      icon: <FaChartLine className="text-blue-500 text-2xl" />,
    },
    {
      title: "Total Withdrawn",
      value: `$${user.totalWithdrawn}`,
      icon: <FaWallet className="text-green-500 text-2xl" />,
    },
    {
      title: "KYC Status",
      value: user.kycStatus,
      icon: <FaCheckCircle className="text-purple-500 text-2xl" />,
    },
  ];

  return (
    <UserLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome, {user.name}</h1>
        <p className="text-gray-600 mt-1">Here’s your investment overview</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-2xl p-5 border hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-lg font-semibold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
          <ul className="bg-white border rounded-2xl divide-y">
            <li className="p-4 flex justify-between">
              <span>Invested $300 in Basic Plan</span>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </li>
            <li className="p-4 flex justify-between">
              <span>Withdrawal of $150 approved</span>
              <span className="text-gray-500 text-sm">5 days ago</span>
            </li>
            <li className="p-4 flex justify-between">
              <span>KYC verified successfully</span>
              <span className="text-gray-500 text-sm">1 week ago</span>
            </li>
          </ul>
        </div>
      </div>
    </UserLayout>
  );
};

export default Dashboard;
