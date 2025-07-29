import React from "react";

const KYCRequests = () => {
  const requests = [
    { id: 1, user: "John Doe", status: "Pending" },
    { id: 2, user: "Jane Smith", status: "Pending" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">KYC Requests</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">User</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t">
                <td className="py-2 px-4">{req.user}</td>
                <td className="py-2 px-4">{req.status}</td>
                <td className="py-2 px-4 space-x-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded">
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Reject
                  </button>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Request Resubmission
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KYCRequests;
