import { Link } from "react-router";

import { useAllMangaGenres } from "../hooks/useAllMangaGenres";

import type { Genre } from "../types/manga";
import {
  filterExplicitGenre,
  removeDuplicateGenresTag,
} from "../utils/helpers";

import { formatGenreNameForUrl } from "../utils/formatters";

function Genres() {
  const { isLoading, error, allMangaGenres } = useAllMangaGenres();

  if (isLoading) return null;
  if (error) return null;

  const filter = import.meta.env.VITE_EXPLICIT_FILTER;

  const filterGenres: Genre[] = filterExplicitGenre(allMangaGenres, filter);

  const uniqueGenres = removeDuplicateGenresTag(filterGenres);

  return (
    <section className="layout space-y-10">
      <div className="flex justify-center text-white">
        <h1 className="text-center text-2xl font-bold">
          Discover Manga by Genre!
        </h1>
      </div>
      <div className="mt-10 grid grid-cols-2 place-items-center gap-2 text-white sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {uniqueGenres.map((genre: Genre) => (
          <Link
            key={genre.mal_id}
            to={`/genre/${genre.mal_id}?name=${formatGenreNameForUrl(genre.name)}`}
            className="w-30 rounded-sm border-1 border-green-500 p-1 transition-colors duration-300 hover:bg-green-500 md:w-40"
          >
            <span>{genre.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Genres;
