import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

import { useMangaSearch } from "../../hooks/useMangaSearch";
import { useDebounce } from "../../hooks/useDebounce";
import SearchModal from "../../ui/SearchModal";

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [query, setQuery] = useState("");
  const [isSearchOpen, setSearchOpen] = useState(false);

  const debounceQuery = useDebounce(query, 500);
  const { mangaList } = useMangaSearch(debounceQuery);

  function resetModal() {
    setSearchOpen(false);
    setQuery("");
  }

  return (
    <>
      <header className="z-20 h-20 bg-neutral-800 px-5 lg:px-20 2xl:px-40">
        {isMobile ? (
          <NavBarMobile onSearchClick={setSearchOpen} />
        ) : (
          <NavBarDesktop onSearchClick={setSearchOpen} />
        )}
      </header>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={resetModal}
        query={query}
        setQuery={setQuery}
        mangaList={mangaList}
      />
    </>
  );
}

export default Header;
