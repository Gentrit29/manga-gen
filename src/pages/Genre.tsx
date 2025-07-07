import { useLocation, useParams } from "react-router";
import { useMangaSearchByGenre } from "../hooks/useMangaSearchByGenre";

import { useState } from "react";
import Pagination from "../ui/Pagination";
import { formatGenreNameForDisplay } from "../utils/helpers";
import MangaGrid from "../ui/MangaGrid";

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
        <MangaGrid manga={mangaList} />
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
