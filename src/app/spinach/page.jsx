import Link from "next/link";
import React from "react";
import WaveBackground from "../components/WaveBackground"; // Import Three.js Background

function SpinachPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center bg-transparent p-6">
      {/* Three.js Wave Background */}
      <WaveBackground />

      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-white mb-6">🥬 Spinach Varieties</h1>
      <p className="text-gray-200 text-lg mb-8 text-center max-w-2xl">
        Discover different types of spinach, their cultivation process, and their medicinal benefits.
      </p>

      {/* Card Container */}
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-green-200">
        <p className="text-gray-600 text-lg mb-6">
          Learn about growing spinach and its health benefits.
        </p>

        {/* Button Links */}
        <div className="flex flex-col gap-4">
          <Link href="/spinach/cultivation">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
              🌱 Spinach Cultivation
            </button>
          </Link>
          <Link href="/spinach/medicines">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
              💊 Spinach Medicines
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SpinachPage;
