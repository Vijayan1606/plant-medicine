import Link from "next/link";

export default function PlantsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-green-100 to-green-300 p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-extrabold text-green-800 mb-6">🌿 Plant Varieties</h1>
      <p className="text-gray-700 text-lg mb-8 text-center max-w-2xl">
        Explore different plant varieties, their cultivation methods, and medicinal benefits.
      </p>

      {/* Card Container */}
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-green-200">
        <p className="text-gray-600 text-lg mb-6">
          Learn about the best ways to grow plants and their health benefits.
        </p>

        {/* Button Links */}
        <div className="flex flex-col gap-4">
          <Link href="/plants/cultivation">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
              🌱 Plant Cultivation
            </button>
          </Link>
          <Link href="/plants/medicines">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
              💊 Plant Medicines
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
