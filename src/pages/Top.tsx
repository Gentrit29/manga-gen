import { useParams } from "react-router";
import { useTopManga } from "../hooks/useTopManga";
import TopHeader from "../components/TopHeader";
import MangaCard from "../components/MangaCard";
import type { Manga } from "../types/manga";
import Pagination from "../ui/Pagination";
import { useEffect, useState } from "react";

const NAV_LABELS: Record<string, { label: string; desc: string }> = {
  manga: {
    label: "Top Manga",
    desc: "The highest-ranked manga of all time",
  },
  publishing: {
    label: "Top Publishing",
    desc: "Currently ongoing manga series",
  },
  upcoming: {
    label: "Top Upcoming",
    desc: "Most anticipated manga releases coming soon",
  },
  bypopularity: {
    label: "Most Popular",
    desc: "Manga that have captivated readers over time",
  },
  favorite: {
    label: "Most Favorited",
    desc: "Fan-favorite manga picks of all time",
  },
};

function Top() {
  const { category } = useParams();
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    setNextPage(1);
  }, [category]);

  const { isLoading, error, topManga } = useTopManga(
    category || "manga",
    nextPage,
  );

  if (isLoading) return null;
  if (error) return null;

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
        <div className="grid grid-cols-5 gap-4">
          {topManga?.data.map((manga: Manga, idx: number) => (
            <MangaCard key={manga.mal_id} manga={manga} index={idx} />
          ))}
        </div>
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
