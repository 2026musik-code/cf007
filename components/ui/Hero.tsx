'use client';

import { Film } from '@/lib/data';
import { motion } from 'framer-motion';
import { Play, Info } from 'lucide-react';
import Image from 'next/image';

export default function Hero({ film }: { film: Film }) {
  if (!film) return null;

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={film.coverWap}
          alt={film.bookName}
          fill
          className="object-cover object-top opacity-60"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block shadow-lg">
            Top Rated #{film.rankVo.sort}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight drop-shadow-2xl">
            {film.bookName}
          </h1>
        </motion.div>

        <motion.p
          className="text-gray-200 max-w-2xl text-lg line-clamp-3 md:line-clamp-4 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {film.introduction}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2 text-sm text-gray-300 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
            {film.tags.map((tag) => (
                <span key={tag} className="border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm bg-black/20">
                    {tag}
                </span>
            ))}
        </motion.div>

        <motion.div
          className="flex items-center gap-4 pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-lg hover:scale-105 transform duration-200">
            <Play className="fill-black w-5 h-5" /> Play Now
          </button>
          <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-colors border border-white/10 shadow-lg hover:scale-105 transform duration-200">
            <Info className="w-5 h-5" /> More Info
          </button>
        </motion.div>
      </div>
    </div>
  );
}
