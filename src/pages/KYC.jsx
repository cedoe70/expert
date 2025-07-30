// pages/kyc.jsx
import React, { useState } from "react";
import axios from "axios";

const KYC = () => {
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please upload a valid ID card.");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("idNumber", idNumber);
    formData.append("idCard", file);

    try {
      const response = await axios.post("/api/kyc", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("KYC submitted successfully.");
      setFullName("");
      setIdNumber("");
      setFile(null);
    } catch (error) {
      console.error(error);
      setMessage("Error submitting KYC.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">KYC Verification</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ID Number"
          className="w-full p-2 border rounded"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*,.pdf"
          className="w-full"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit KYC
        </button>
      </form>
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default KYC;
