import type { Genre } from "../../types/manga";

import { filterExplicitGenre, removeDuplicates } from "../../utils/helpers";

import SkeletonGrid from "../../ui/SkeletonGrid";
import GenresGrid from "../../ui/GenresGrid";

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

  const uniqueGenres = removeDuplicates(filterGenres);

  return <GenresGrid mangaGenres={uniqueGenres} />;
}

export default GenresContentSection;
