"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PlantCultivation() {
  const [plants, setPlants] = useState([]);
  const router = useRouter();

  // Fetch Plant Data
  useEffect(() => {
    fetch("/plantData.json")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-transparent p-6">
 

      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-white mb-6">🌱 Cultivation Plants</h1>
      <p className="text-gray-200 text-lg mb-8 text-center max-w-2xl">
        Learn the best practices for cultivating plants, including soil preparation, watering, and care.
      </p>

      {/* Plant Cultivation Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <div
              key={plant.id}
              onClick={() => router.push(`/plants/cultivation/${plant.id}`)}
              className="p-5 bg-white border border-green-200 rounded-lg shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-2xl font-semibold text-green-700 mt-4">{plant.name}</h2>
              <p className="text-gray-600 mt-2">{plant.description}</p>
              <p className="text-green-600 font-medium mt-1">Click to learn more...</p>
            </div>
          ))
        ) : (
          <div className="col-span-3 flex justify-center items-center py-10">
            <p className="text-gray-500 animate-pulse">Loading plant cultivation data...</p>
          </div>
        )}
      </div>
    </main>
  );
}
