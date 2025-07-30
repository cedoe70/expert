import React from 'react';
import Sidebar from './Sidebar';

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-50 to-white text-gray-800 font-poppins flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6 md:p-8 lg:p-10 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default UserLayout;
