"use client";
import { useState } from "react";
import { Menu, X, Home, Calendar, User } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg focus:outline-none"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 md:w-60 bg-white shadow-md z-40 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-bold text-blue-700">Dashboard</h2>
          <button
            className="md:hidden text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-3">
          <Link
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <Home size={18} /> Home
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <Calendar size={18} /> Calendar
          </Link>

          <Link
            href="#"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
          >
            <User size={18} /> Profile
          </Link>
        </nav>
      </aside>
    </>
  );
}
