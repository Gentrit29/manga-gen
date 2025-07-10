import { useState } from "react";
import { useLocation, useParams } from "react-router";

import { useMangaSearchByGenre } from "../../hooks/useMangaSearchByGenre";

import { formatGenreNameForDisplay } from "../../utils/formatters";

import GenreHeaderSection from "./GenreHeaderSection";
import GenreContentSection from "./GenreContentSection";

function Genre() {
  const { id } = useParams();

  const location = useLocation();

  const genreName = new URLSearchParams(location.search).get("name");

  const formattedName = genreName ? formatGenreNameForDisplay(genreName) : "";

  const [nextPage, setNextPage] = useState(1);

  const { isLoading, mangaList } = useMangaSearchByGenre(Number(id), nextPage);

  return (
    <div className="layout space-y-4">
      <GenreHeaderSection name={formattedName} />
      <GenreContentSection
        isLoading={isLoading}
        manga={mangaList}
        setNextPage={setNextPage}
      />
    </div>
  );
}

export default Genre;
