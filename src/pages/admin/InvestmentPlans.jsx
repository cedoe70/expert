import React, { useState } from "react";

const InvestmentPlans = () => {
  const [plans, setPlans] = useState([
    { id: 1, name: "Starter Plan", min: 100, max: 500, rate: 5 },
    { id: 2, name: "Pro Plan", min: 501, max: 2000, rate: 10 },
  ]);

  const [newPlan, setNewPlan] = useState({ name: "", min: "", max: "", rate: "" });

  const handleAdd = () => {
    const id = Date.now();
    setPlans([...plans, { id, ...newPlan }]);
    setNewPlan({ name: "", min: "", max: "", rate: "" });
  };

  const handleDelete = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin - Investment Plans</h1>

      <div className="grid gap-2 mb-4 grid-cols-2 md:grid-cols-4">
        <input
          type="text"
          placeholder="Name"
          className="p-2 border rounded"
          value={newPlan.name}
          onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Min"
          className="p-2 border rounded"
          value={newPlan.min}
          onChange={(e) => setNewPlan({ ...newPlan, min: Number(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Max"
          className="p-2 border rounded"
          value={newPlan.max}
          onChange={(e) => setNewPlan({ ...newPlan, max: Number(e.target.value) })}
        />
        <input
          type="number"
          placeholder="Rate (%)"
          className="p-2 border rounded"
          value={newPlan.rate}
          onChange={(e) => setNewPlan({ ...newPlan, rate: Number(e.target.value) })}
        />
      </div>

      <button
        onClick={handleAdd}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Plan
      </button>

      <div className="mt-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="flex justify-between items-center p-4 border-b"
          >
            <div>
              <h2 className="font-semibold">{plan.name}</h2>
              <p>
                ${plan.min} - ${plan.max} at {plan.rate}% interest
              </p>
            </div>
            <button
              onClick={() => handleDelete(plan.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentPlans;
