import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 flex flex-col items-center bg-gradient-to-b from-green-100 to-green-300 p-6">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center leading-relaxed">
          Welcome to <span className="text-green-700">Medical Plants & Spinach Varieties</span>
        </h1>

        {/* Main Content Container */}
        <div className="max-w-2xl w-full flex flex-col gap-8">
          {/* Plant Varieties Section */}
          <section className="bg-white shadow-md p-8 rounded-2xl text-center border border-green-300 hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-semibold text-green-700">🌿 Medical Plants</h2>
            <p className="text-lg text-gray-700 mt-2">
              Discover different plants and their medicinal uses.
            </p>
            <Link href="/plants">
              <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                Explore Plants
              </button>
            </Link>
          </section>

          {/* Spinach Varieties Section */}
          <section className="bg-white shadow-md p-8 rounded-2xl text-center border border-green-300 hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-semibold text-green-700">🥬 Spinach Varieties</h2>
            <p className="text-lg text-gray-700 mt-2">
              Learn about different types of spinach and their benefits.
            </p>
            <Link href="/spinach">
              <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all">
                Explore Spinach
              </button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
