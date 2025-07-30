import React, { useState } from "react";

const Settings = () => {
  const [email, setEmail] = useState("admin@example.com");
  const [siteName, setSiteName] = useState("Expert Earn");

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings saved!");
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Settings</h1>
      <form
        onSubmit={handleSave}
        className="bg-white p-6 rounded-xl shadow-md space-y-6 max-w-lg"
      >
        <div>
          <label className="block text-sm font-medium text-gray-600">Admin Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Site Name</label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
