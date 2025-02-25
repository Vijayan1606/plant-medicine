import Link from "next/link";

export default function PlantsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-green-50 p-6">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Plant Varieties
      </h1>

      <div className="max-w-lg w-full bg-white shadow-lg p-8 text-center rounded-lg">
        <p className="text-gray-700 text-lg mb-4">
          Explore different plant varieties and their uses.
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/plants/cultivation">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition">
              Plant Cultivation
            </button>
          </Link>
          <Link href="/plants/medicines">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded transition">
              Plant Medicines
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
