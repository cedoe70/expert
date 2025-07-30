import React, { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    siteName: "Expert Earn",
    adminEmail: "admin@expertearn.com",
    supportEmail: "support@expertearn.com",
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">System Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Site Name</label>
          <input
            type="text"
            name="siteName"
            value={formData.siteName}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Admin Email</label>
          <input
            type="email"
            name="adminEmail"
            value={formData.adminEmail}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Support Email</label>
          <input
            type="email"
            name="supportEmail"
            value={formData.supportEmail}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="maintenanceMode"
            checked={formData.maintenanceMode}
            onChange={handleChange}
            className="h-5 w-5 text-blue-500"
          />
          <label className="text-gray-700 font-medium">Enable Maintenance Mode</label>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
