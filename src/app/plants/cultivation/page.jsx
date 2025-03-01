"use client";

import { useEffect, useState } from "react";
import WaveBackground from "../../components/WaveBackground"; // Import Three.js Background

export default function PlantCultivation() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plantData.json") // Fetch from public folder
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-transparent p-6">
      {/* Three.js Wave Background */}
      <WaveBackground />

      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-white mb-4">🌱 Plant Cultivation</h1>
      <p className="text-gray-200 text-lg mb-8 text-center max-w-2xl">
        Learn the best practices for cultivating plants, including soil preparation, watering, and care.
      </p>

      {/* Container for plant information */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg border border-green-200">
        {plants.length > 0 ? (
          <div className="space-y-6">
            {plants.map((plant) => (
              <div
                key={plant.id}
                className="p-5 bg-green-50 border border-green-200 rounded-lg shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-green-700">{plant.name}</h2>
                <p className="text-gray-600 text-lg mt-2">{plant.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-10">
            <p className="text-gray-500 animate-pulse">Loading plant data...</p>
          </div>
        )}
      </div>
    </main>
  );
}
