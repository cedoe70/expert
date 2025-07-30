// pages/kyc.jsx
import React, { useState } from 'react';
import axios from 'axios';

export default function KYCPage() {
  const [form, setForm] = useState({
    userId: '',
    fullName: '',
    idType: '',
    idNumber: '',
    documentFile: null,
  });
  const [previewUrl, setPreviewUrl] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'documentFile') {
      const file = files[0];
      setForm({ ...form, documentFile: file });
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      // 1. Upload the document to Cloudinary or UploadThing first
      const uploadData = new FormData();
      uploadData.append('file', form.documentFile);
      uploadData.append('upload_preset', 'your_upload_preset'); // Replace with your preset

      const uploadRes = await axios.post(
        'https://api.cloudinary.com/v1_1/your_cloud_name/upload',
        uploadData
      );

      const documentUrl = uploadRes.data.secure_url;

      // 2. Submit KYC form data to your backend
      const res = await axios.post('/api/kyc', {
        userId: form.userId,
        fullName: form.fullName,
        idType: form.idType,
        idNumber: form.idNumber,
        documentUrl,
      });

      setStatus('KYC submitted successfully!');
      setForm({
        userId: '',
        fullName: '',
        idType: '',
        idNumber: '',
        documentFile: null,
      });
      setPreviewUrl('');
    } catch (err) {
      console.error(err);
      setStatus('Submission failed.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Submit KYC</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          name="userId"
          placeholder="User ID"
          value={form.userId}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="idType"
          placeholder="ID Type (e.g. Passport)"
          value={form.idType}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="idNumber"
          placeholder="ID Number"
          value={form.idNumber}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="file"
          name="documentFile"
          accept="image/*,.pdf"
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        {previewUrl && (
          <img src={previewUrl} alt="Preview" className="w-full h-40 object-cover rounded" />
        )}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit KYC
        </button>
        <p className="text-sm text-gray-600">{status}</p>
      </form>
    </div>
  );
}
