"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0, ease: "easeInOut" }}
      className="fixed top-0 w-full z-20 bg-white shadow-md p-4 md:p-6 flex justify-between items-center transition-transform"
    >
      {/* Clickable Logo & Title */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/favicon.ico"
            width={50}
            height={50}
            alt="logo"
            className="rounded-full cursor-pointer"
          />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 hover:text-green-700 transition">
            Plant Cultivation & Medicines
          </h1>
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="hidden md:flex gap-6"
      >
        {["Home", "Plants", "Spinach"].map((item, index) => (
          <Link
            key={index}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="relative text-lg font-semibold text-gray-700 hover:text-green-700 transition-all duration-300"
          >
            {item}
            <motion.span
              className="absolute left-0 bottom-[-2px] h-[2px] bg-green-600 w-full scale-x-0"
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        ))}
      </motion.nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center p-4 space-y-4 md:hidden"
        >
          {["Home", "Plants", "Spinach"].map((item, index) => (
            <Link
              key={index}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-lg font-semibold text-gray-700 hover:text-green-700 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
