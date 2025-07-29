// src/pages/admin/UserBalances.jsx
import React from "react";

const UserBalances = () => {
  const users = [
    { id: 1, name: "John Doe", balance: "$1000" },
    { id: 2, name: "Jane Smith", balance: "$500" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Balances</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">User</th>
              <th className="py-2 px-4 text-left">Balance</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.balance}</td>
                <td className="py-2 px-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Update Balance
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

export default UserBalances;
