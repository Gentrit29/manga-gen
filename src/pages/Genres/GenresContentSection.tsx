import { Link } from "react-router";

import type { Genre } from "../../types/manga";

import { formatGenreNameForUrl } from "../../utils/formatters";
import SkeletonGrid from "../../ui/SkeletonGrid";
import {
  filterExplicitGenre,
  removeDuplicateGenresTag,
} from "../../utils/helpers";

type GenresContentSectionProps = {
  isLoading: boolean;
  genres: Genre[];
};

function GenresContentSection({
  isLoading,
  genres,
}: GenresContentSectionProps) {
  if (isLoading)
    return (
      <SkeletonGrid
        elements={78}
        gridClassName="grid grid-cols-2 gap-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        itemClassName="w-30 rounded-sm p-3 md:w-40"
      />
    );

  const filter = import.meta.env.VITE_EXPLICIT_FILTER;

  const filterGenres: Genre[] = filterExplicitGenre(genres, filter);

  const uniqueGenres = removeDuplicateGenresTag(filterGenres);

  return (
    <div className="grid grid-cols-2 place-items-center gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {uniqueGenres.map((genre: Genre) => (
        <Link
          key={genre.mal_id}
          to={`/genre/${genre.mal_id}?name=${formatGenreNameForUrl(genre.name)}`}
          className="w-30 rounded-sm border-1 border-green-500 p-1 text-white transition-colors duration-300 hover:bg-green-500 md:w-40"
        >
          <span>{genre.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default GenresContentSection;
