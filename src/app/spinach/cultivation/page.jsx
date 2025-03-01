"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import animations
import WaveBackground from "../../components/WaveBackground";

export default function SpinachCultivation() {
  const [spinachInfo, setSpinachInfo] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState(null); // Store selected cultivation details

  useEffect(() => {
    fetch("/spinachCultivation.json") // Fetch JSON from public folder
      .then((response) => response.json())
      .then((data) => setSpinachInfo(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-transparent p-6">
      {/* Three.js Wave Background */}
      <WaveBackground />

      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-extrabold text-white mb-4"
      >
        🥬 Spinach Cultivation
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-gray-200 text-lg mb-8 text-center max-w-2xl"
      >
        Learn how to grow healthy spinach, including soil preparation, watering, and ideal planting conditions.
      </motion.p>

      {/* Cultivation List */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg border border-green-200">
        {spinachInfo.length > 0 ? (
          <div className="space-y-6">
            {spinachInfo.map((info, index) => (
              <motion.button
                key={info.id}
                onClick={() => setSelectedInfo(info)} // Open modal with details
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full text-left p-5 bg-green-50 border border-green-200 rounded-lg shadow-sm hover:bg-green-100 transition duration-300"
              >
                <h2 className="text-2xl font-semibold text-green-700">{info.name}</h2>
                <p className="text-gray-600 text-lg mt-2">{info.description}</p>
              </motion.button>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-10">
            <p className="text-gray-500 animate-pulse">Loading cultivation details...</p>
          </div>
        )}
      </div>

      {/* Popup Modal for Details */}
      <AnimatePresence>
        {selectedInfo && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-xl max-w-md"
            >
              <h2 className="text-2xl font-bold text-green-700 mb-2">{selectedInfo.name}</h2>
              <p className="text-gray-600">{selectedInfo.description}</p>

              <div className="mt-4 space-y-2">
                <p className="font-semibold">🌱 Uses: <span className="text-gray-700">{selectedInfo.uses || "No data"}</span></p>
                <p className="font-semibold">💊 Medicines: <span className="text-gray-700">{selectedInfo.medicines || "No data"}</span></p>
                <p className="font-semibold">📍 Where to Use: <span className="text-gray-700">{selectedInfo.application || "No data"}</span></p>
              </div>

              <button
                onClick={() => setSelectedInfo(null)} // Close modal
                className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300"
              >
                ❌ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
