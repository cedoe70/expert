import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Welcome, Admin 👋</h1>
      <p>This is your overview dashboard. Use the sidebar to manage the platform.</p>
    </AdminLayout>
  );
};

export default AdminDashboard;
