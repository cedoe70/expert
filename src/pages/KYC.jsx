// pages/kyc.jsx
import React, { useState } from "react";
import axios from "axios";

const KYCPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    idType: "",
    idNumber: "",
  });
  const [documentFile, setDocumentFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setDocumentFile(e.target.files[0]);
  };

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ml_default"); // You can change the preset name if needed
    data.append("cloud_name", "dndxphy8r");

    const res = await axios.post("https://api.cloudinary.com/v1_1/dndxphy8r/upload", data);
    return res.data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      let documentUrl = "";

      if (documentFile) {
        documentUrl = await uploadToCloudinary(documentFile);
      }

      const response = await axios.post("/api/kyc", {
        userId: 1, // Replace with actual user ID from session
        fullName: formData.fullName,
        idType: formData.idType,
        idNumber: formData.idNumber,
        documentUrl,
      });

      setMessage("KYC submitted successfully.");
      setFormData({ fullName: "", idType: "", idNumber: "" });
      setDocumentFile(null);
    } catch (error) {
      console.error(error);
      setMessage("Failed to submit KYC.");
    }

    setSubmitting(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Submit KYC</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="idType"
          value={formData.idType}
          onChange={handleChange}
          placeholder="ID Type (e.g., Passport)"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="text"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
          placeholder="ID Number"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.png,.pdf"
          className="w-full"
          required
        />
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          {submitting ? "Submitting..." : "Submit KYC"}
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default KYCPage;
