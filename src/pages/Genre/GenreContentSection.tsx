import type { Manga } from "../../types/manga";
import MangaGrid from "../../ui/MangaGrid";
import Pagination from "../../ui/Pagination";
import SkeletonGrid from "../../ui/SkeletonGrid";

type GenreContentSectionProps = {
  isLoading: boolean;
  manga: Manga | undefined;
  setNextPage: (page: number) => void;
};

function GenreContentSection({
  isLoading,
  manga,
  setNextPage,
}: GenreContentSectionProps) {
  if (isLoading) return <SkeletonGrid elements={25} />;

  return (
    <>
      {manga?.data && manga.data.length > 0 ? (
        <MangaGrid manga={manga.data} />
      ) : (
        <p className="text-center text-lg text-white">No results to display</p>
      )}
      {manga?.pagination && manga?.pagination.last_visible_page > 1 && (
        <Pagination
          currentPage={manga?.pagination.current_page}
          firstPage={1}
          lastPage={manga?.pagination.last_visible_page}
          onPageChange={setNextPage}
        />
      )}
      ;
    </>
  );
}

export default GenreContentSection;
