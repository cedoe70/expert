"use client";
import React, { useState } from "react";

const Invest = () => {
  const [amount, setAmount] = useState("");
  const [planId, setPlanId] = useState("");
  const [message, setMessage] = useState("");

  const handleInvest = async (e) => {
    e.preventDefault();
    setMessage("Processing...");

    const res = await fetch("/api/investments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "user-uuid-goes-here", // You can get this from auth later
        planId,
        amount,
      }),
    });

    const data = await res.json();
    if (data.success) {
      setMessage("Investment successful!");
      setAmount("");
      setPlanId("");
    } else {
      setMessage("Error: " + data.error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Invest in a Plan</h2>
      <form onSubmit={handleInvest} className="space-y-4">
        <input
          type="text"
          value={planId}
          onChange={(e) => setPlanId(e.target.value)}
          placeholder="Plan ID"
          className="w-full border p-3 rounded-lg"
          required
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount (USD)"
          className="w-full border p-3 rounded-lg"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Invest
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default Invest;
