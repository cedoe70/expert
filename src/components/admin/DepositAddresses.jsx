import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";

const DepositAddresses = () => {
  const [addresses, setAddresses] = useState({
    BTC: "",
    ETH: "",
    USDT: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await fetch("/api/deposit-addresses");
        const data = await res.json();
        setAddresses(data);
      } catch (err) {
        console.error("Failed to fetch addresses", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddresses((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const res = await fetch("/api/deposit-addresses", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addresses),
      });

      if (!res.ok) {
        throw new Error("Failed to update addresses");
      }

      alert("Deposit addresses updated successfully!");
    } catch (err) {
      console.error("Error updating deposit addresses:", err);
      alert("Error updating deposit addresses");
    }
  };

  return (
    <AdminLayout>
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Deposit Addresses</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {["BTC", "ETH", "USDT"].map((currency) => (
              <div key={currency}>
                <label className="block font-medium mb-1">{currency} Address</label>
                <input
                  type="text"
                  name={currency}
                  value={addresses[currency]}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
            ))}
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default DepositAddresses;
