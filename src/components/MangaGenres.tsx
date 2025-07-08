import { Link } from "react-router";

import { useMangaGenres } from "../hooks/useMangaGenres";

import type { Genre } from "../types/manga";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { formatGenreNameForUrl } from "../utils/formatters";

function MangaGenres() {
  const { isLoading, error, mangaGenres } = useMangaGenres();

  if (isLoading) return null;
  if (error) return null;

  return (
    <section className="mx-5 mt-15 space-y-10 lg:mx-20 xl:mx-50">
      <div className="flex justify-center text-white">
        <h1 className="text-center text-2xl font-bold">
          Discover Manga by Genre!
        </h1>
      </div>
      <div className="mt-10 grid grid-cols-2 place-items-center gap-2 text-white sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {mangaGenres.map((genre: Genre) => (
          <Link
            key={genre.mal_id}
            to={`/genre/${genre.mal_id}?name=${formatGenreNameForUrl(genre.name)}`}
          >
            <div className="w-30 rounded-sm border-1 border-green-500 p-1 transition-colors duration-300 hover:bg-green-500 md:w-40">
              <span>{genre.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to="/genres"
          className="flex w-fit cursor-pointer items-center rounded-sm bg-linear-to-r from-green-500 to-emerald-500 px-4 py-1 text-base font-bold text-gray-200 transition-all duration-300 hover:scale-105 md:text-lg"
        >
          View All
          <MdOutlineKeyboardDoubleArrowRight className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}

export default MangaGenres;
