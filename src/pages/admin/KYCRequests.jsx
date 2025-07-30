import React, { useEffect, useState } from "react";
import axios from "axios";

const KYCRequests = () => {
  const [kycRequests, setKycRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const res = await axios.get("/api/admin/kyc");
      setKycRequests(res.data);
    } catch (error) {
      console.error("Failed to fetch KYC requests", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`/api/admin/kyc/${id}`, { status });
      fetchRequests(); // refresh list
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">KYC Requests</h2>
      {loading ? (
        <p>Loading...</p>
      ) : kycRequests.length === 0 ? (
        <p>No KYC requests found.</p>
      ) : (
        <div className="grid gap-4">
          {kycRequests.map((request) => (
            <div
              key={request.id}
              className="p-4 border rounded shadow bg-white"
            >
              <p><strong>Name:</strong> {request.fullName}</p>
              <p><strong>ID Number:</strong> {request.idNumber}</p>
              <p><strong>Status:</strong> {request.status}</p>
              {request.idCardUrl && (
                <a
                  href={request.idCardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View ID Card
                </a>
              )}
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => updateStatus(request.id, "approved")}
                  className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(request.id, "rejected")}
                  className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KYCRequests;
