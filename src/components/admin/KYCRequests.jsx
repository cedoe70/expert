import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";

const KYCRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchKycRequests = async () => {
      try {
        const res = await fetch("/api/kyc");
        const data = await res.json();
        setRequests(data);
      } catch (error) {
        console.error("Error fetching KYC requests:", error);
      }
    };

    fetchKycRequests();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(`/api/kyc/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setRequests((prev) =>
          prev.map((req) =>
            req.id === id ? { ...req, status } : req
          )
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">KYC Requests</h1>
        {requests.length === 0 ? (
          <p>No KYC requests found.</p>
        ) : (
          <div className="space-y-4">
            {requests.map((req) => (
              <div key={req.id} className="bg-white rounded-xl shadow p-4">
                <p><strong>Name:</strong> {req.name}</p>
                <p><strong>Email:</strong> {req.email}</p>
                <p><strong>Status:</strong> {req.status}</p>
                {req.documentUrl && (
                  <a
                    href={req.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    View Document
                  </a>
                )}
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => handleStatusChange(req.id, "approved")}
                    className="px-4 py-1 rounded bg-green-600 text-white"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(req.id, "rejected")}
                    className="px-4 py-1 rounded bg-red-600 text-white"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default KYCRequests;
