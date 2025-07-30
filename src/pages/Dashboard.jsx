import React from "react"

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Welcome back 👋</h2>
        <p className="text-gray-500">Track your investments and activity easily.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold">Total Invested</h3>
          <p className="text-2xl font-bold mt-2">$5,200</p>
        </div>

        <div className="bg-gradient-to-br from-green-400 to-teal-500 text-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold">Total Returns</h3>
          <p className="text-2xl font-bold mt-2">$1,200</p>
        </div>

        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold">Withdrawals</h3>
          <p className="text-2xl font-bold mt-2">$800</p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white p-6 rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold">KYC Status</h3>
          <p className="text-2xl font-bold mt-2">Verified ✅</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-3 text-gray-700">
          <li>✅ You invested $500 in Basic Plan – July 28</li>
          <li>💸 You requested a $200 withdrawal – July 26</li>
          <li>📄 Your KYC was approved – July 25</li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
