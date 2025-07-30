import React from "react";

const ActivityLog = () => {
  const logs = [
    { id: 1, user: "John Doe", action: "Deposited $500", time: "2 hours ago" },
    { id: 2, user: "Jane Smith", action: "Requested withdrawal", time: "5 hours ago" },
    { id: 3, user: "Mike Lee", action: "Submitted KYC", time: "1 day ago" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Activity Log</h1>
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
            <tr>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Action</th>
              <th className="px-6 py-4">Time</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700 divide-y">
            {logs.map((log) => (
              <tr key={log.id}>
                <td className="px-6 py-4">{log.user}</td>
                <td className="px-6 py-4">{log.action}</td>
                <td className="px-6 py-4">{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;
