"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WaveBackground from "../../components/WaveBackground"; // Three.js Background

export default function SpinachCultivation() {
  const [cultivationData, setCultivationData] = useState([]);
  const router = useRouter();

  // Fetch JSON Data
  useEffect(() => {
    fetch("/spinachData.json")
      .then((response) => response.json())
      .then((data) => setCultivationData(data))
      .catch((error) => console.error("Error loading JSON:", error));
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
              onClick={() => router.push(`/spinach/cultivation/${cultivation.id}`)}
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
    </main>
  );
}
