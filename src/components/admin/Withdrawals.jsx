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
          prev.map((item) =>
            item.id === id ? { ...item, status } : item
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
        <h1 className="text-2xl font-bold mb-6">Withdrawal Requests</h1>
        {withdrawals.length === 0 ? (
          <p>No withdrawal requests available.</p>
        ) : (
          <div className="space-y-4">
            {withdrawals.map((withdrawal) => (
              <div
                key={withdrawal.id}
                className="bg-white rounded-xl shadow p-4"
              >
                <p><strong>User:</strong> {withdrawal.userEmail}</p>
                <p><strong>Amount:</strong> ${withdrawal.amount}</p>
                <p><strong>Status:</strong> {withdrawal.status}</p>
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => handleStatusChange(withdrawal.id, "approved")}
                    className="px-4 py-1 rounded bg-green-600 text-white"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatusChange(withdrawal.id, "rejected")}
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

export default Withdrawals;
