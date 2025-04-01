"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WaveBackground from "../components/WaveBackground";

export default function PlantsPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-transparent p-6">
      {/* Three.js Wave Background */}
      <WaveBackground />

      {/* Title Section with Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl font-extrabold text-white mb-6"
      >
        🌿 Plants Varieties
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-gray-200 text-lg mb-8 text-center max-w-2xl"
      >
        Explore different plant varieties, their cultivation methods, and medicinal benefits.
      </motion.p>

      {/* Card Container with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-green-200"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-gray-600 text-lg mb-6"
        >
          Learn about the best ways to grow plants and their health benefits.
        </motion.p>

        {/* Button Links with Hover Animation */}
        <div className="flex flex-col gap-4">
          <Link href="/plants/cultivation">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              🌱 Cultivation Plants
            </motion.button>
          </Link>

          <Link href="/plants/medicines">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              💊 Medicines Plants
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
