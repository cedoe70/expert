import React, { useEffect, useState } from "react";
import axios from "axios";

const Invest = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    axios
      .get("/api/investment-plans")
      .then((res) => setPlans(res.data))
      .catch((err) => console.error("Error loading plans:", err));
  }, []);

  const handleInvest = async () => {
    if (!selectedPlan || !amount) return alert("Select a plan and enter amount");

    try {
      await axios.post("/api/invest", {
        planId: selectedPlan.id,
        amount: parseFloat(amount),
      });
      alert("Investment submitted successfully");
      setAmount("");
    } catch (err) {
      console.error("Investment error:", err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Invest in a Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan)}
            className={`cursor-pointer border rounded-lg p-4 shadow ${
              selectedPlan?.id === plan.id ? "border-blue-500 bg-blue-50" : ""
            }`}
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p>{plan.description}</p>
            <p className="text-sm text-gray-600">
              Min: ${plan.minAmount} | Max: ${plan.maxAmount}
            </p>
            <p className="text-sm text-gray-600">
              Interest: {plan.interestRate}% 
            </p>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="mt-6">
          <h4 className="text-lg font-bold mb-2">
            Selected: {selectedPlan.name}
          </h4>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          />
          <button
            onClick={handleInvest}
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
          >
            Submit Investment
          </button>
        </div>
      )}
    </div>
  );
};

export default Invest;
