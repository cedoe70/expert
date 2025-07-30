// pages/withdraw.jsx
import React, { useState } from "react";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("BTC");
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState(null);

  const handleWithdraw = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/withdraw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 1, // Replace with actual user ID if available
        amount,
        method,
        walletAddress,
      }),
    });

    const data = await response.json();
    setStatus(data.message);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-md rounded-xl">
      <h1 className="text-2xl font-semibold mb-6">Request Withdrawal</h1>
      <form onSubmit={handleWithdraw} className="space-y-4">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="BTC">Bitcoin</option>
          <option value="USDT">USDT</option>
          <option value="ETH">Ethereum</option>
        </select>
        <input
          type="text"
          placeholder="Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Submit Withdrawal
        </button>
      </form>
      {status && <p className="mt-4 text-center text-sm text-green-600">{status}</p>}
    </div>
  );
}
