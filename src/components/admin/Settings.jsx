import React from "react";

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-gray-700">
        This is the settings page. You can customize application preferences here.
      </p>

      <div className="mt-6">
        <div className="bg-white rounded-xl shadow-md p-4 max-w-md">
          <h2 className="font-semibold text-lg mb-2">Notifications</h2>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Email notifications</span>
          </label>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 max-w-md mt-4">
          <h2 className="font-semibold text-lg mb-2">Theme</h2>
          <select className="border px-3 py-2 rounded-md w-full">
            <option>Light</option>
            <option>Dark</option>
            <option>System Default</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
