import { getFilms } from '@/lib/data';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import FilmGrid from '@/components/ui/FilmGrid';
import Footer from '@/components/ui/Footer';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const response = await getFilms();
  const films = response.data;

  // Pick a featured film (e.g., the top ranked one or random)
  const featuredFilm = films[0];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {featuredFilm && <Hero film={featuredFilm} />}

      <section className="max-w-7xl mx-auto py-12 relative z-10">
        <div className="px-6 mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white border-l-4 border-red-600 pl-4">
            Trending Now
          </h2>
        </div>

        <FilmGrid films={films} />
      </section>

      <Footer />
    </main>
  );
}
