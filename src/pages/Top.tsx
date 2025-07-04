import { useParams } from "react-router";
import { useTopManga } from "../hooks/useTopManga";
import TopHeader from "../components/TopHeader";
import MangaCard from "../components/MangaCard";
import type { Manga } from "../types/manga";
import Pagination from "../ui/Pagination";
import { useEffect, useState } from "react";

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

  const { topManga } = useTopManga(category || "manga", nextPage, selectedTab);

  // if (isLoading) return null;
  // if (error) return null;

  const NAV_LABELS: Record<string, { label: string; desc: string }> = {
    manga: {
      label: `Top ${selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1).toLowerCase()}`,
      desc: `The highest-ranked ${selectedTab} of all time`,
    },
    publishing: {
      label: "Top Publishing",
      desc: `Currently ongoing ${selectedTab} series`,
    },
    upcoming: {
      label: "Top Upcoming",
      desc: `Most anticipated ${selectedTab} releases coming soon`,
    },
    bypopularity: {
      label: "Most Popular",
      desc: `${selectedTab} that have captivated readers over time`,
    },
    favorite: {
      label: "Most Favorited",
      desc: `Fan-favorite ${selectedTab} picks of all time`,
    },
  };

  const TOP_LABEL =
    category && NAV_LABELS[category]
      ? NAV_LABELS[category]
      : {
          label: "Top Manga",
          desc: "The highest ranked manga titles right now.",
        };

  return (
    <div className="mx-20 my-15 space-y-20">
      <TopHeader
        label={TOP_LABEL.label}
        desc={TOP_LABEL.desc}
        params={
          topManga?.data[Math.floor(Math.random() * topManga.data.length)]
        }
      />
      <div className="space-y-6">
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
        {topManga?.data && topManga.data.length > 0 ? (
          <div className="grid grid-cols-5 gap-4">
            {topManga?.data.map((manga: Manga, idx: number) => (
              <MangaCard key={manga.mal_id} manga={manga} index={idx} />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-white">
            No results to display
          </p>
        )}
        {topManga?.pagination && topManga?.pagination.last_visible_page > 1 && (
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
