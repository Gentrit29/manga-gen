import { useState } from "react";
import { useLocation } from "react-router";

import SearchHeaderSection from "./SearchHeaderSection";
import SearchContentSection from "./SearchContentSection";

import { formatNameForDisplay } from "../../utils/formatters";

import { useMangaSearch } from "../../hooks/useMangaSearch";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

function Search() {
  const location = useLocation();

  const queryName = new URLSearchParams(location.search).get("q") || "";

  const formattedName = queryName ? formatNameForDisplay(queryName) : "";

  const [nextPage, setNextPage] = useState(1);

  const { isLoading, mangaList } = useMangaSearch(queryName, nextPage);

  useDocumentTitle(`Search | ${formattedName}`);

  return (
    <div className="layout space-y-4">
      <SearchHeaderSection name={formattedName} />
      <SearchContentSection
        isLoading={isLoading}
        manga={mangaList}
        setNextPage={setNextPage}
      />
    </div>
  );
}

export default Search;
