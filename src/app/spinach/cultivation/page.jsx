"use client";

import { useEffect, useState } from "react";

export default function SpinachCultivation() {
  const [spinachInfo, setSpinachInfo] = useState([]);

  useEffect(() => {
    fetch("/spinachCultivation.json") // Fetch from the public folder
      .then((response) => response.json())
      .then((data) => setSpinachInfo(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-green-100 to-green-300 p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-green-800 mb-4">🥬 Spinach Cultivation</h1>
      <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl">
        Learn how to grow healthy spinach, including soil preparation, watering, and ideal planting conditions.
      </p>

      {/* Container for spinach cultivation info */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg">
        {spinachInfo.length > 0 ? (
          <div className="space-y-6">
            {spinachInfo.map((info) => (
              <div
                key={info.id}
                className="p-5 bg-green-50 border border-green-200 rounded-lg shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-green-700">{info.name}</h2>
                <p className="text-gray-600 text-lg mt-2">{info.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-10">
            <p className="text-gray-500 animate-pulse">Loading cultivation details...</p>
          </div>
        )}
      </div>
    </main>
  );
}
