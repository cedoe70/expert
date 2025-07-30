import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import { FaTachometerAlt, FaMoneyCheckAlt, FaRegIdCard, FaWallet } from "react-icons/fa"

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
  { to: "/invest", label: "Invest", icon: <FaMoneyCheckAlt /> },
  { to: "/withdraw", label: "Withdraw", icon: <FaWallet /> },
  { to: "/kyc", label: "KYC", icon: <FaRegIdCard /> },
]

const UserLayout = () => {
  return (
    <div className="flex min-h-screen bg-soft text-dark font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white/80 backdrop-blur shadow-md p-6 flex flex-col gap-4 border-r border-gray-200">
        <h1 className="text-2xl font-bold text-accent mb-4">💸 Expert Earn</h1>

        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-xl transition-all ${
                  isActive
                    ? "bg-accent text-white shadow"
                    : "hover:bg-accent/10 text-gray-700"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gradient-to-br from-[#f8fafc] to-[#fff] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default UserLayout
