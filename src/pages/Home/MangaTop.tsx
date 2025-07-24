import { useState } from "react";
import { Link } from "react-router";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { useTopManga } from "../../hooks/useTopManga";

import MangaGrid from "../../ui/MangaGrid";
import MangaTabs from "../../ui/MangaTabs";
import SkeletonGrid from "../../ui/SkeletonGrid";
import { type Route } from "../../types/manga";

const tabs = [
  { label: "All", value: "manga" },
  { label: "Top Publishing", value: "publishing" },
  { label: "Top Upcoming", value: "upcoming" },
  { label: "Most Popular", value: "bypopularity" },
  { label: "Most Favorited", value: "favorite" },
];

function MangaTop() {
  const [selectedTab, setSelectedTab] = useState<Route>("manga");

  const { isLoading, topManga } = useTopManga(selectedTab, 1, "manga");

  const currentTabLabel =
    tabs.find((tab) => tab.value === selectedTab)?.label || selectedTab;

  return (
    <section className="layout space-y-4">
      <div className="flex flex-col">
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="h-10 w-1.5 rounded-sm bg-green-500"></div>
          <h2 className="text-2xl font-bold text-white">Top Manga</h2>
        </div>
        <MangaTabs
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
        />
      </div>
      {isLoading ? (
        <SkeletonGrid elements={25} />
      ) : topManga?.data && topManga.data.length > 0 ? (
        <>
          <MangaGrid manga={topManga.data} />{" "}
          <div className="flex items-center justify-center">
            <Link
              to={`/top/${selectedTab}`}
              className="flex w-fit cursor-pointer items-center rounded-sm bg-linear-to-r from-green-500 to-emerald-500 px-4 py-1 text-base font-bold text-gray-200 transition-all duration-300 hover:scale-105 md:text-lg"
            >
              View More
              <MdOutlineKeyboardDoubleArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </>
      ) : (
        <div className="mt-10 flex items-center justify-center">
          <p className="text-2xl text-white">
            No results for{" "}
            <span className="text-green-500">{currentTabLabel}</span>!
          </p>
        </div>
      )}
    </section>
  );
}

export default MangaTop;
