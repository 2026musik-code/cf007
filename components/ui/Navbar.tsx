'use client';

import { motion, useScroll } from 'framer-motion';
import { Search, Bell, User } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-colors duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
          FILM AGENT
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="#" className="hover:text-white transition-colors">Home</Link>
          <Link href="#" className="hover:text-white transition-colors">Series</Link>
          <Link href="#" className="hover:text-white transition-colors">Movies</Link>
          <Link href="#" className="hover:text-white transition-colors">New & Popular</Link>
          <Link href="#" className="hover:text-white transition-colors">My List</Link>
        </div>

        <div className="flex items-center gap-4 text-white">
          <Search className="w-5 h-5 cursor-pointer hover:text-yellow-400 transition-colors" />
          <Bell className="w-5 h-5 cursor-pointer hover:text-yellow-400 transition-colors" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-red-600 flex items-center justify-center cursor-pointer">
            <User className="w-5 h-5 text-black" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
