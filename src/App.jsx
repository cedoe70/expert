import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to Expert Earn</h1>
      <Link
        to="/admin/investment-plans"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Go to Admin Panel
      </Link>
    </div>
  );
};

export default App;
