'use client';

import { Film } from '@/lib/data';
import { motion } from 'framer-motion';
import { Star, Play, Info } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function FilmCard({ film }: { film: Film }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl cursor-pointer h-full"
      whileHover={{ y: -10, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        <Image
          src={film.coverWap}
          alt={film.bookName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Hot Badge */}
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          {film.rankVo.hotCode}
        </div>

        {/* Play Button Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
           <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
              <Play className="w-8 h-8 text-white fill-current" />
           </div>
        </div>
      </div>

      <div className="p-4 space-y-2 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-yellow-400 transition-colors">
            {film.bookName}
          </h3>

          <div className="flex flex-wrap gap-1 mt-1">
            {film.tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[10px] uppercase tracking-wider bg-white/10 text-gray-300 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-2 text-xs text-gray-400 line-clamp-2">
            {film.introduction}
          </div>
        </div>

        <div className="pt-3 flex justify-between items-center text-xs text-gray-500 border-t border-white/5 mt-auto">
           <span>{film.chapterCount} Chapters</span>
           <span className="flex items-center gap-1 group-hover:text-white transition-colors">
             Details <Info className="w-3 h-3" />
           </span>
        </div>
      </div>
    </motion.div>
  );
}
