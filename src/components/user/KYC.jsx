import React, { useState } from "react";
import axios from "axios";

const KYC = () => {
  const [fullName, setFullName] = useState("");
  const [idFile, setIdFile] = useState(null);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !idFile) return alert("Please fill all fields");

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("idFile", idFile);

    try {
      setIsSubmitting(true);
      const res = await axios.post("/api/kyc", formData);
      setStatus("KYC submitted successfully. Awaiting review.");
      setFullName("");
      setIdFile(null);
    } catch (error) {
      console.error("KYC upload failed", error);
      setStatus("Failed to submit KYC");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">KYC Verification</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            className="border p-2 rounded w-full"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload ID Document</label>
          <input
            type="file"
            accept="image/*,.pdf"
            className="border p-2 rounded w-full"
            onChange={(e) => setIdFile(e.target.files[0])}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit KYC"}
        </button>
      </form>

      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  );
};

export default KYC;
