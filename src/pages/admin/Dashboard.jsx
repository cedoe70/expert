import React from "react";
import {
  FaUserShield,
  FaExchangeAlt,
  FaWallet,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Active Users", value: "1,245", icon: <FaUsers />, color: "bg-blue-100 text-blue-600" },
          { title: "Total Investments", value: "$128K", icon: <FaChartLine />, color: "bg-green-100 text-green-600" },
          { title: "Pending KYC", value: "27", icon: <FaUserShield />, color: "bg-yellow-100 text-yellow-600" },
          { title: "Pending Withdrawals", value: "$3,400", icon: <FaExchangeAlt />, color: "bg-red-100 text-red-600" },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl shadow flex items-center gap-4">
            <div className={`p-3 rounded-full ${kpi.color}`}>{kpi.icon}</div>
            <div>
              <div className="text-sm text-gray-500">{kpi.title}</div>
              <div className="text-xl font-bold text-gray-800">{kpi.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Graph Placeholder */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="text-lg font-semibold text-gray-700 mb-2">Investment Overview</div>
        <div className="text-gray-400 italic text-sm">[Insert graph/chart here]</div>
      </div>
    </div>
  );
};

export default Dashboard;
