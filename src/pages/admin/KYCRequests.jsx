import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const KYCRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const res = await axios.get("/api/kyc");
      setRequests(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch KYC requests", error);
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put("/api/kyc", { id, status });
      fetchRequests(); // refresh
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">KYC Requests</h1>

      {loading ? (
        <p>Loading...</p>
      ) : requests.length === 0 ? (
        <p>No KYC requests found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {requests.map((req) => (
            <div
              key={req.id}
              className="border rounded-xl p-4 bg-white shadow-sm"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{req.full_name}</p>
                  <p className="text-sm text-gray-600">
                    ID Type: {req.id_type} | Number: {req.id_number}
                  </p>
                  <p className="text-sm text-gray-600">
                    Submitted: {new Date(req.submitted_at).toLocaleString()}
                  </p>
                  <p
                    className={`mt-1 inline-block px-2 py-1 rounded text-xs font-semibold ${
                      req.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : req.status === "approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    Status: {req.status}
                  </p>
                </div>

                <div className="text-right space-y-2">
                  <a
                    href={req.document_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm block"
                  >
                    View Document
                  </a>
                  {req.status === "pending" && (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        className="bg-green-500 text-white hover:bg-green-600"
                        onClick={() => updateStatus(req.id, "approved")}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-red-500 text-white hover:bg-red-600"
                        onClick={() => updateStatus(req.id, "rejected")}
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KYCRequests;
