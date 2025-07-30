import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";

const ActivityLog = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching logs
    const fetchLogs = async () => {
      try {
        // Replace this with actual API call later
        const simulatedLogs = [
          { id: 1, action: "User JohnDoe submitted KYC", time: "2 mins ago" },
          { id: 2, action: "Admin approved withdrawal", time: "10 mins ago" },
          { id: 3, action: "New investment plan added", time: "30 mins ago" },
        ];
        setLogs(simulatedLogs);
      } catch (error) {
        console.error("Failed to fetch activity logs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Activity Log</h1>
        {loading ? (
          <p>Loading activity...</p>
        ) : (
          <div className="bg-white rounded-lg shadow p-4 space-y-4">
            {logs.map((log) => (
              <div
                key={log.id}
                className="border-b pb-2 last:border-b-0 last:pb-0"
              >
                <p className="text-gray-800">{log.action}</p>
                <p className="text-sm text-gray-500">{log.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default ActivityLog;
