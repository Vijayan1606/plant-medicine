"use client";

import { useEffect, useState } from "react";
import WaveBackground from "../../components/WaveBackground"; // Three.js Background

export default function SpinachCultivation() {
  const [cultivationData, setCultivationData] = useState([]);
  const [selectedCultivation, setSelectedCultivation] = useState(null);

  // Fetch JSON Data
  useEffect(() => {
    fetch("/spinachCultivation.json")
      .then((response) => response.json())
      .then((data) => setCultivationData(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  // Close modal on 'Esc' key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCultivation(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-transparent p-6">
      {/* Three.js Background */}
      <WaveBackground />

      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-white mb-6">🌱 Spinach Cultivation</h1>
      <p className="text-gray-200 text-lg mb-8 text-center max-w-2xl">
        Learn how to grow healthy spinach, including soil preparation, watering, and ideal planting conditions.
      </p>

      {/* Cultivation List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {cultivationData.length > 0 ? (
          cultivationData.map((cultivation) => (
            <div
              key={cultivation.id}
              onClick={() => setSelectedCultivation(cultivation)}
              className="p-5 bg-white border border-green-200 rounded-lg shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <img
                src={cultivation.image}
                alt={cultivation.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-2xl font-semibold text-green-700 mt-4">{cultivation.name}</h2>
              <p className="text-gray-600 mt-2">{cultivation.description}</p>
              <p className="text-green-600 font-medium mt-1">Click to learn more...</p>
            </div>
          ))
        ) : (
          <div className="col-span-3 flex justify-center items-center py-10">
            <p className="text-gray-500 animate-pulse">Loading cultivation details...</p>
          </div>
        )}
      </div>

      {/* Cultivation Details Modal */}
      {selectedCultivation && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg text-center animate-fade-in">
            <img
              src={selectedCultivation.image}
              alt={selectedCultivation.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold text-green-700">{selectedCultivation.name}</h2>
            <p className="text-gray-700 mt-4 text-lg">{selectedCultivation.description}</p>
            <p className="text-green-600 font-medium mt-2">🌱 Soil Type: {selectedCultivation.soil}</p>
            <p className="text-gray-500 mt-2">💧 Watering: {selectedCultivation.watering}</p>
            <p className="text-gray-500 mt-2">🌞 Climate: {selectedCultivation.climate}</p>

            {/* Close Button */}
            <button
              onClick={() => setSelectedCultivation(null)}
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
