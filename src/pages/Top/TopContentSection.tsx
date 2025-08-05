import { useEffect } from "react";
import type { Manga } from "../../types/manga";

import MangaGrid from "../../ui/MangaGrid";
import MangaTabs from "../../ui/MangaTabs";
import Pagination from "../../ui/Pagination";
import SkeletonGrid from "../../ui/SkeletonGrid";

type TopContentSectionProps = {
  isLoading: boolean;
  manga: Manga | undefined;
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  setNextPage: (page: number) => void;
  tabs: { label: string; value: string }[];
};

function TopContentSection({
  isLoading,
  manga,
  selectedTab,
  setSelectedTab,
  setNextPage,
  tabs,
}: TopContentSectionProps) {
  useEffect(() => {
    setNextPage(1);
  }, [selectedTab, setNextPage]);

  if (isLoading) return <SkeletonGrid elements={25} />;

  return (
    <div className="space-y-6">
      <MangaTabs
        tabs={tabs}
        selectedTab={selectedTab}
        onSelectTab={setSelectedTab}
      />
      {manga?.data && manga.data.length > 0 ? (
        <>
          <MangaGrid manga={manga.data} />
          {manga.pagination.last_visible_page > 1 && (
            <Pagination
              currentPage={manga?.pagination.current_page}
              firstPage={1}
              lastPage={manga?.pagination.last_visible_page}
              onPageChange={setNextPage}
            />
          )}
        </>
      ) : (
        <div className="mt-10 flex items-center justify-center">
          <p className="text-2xl text-white">
            No results for <span className="text-green-500">{selectedTab}</span>
            !
          </p>
        </div>
      )}
    </div>
  );
}

export default TopContentSection;
