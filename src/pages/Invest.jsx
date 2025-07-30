import React from "react";

const Invest = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Start a New Investment</h2>
      <form className="space-y-4 max-w-md bg-white shadow-md p-6 rounded-xl">
        <div>
          <label className="block mb-1 font-medium">Select Plan</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option>Basic Plan - 5% ROI</option>
            <option>Silver Plan - 10% ROI</option>
            <option>Gold Plan - 15% ROI</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Amount (USD)</label>
          <input
            type="number"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Enter amount"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Invest Now
        </button>
      </form>
    </div>
  );
};

export default Invest;
