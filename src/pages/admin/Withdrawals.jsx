// src/pages/admin/Withdrawals.jsx
import React from "react";

const Withdrawals = () => {
  const withdrawals = [
    { id: 1, user: "John Doe", amount: "$100", status: "Pending" },
    { id: 2, user: "Jane Smith", amount: "$250", status: "Pending" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Withdrawal Requests</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">User</th>
              <th className="py-2 px-4 text-left">Amount</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {withdrawals.map((withdrawal) => (
              <tr key={withdrawal.id} className="border-t">
                <td className="py-2 px-4">{withdrawal.user}</td>
                <td className="py-2 px-4">{withdrawal.amount}</td>
                <td className="py-2 px-4">{withdrawal.status}</td>
                <td className="py-2 px-4">
                  <button className="bg-green-600 text-white px-3 py-1 rounded">
                    Approve
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

export default Withdrawals;
