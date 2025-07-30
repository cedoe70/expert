import React from "react";

const KYC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Submit KYC Documents</h2>
      <form className="space-y-4 max-w-md bg-white shadow-md p-6 rounded-xl">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Document Type</label>
          <select className="w-full px-4 py-2 border rounded-lg">
            <option>Passport</option>
            <option>National ID</option>
            <option>Driver’s License</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Document</label>
          <input type="file" className="w-full px-2 py-2 border rounded-lg" />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Submit for Review
        </button>
      </form>
    </div>
  );
};

export default KYC;
