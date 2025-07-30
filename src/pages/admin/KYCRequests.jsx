"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const KYCRequests = () => {
  const [kycRequests, setKycRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchKYC = async () => {
    try {
      const res = await axios.get("/api/kyc");
      setKycRequests(res.data);
    } catch (err) {
      console.error("Error fetching KYC requests:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put("/api/kyc", { id, status });
      fetchKYC(); // refresh list
    } catch (err) {
      console.error("Error updating KYC status:", err);
    }
  };

  useEffect(() => {
    fetchKYC();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">KYC Requests</h1>

      {kycRequests.length === 0 ? (
        <p>No KYC requests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kycRequests.map((kyc) => (
            <div
              key={kyc.id}
              className="bg-white dark:bg-gray-900 p-4 shadow rounded-lg border dark:border-gray-700"
            >
              <h2 className="text-lg font-semibold mb-2">{kyc.full_name}</h2>
              <p><strong>ID Type:</strong> {kyc.id_type}</p>
              <p><strong>ID Number:</strong> {kyc.id_number}</p>
              <p><strong>Status:</strong> <span className="capitalize">{kyc.status}</span></p>
              <p><strong>Submitted:</strong> {new Date(kyc.submitted_at).toLocaleString()}</p>

              {kyc.document_url && (
                <a
                  href={kyc.document_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 hover:underline"
                >
                  View Document
                </a>
              )}

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => updateStatus(kyc.id, "approved")}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(kyc.id, "rejected")}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Reject
                </button>
                <button
                  onClick={() => updateStatus(kyc.id, "resubmit")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                >
                  Ask to Resubmit
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
