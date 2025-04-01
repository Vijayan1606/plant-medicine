"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function PlantDetails() {
  const router = useRouter();
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch("/spinachData.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedPlant = data.find((p) => p.id.toString() === id);
        setPlant(selectedPlant);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, [id]);

  if (!plant) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-green-100 to-green-300">
        <p className="text-gray-700 text-lg animate-pulse">🌱 Loading plant details...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-200 p-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 px-6 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all"
      >
        ← Back
      </button>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left Side - Plant Image */}
        <div className="w-full md:w-1/2">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Plant Details */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-green-800">{plant.name}</h1>
          <p className="text-gray-700 text-lg">{plant.description}</p>



          {/* Cultivation Process */}
          <div className="text-lg text-gray-800 space-y-2 mt-4">
            <h2 className="text-2xl font-semibold text-green-700">Cultivation Process</h2>
            <p><b>Temperature:</b> {plant.cultivation_process.temperature}</p>
            <p><b>Soil Type:</b> {plant.cultivation_process.soil_type}</p>
            <p><b>Watering:</b> {plant.cultivation_process.watering}</p>
            <p><b>Sunlight:</b> {plant.cultivation_process.sunlight}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
