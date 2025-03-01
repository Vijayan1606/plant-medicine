"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./components/Header";
import WaveBackground from "./components/WaveBackground";

export default function Home() {
  const [text, setText] = useState("");
  const words = "Plant Medicine & Spinach Varieties";
  const speed = 100; // Typing speed in ms

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(words.substring(0, i));
      i++;
      if (i > words.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main className="relative min-h-screen pt-24 flex flex-col items-center bg-transparent p-6">
        <WaveBackground />

        {/* Typing Effect for Heading */}
        <h1 className="text-4xl font-extrabold text-white mb-6 text-center leading-relaxed">
          Welcome to{" "}
          <motion.span className="text-green-400">{text}</motion.span>
        </h1>

        {/* Content Section */}
        <div className="max-w-2xl w-full flex flex-col gap-8 mt-10">
          <motion.section
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md p-8 rounded-2xl text-center transition"
          >
            <h2 className="text-2xl font-semibold text-green-700">🌿 Plant Medicines</h2>
            <Link href="/plants">
              <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
                Explore
              </button>
            </Link>
          </motion.section>

          <motion.section
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-md p-8 rounded-2xl text-center transition"
          >
            <h2 className="text-2xl font-semibold text-green-700">🥬 Spinach Varieties</h2>
            <Link href="/spinach">
              <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
                Explore
              </button>
            </Link>
          </motion.section>
        </div>
      </main>
    </>
  );
}
