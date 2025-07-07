import { Link } from "react-router";

import { useAllMangaGenres } from "../hooks/useAllMangaGenres";

import type { Genre } from "../types/manga";
import {
  filterExplicitGenre,
  formatGenreNameForUrl,
  removeDuplicateGenresTag,
} from "../utils/helpers";

function Genres() {
  const { isLoading, error, allMangaGenres } = useAllMangaGenres();

  if (isLoading) return null;
  if (error) return null;

  const filter = import.meta.env.VITE_EXPLICIT_FILTER;

  const filterGenres: Genre[] = filterExplicitGenre(allMangaGenres, filter);

  const uniqueGenres = removeDuplicateGenresTag(filterGenres);

  return (
    <section className="mx-20 mt-15 space-y-10">
      <div className="flex justify-center text-white">
        <h1 className="text-2xl font-bold">Discover Manga by Genre!</h1>
      </div>
      <div className="mt-10 grid grid-cols-6 place-items-center gap-2 text-white">
        {uniqueGenres.map((genre: Genre) => (
          <div className="w-40 rounded-sm border-1 border-green-500 p-1 transition-colors duration-300 hover:bg-green-500">
            <Link
              key={genre.mal_id}
              to={`/genre/${genre.mal_id}?name=${formatGenreNameForUrl(genre.name)}`}
            >
              <span>{genre.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Genres;
