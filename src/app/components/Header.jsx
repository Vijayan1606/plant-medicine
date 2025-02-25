"use client";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-10 bg-white shadow-md p-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image src="/favicon.ico" width={70} height={20} alt="logo" />
        <h1 className="text-xl font-bold text-gray-800">
          Plant Cultivation and Medicines
        </h1>
      </div>

      <nav>
        <Link href="/" className="mx-4 text-lg font-semibold text-gray-700">
          Home
        </Link>
        <Link
          href="/plants"
          className="mx-4 text-lg font-semibold text-gray-700"
        >
          Plants
        </Link>
        <Link
          href="/spinach"
          className="mx-4 text-lg font-semibold text-gray-700"
        >
          Spinach
        </Link>
      </nav>
    </header>
  );
}
