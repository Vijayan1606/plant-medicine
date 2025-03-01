"use client";

import { useEffect, useState } from "react";
import WaveBackground from "../../components/WaveBackground"; // Import Three.js Background

export default function SpinachMedicines() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch("/spinachMedicines.json") // Fetch JSON from the public folder
      .then((response) => response.json())
      .then((data) => setMedicines(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-transparent p-6">
      {/* Three.js Wave Background */}
      <WaveBackground />

      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-white mb-6">💊 Spinach Medicines</h1>
      <p className="text-gray-200 text-lg mb-8 text-center max-w-2xl">
        Learn about the medicinal properties of spinach and its health benefits.
      </p>

      {/* Medicine List Container */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg border border-green-200">
        {medicines.length > 0 ? (
          <div className="space-y-6">
            {medicines.map((medicine) => (
              <div
                key={medicine.id}
                className="p-5 bg-green-50 border border-green-200 rounded-lg shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-green-700">{medicine.name}</h2>
                <p className="text-gray-600 mt-2">{medicine.uses}</p>
                <p className="text-green-700 font-medium mt-2">🌿 {medicine.benefits}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-10">
            <p className="text-gray-500 animate-pulse">Loading medicinal spinach data...</p>
          </div>
        )}
      </div>
    </main>
  );
}
