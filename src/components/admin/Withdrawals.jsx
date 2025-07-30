import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";

const Withdrawals = () => {
  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    const fetchWithdrawals = async () => {
      try {
        const res = await fetch("/api/withdraw");
        const data = await res.json();
        setWithdrawals(data);
      } catch (error) {
        console.error("Error fetching withdrawals:", error);
      }
    };

    fetchWithdrawals();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(`/api/withdraw/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setWithdrawals((prev) =>
          prev.map((withdrawal) =>
            withdrawal.id === id ? { ...withdrawal, status } : withdrawal
          )
        );
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Withdrawals</h1>
        {withdrawals.length === 0 ? (
          <p>No withdrawal requests found.</p>
        ) : (
          <div className="space-y-4">
            {withdrawals.map((wd) => (
              <div key={wd.id} className="bg-white shadow rounded-xl p-4">
                <p><strong>User:</strong> {wd.userEmail}</p>
                <p><strong>Amount:</strong> ${wd.amount}</p>
                <p><strong>Status:</strong> {wd.status}</p>
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => handleStatusChange(wd.id, "approved")}
                    className="bg-green-600 text-white px-4 py-1 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(wd.id, "rejected")}
                    className="bg-red-600 text-white px-4 py-1 rounded"
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

export default Withdrawals;
