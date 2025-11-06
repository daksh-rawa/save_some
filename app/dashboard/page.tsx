"use client";

import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar"

export default function DashboardPage() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Load name from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("username");
    if (stored) setSavedName(stored);
  }, []);

  // Save name to localStorage
  const handleSave = () => {
    localStorage.setItem("username", name);
    setSavedName(name);
    setName("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {savedName ? (
          <p className="text-lg mb-4">
            👋 Welcome, <span className="font-semibold">{savedName}</span>!
          </p>
        ) : (
          <p className="text-gray-500 mb-4">No name saved yet.</p>
        )}

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Save Name
        </button>
      </div>
      <div>
      <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
  </div>
    </div>
  );
}
