"use client";

import React, { useState } from "react";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [crypto, setCrypto] = useState("BTC");
  const [message, setMessage] = useState("");

  const handleWithdraw = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/withdraw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, walletAddress, crypto }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Withdrawal request submitted.");
      setAmount("");
      setWalletAddress("");
    } else {
      setMessage(data.error || "Something went wrong.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold">Withdraw Funds</h2>

      <form onSubmit={handleWithdraw} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Amount (USD)</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="10"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Wallet Address</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Select Crypto</label>
          <select
            className="w-full border p-2 rounded"
            value={crypto}
            onChange={(e) => setCrypto(e.target.value)}
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Submit Withdrawal
        </button>
      </form>

      {message && <p className="text-green-600 font-medium">{message}</p>}
    </div>
  );
};

export default Withdraw;
