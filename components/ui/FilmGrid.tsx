'use client';

import { Film } from '@/lib/data';
import FilmCard from './FilmCard';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function FilmGrid({ films }: { films: Film[] }) {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {films.map((film) => (
        <motion.div key={film.bookId} variants={item}>
           <FilmCard film={film} />
        </motion.div>
      ))}
    </motion.div>
  );
}
