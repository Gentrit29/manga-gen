import type { Manga } from "../../types/manga";

import SkeletonGrid from "../../ui/SkeletonGrid";
import MangaGrid from "../../ui/MangaGrid";
import Pagination from "../../ui/Pagination";

type SearchContentSectionProps = {
  isLoading: boolean;
  manga: Manga | undefined;
  setNextPage: (page: number) => void;
};

function SearchContentSection({
  isLoading,
  manga,
  setNextPage,
}: SearchContentSectionProps) {
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

export default SearchContentSection;
