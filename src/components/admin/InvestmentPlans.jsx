import React from "react";

const InvestmentPlans = () => {
  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      description: "Start small and grow steadily.",
      minAmount: 100,
      maxAmount: 999,
      interestRate: 5,
    },
    {
      id: 2,
      name: "Pro Plan",
      description: "Perfect for growing portfolios.",
      minAmount: 1000,
      maxAmount: 4999,
      interestRate: 10,
    },
    {
      id: 3,
      name: "Elite Plan",
      description: "For serious investors.",
      minAmount: 5000,
      maxAmount: 10000,
      interestRate: 15,
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Investment Plans</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white rounded-2xl shadow-md p-6 border hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>Minimum: ${plan.minAmount}</li>
              <li>Maximum: ${plan.maxAmount}</li>
              <li>Interest Rate: {plan.interestRate}%</li>
            </ul>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Edit Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentPlans;
