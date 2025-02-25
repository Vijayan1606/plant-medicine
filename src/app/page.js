import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 flex flex-col items-center bg-green-100 p-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Welcome to Plant Medicine & Spinach Varieties
        </h1>

        <div className="max-w-lg w-full flex flex-col gap-6">
          {/* Plant Varieties Section */}
          <section className="bg-white shadow-lg p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-green-700">Plant Varieties</h2>
            <p className="text-lg text-gray-700 mt-2">
              Discover different plants and their uses.
            </p>
            <Link href="/plants">
              <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded transition">
                Explore
              </button>
            </Link>
          </section>

          {/* Spinach Varieties Section */}
          <section className="bg-white shadow-lg p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-green-700">Spinach Varieties</h2>
            <p className="text-lg text-gray-700 mt-2">
              Learn about different spinach types.
            </p>
            <Link href="/spinach">
              <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded transition">
                Explore
              </button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
