import React from "react";

const activityData = [
  {
    id: 1,
    type: "KYC Approved",
    user: "John Doe",
    timestamp: "2025-07-29 10:12 AM",
  },
  {
    id: 2,
    type: "Withdrawal Request",
    user: "Jane Smith",
    timestamp: "2025-07-29 09:47 AM",
  },
  {
    id: 3,
    type: "New Deposit",
    user: "Michael Brown",
    timestamp: "2025-07-28 05:23 PM",
  },
  {
    id: 4,
    type: "Investment Plan Created",
    user: "Admin",
    timestamp: "2025-07-28 04:00 PM",
  },
];

const ActivityLog = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm font-medium text-gray-700">
              <th className="px-4 py-3 border-b">#</th>
              <th className="px-4 py-3 border-b">Type</th>
              <th className="px-4 py-3 border-b">User</th>
              <th className="px-4 py-3 border-b">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {activityData.map((activity, index) => (
              <tr key={activity.id} className="text-sm text-gray-800 hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b font-semibold">{activity.type}</td>
                <td className="px-4 py-2 border-b">{activity.user}</td>
                <td className="px-4 py-2 border-b">{activity.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;
