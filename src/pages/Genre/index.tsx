import { useState } from "react";
import { useLocation, useParams } from "react-router";

import { useMangaSearchByGenre } from "../../hooks/useMangaSearchByGenre";

import { formatNameForDisplay } from "../../utils/formatters";

import GenreHeaderSection from "./GenreHeaderSection";
import GenreContentSection from "./GenreContentSection";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

function Genre() {
  const { id } = useParams();

  const { search } = useLocation();

  const genreName = new URLSearchParams(search).get("name");

  const formattedName = genreName ? formatNameForDisplay(genreName) : "";

  const [nextPage, setNextPage] = useState(1);

  const { isLoading, mangaList } = useMangaSearchByGenre(Number(id), nextPage);

  useDocumentTitle(`Genre | ${formattedName}`);

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
