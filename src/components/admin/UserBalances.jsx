import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";

const UserBalances = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const res = await fetch("/api/balances");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user balances:", error);
      }
    };

    fetchBalances();
  }, []);

  const handleUpdate = async (id, newBalance) => {
    try {
      const res = await fetch(`/api/balances/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ balance: newBalance }),
      });
      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) =>
            u.id === id ? { ...u, balance: newBalance } : u
          )
        );
      }
    } catch (err) {
      console.error("Error updating balance:", err);
    }
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">User Balances</h1>
        {users.length === 0 ? (
          <p>No user balances found.</p>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="bg-white shadow p-4 rounded-xl">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Current Balance:</strong> ${user.balance}</p>
                <div className="mt-2">
                  <input
                    type="number"
                    className="border px-2 py-1 mr-2 rounded"
                    placeholder="New Balance"
                    onChange={(e) =>
                      setUsers((prev) =>
                        prev.map((u) =>
                          u.id === user.id
                            ? { ...u, tempBalance: parseFloat(e.target.value) }
                            : u
                        )
                      )
                    }
                  />
                  <button
                    className="bg-blue-600 text-white px-4 py-1 rounded"
                    onClick={() =>
                      handleUpdate(user.id, user.tempBalance || user.balance)
                    }
                  >
                    Update
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

export default UserBalances;
