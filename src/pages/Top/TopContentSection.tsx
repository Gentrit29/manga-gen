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
          <Pagination
            currentPage={manga?.pagination.current_page}
            firstPage={1}
            lastPage={manga?.pagination.last_visible_page}
            onPageChange={setNextPage}
          />
        </>
      ) : (
        <p className="text-center text-lg text-white">No results to display</p>
      )}
    </div>
  );
}

export default TopContentSection;
