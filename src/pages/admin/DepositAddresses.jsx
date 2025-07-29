// src/pages/admin/DepositAddresses.jsx
import React, { useState } from "react";

const DepositAddresses = () => {
  const [addresses, setAddresses] = useState({
    BTC: "1BitcoinAddress",
    ETH: "0xEthereumAddress",
    USDT: "TetherAddress",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddresses((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Global Deposit Addresses</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {Object.keys(addresses).map((key) => (
          <div key={key} className="mb-4">
            <label className="block text-sm font-medium mb-1">{key} Address</label>
            <input
              type="text"
              name={key}
              value={addresses[key]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
      </div>
    </div>
  );
};

export default DepositAddresses;
