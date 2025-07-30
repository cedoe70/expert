"use client"

import React, { useState } from "react";
import axios from "axios";

const KYCForm = () => {
  const [form, setForm] = useState({
    userId: "",
    fullName: "",
    idType: "",
    idNumber: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      let documentUrl = "";

      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default"); // Default preset, change if needed

        const cloudRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dndxphy8r/image/upload",
          formData
        );

        documentUrl = cloudRes.data.secure_url;
      }

      const response = await axios.post("/api/kyc", {
        ...form,
        documentUrl,
      });

      setMessage("KYC submitted successfully!");
      setForm({
        userId: "",
        fullName: "",
        idType: "",
        idNumber: "",
      });
      setFile(null);
    } catch (error) {
      console.error("Submission failed:", error);
      setMessage("Failed to submit KYC.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">KYC Verification</h2>
      {message && (
        <p className="mb-4 text-sm text-center text-green-600">{message}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={form.userId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="idType"
          value={form.idType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select ID Type</option>
          <option value="Passport">Passport</option>
          <option value="National ID">National ID</option>
          <option value="Driver's License">Driver's License</option>
        </select>
        <input
          type="text"
          name="idNumber"
          placeholder="ID Number"
          value={form.idNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit KYC"}
        </button>
      </form>
    </div>
  );
};

export default KYCForm;
