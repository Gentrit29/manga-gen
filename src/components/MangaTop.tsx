import { useState } from "react";

import MangaCard from "./MangaCard";

import { useTopManga } from "../hooks/useTopManga";

import type { Manga } from "../types/manga";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const tabs = [
  { label: "All", value: "" },
  { label: "Top Publishing", value: "publishing" },
  { label: "Top Upcoming", value: "upcoming" },
  { label: "Most Popular", value: "bypopularity" },
  { label: "Most Favorited", value: "favorite" },
];

function MangaTop() {
  const [selectedTab, setSelectedTab] = useState("");

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
        <div className="mt-4 flex space-x-6 border-b-1 border-gray-200 text-xl text-white">
          {tabs.map((tab) => (
            <button
              className={`pb-2 transition-all ${
                selectedTab === tab.value
                  ? "border-b-1 border-gray-200 text-white"
                  : "hover: border-gray-200 text-gray-400 hover:border-b-1 hover:text-white"
              }`}
              key={tab.value}
              onClick={() => setSelectedTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {topManga?.data.map((manga: Manga, idx: number) => (
          <MangaCard key={manga.mal_id} manga={manga} index={idx} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex w-fit rounded-sm bg-linear-to-r from-green-500 to-emerald-500 transition-all duration-300 hover:scale-105">
          <button className="flex cursor-pointer items-center px-4 py-1 text-lg font-bold text-gray-200">
            View More
            <MdOutlineKeyboardDoubleArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default MangaTop;
