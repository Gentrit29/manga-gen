import { useState } from "react";

import { useTopManga } from "../hooks/useTopManga";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { Link } from "react-router";

import MangaGrid from "../ui/MangaGrid";
import MangaTabs from "../ui/MangaTabs";

const tabs = [
  { label: "All", value: "manga" },
  { label: "Top Publishing", value: "publishing" },
  { label: "Top Upcoming", value: "upcoming" },
  { label: "Most Popular", value: "bypopularity" },
  { label: "Most Favorited", value: "favorite" },
];

function MangaTop() {
  const [selectedTab, setSelectedTab] = useState("manga");

  const { isLoading, error, topManga } = useTopManga(selectedTab, 1);

  if (isLoading) return null;
  if (error) return null;

  return (
    <section className="mx-20 mt-15 mb-20 space-y-4">
      <div className="flex flex-col">
        <div className="flex items-center space-x-4">
          <div className="h-10 w-1.5 rounded-sm bg-green-500"></div>
          <h2 className="text-2xl font-bold text-white">Top Manga</h2>
        </div>
        <MangaTabs
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
        />
      </div>
      {topManga?.data && topManga.data.length > 0 && (
        <MangaGrid manga={topManga.data} />
      )}
      <div className="flex items-center justify-center">
        <Link
          to={`/top/${selectedTab}`}
          className="flex w-fit cursor-pointer items-center rounded-sm bg-linear-to-r from-green-500 to-emerald-500 px-4 py-1 text-lg font-bold text-gray-200 transition-all duration-300 hover:scale-105"
        >
          View More
          <MdOutlineKeyboardDoubleArrowRight className="h-6 w-6" />
        </Link>
      </div>
    </section>
  );
}

export default MangaTop;
