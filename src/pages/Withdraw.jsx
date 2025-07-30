import React from "react";

const Withdraw = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Withdraw Funds</h2>
      <form className="space-y-4 max-w-md bg-white shadow-md p-6 rounded-xl">
        <div>
          <label className="block mb-1 font-medium">Amount (USD)</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Withdrawal Method</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option>Bitcoin (BTC)</option>
            <option>Ethereum (ETH)</option>
            <option>Tether (USDT)</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Wallet Address</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Paste wallet address"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Request Withdrawal
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
