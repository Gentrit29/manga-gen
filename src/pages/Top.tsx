import { useParams } from "react-router";
import { useTopManga } from "../hooks/useTopManga";
import TopHeader from "../components/TopHeader";
import Pagination from "../ui/Pagination";
import { useEffect, useState } from "react";
import MangaGrid from "../ui/MangaGrid";
import MangaTabs from "../ui/MangaTabs";
import { getTopLabel } from "../utils/labels";
import SkeletonGrid from "../ui/SkeletonGrid";
import TopHeaderSkeleton from "../components/TopHeaderSkeleton";

const tabs = [
  { label: "Manga", value: "manga" },
  { label: "Manhwa", value: "manhwa" },
  { label: "Manhua", value: "manhua" },
  { label: "Novel", value: "novel" },
  { label: "Light Novel", value: "lightnovel" },
];

//Reminder to clean up this component (prob make small and reusable components)
function Top() {
  const { category } = useParams();
  const [nextPage, setNextPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("manga");

  useEffect(() => {
    setNextPage(1);
  }, [category]);

  const { isLoading, topManga } = useTopManga(
    category || "manga",
    nextPage,
    selectedTab,
  );

  // if (error) return null;

  const TOP_LABEL = getTopLabel(category, selectedTab);

  return (
    <div className="layout mt-15 space-y-20">
      {isLoading ? (
        <TopHeaderSkeleton />
      ) : (
        <TopHeader
          label={TOP_LABEL.label}
          desc={TOP_LABEL.desc}
          params={
            topManga?.data[Math.floor(Math.random() * topManga.data.length)]
          }
        />
      )}
      <div className="space-y-6">
        <MangaTabs
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
        />
        {isLoading ? (
          <SkeletonGrid elements={25} />
        ) : topManga?.data && topManga.data.length > 0 ? (
          <MangaGrid manga={topManga.data} />
        ) : (
          <p className="text-center text-lg text-white">
            No results to display
          </p>
        )}
        {topManga?.pagination.last_visible_page > 1 && (
          <Pagination
            currentPage={topManga?.pagination.current_page}
            firstPage={1}
            lastPage={topManga?.pagination.last_visible_page}
            onPageChange={setNextPage}
          />
        )}
      </div>
    </div>
  );
}

export default Top;
