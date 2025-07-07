import { useLocation, useParams } from "react-router";
import { useMangaSearchByGenre } from "../hooks/useMangaSearchByGenre";
import MangaCard from "../components/MangaCard";
import type { Manga } from "../types/manga";

import { useState } from "react";
import Pagination from "../ui/Pagination";
import { formatGenreNameForDisplay } from "../utils/helpers";

function Genre() {
  const { id } = useParams();
  const location = useLocation();

  const genreName = new URLSearchParams(location.search).get("name");

  const formattedName = genreName ? formatGenreNameForDisplay(genreName) : "";

  const [nextPage, setNextPage] = useState(1);

  const { mangaList } = useMangaSearchByGenre(Number(id), nextPage);

  return (
    <div className="mx-20 my-15 space-y-5">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-1.5 rounded-sm bg-green-500"></div>
        <h2 className="text-2xl font-bold text-white">
          Result for {formattedName}
        </h2>
      </div>
      {mangaList?.data && mangaList.data.length > 0 ? (
        <div className="grid grid-cols-5 gap-4">
          {mangaList?.data.map((manga: Manga, idx: number) => (
            <MangaCard key={manga.mal_id} manga={manga} index={idx} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-white">No results to display</p>
      )}
      {mangaList?.pagination && mangaList?.pagination.last_visible_page > 1 && (
        <Pagination
          currentPage={mangaList?.pagination.current_page}
          firstPage={1}
          lastPage={mangaList?.pagination.last_visible_page}
          onPageChange={setNextPage}
        />
      )}
    </div>
  );
}

export default Genre;
