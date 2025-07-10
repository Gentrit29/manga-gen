import { NavLink } from "react-router";

import { IoLogoGithub, IoShieldOutline, IoSearch } from "react-icons/io5";

import DropdownMenu from "./DropdownMenu";
import { useMangaSearch } from "../../hooks/useMangaSearch";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import SearchModal from "../../ui/SearchModal";

function Header() {
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
      <header className="z-20 h-20 bg-neutral-800">
        <nav className="flex h-full items-center space-x-10 px-20 text-white">
          <h1 className="cursor-pointer text-2xl font-bold">Manga GEN</h1>
          <ul className="flex space-x-4 text-lg font-light">
            <li className="transition-colors duration-300 hover:text-green-500">
              <NavLink to="/">Home</NavLink>
            </li>
            <DropdownMenu />
          </ul>
          <div className="ml-auto flex items-center space-x-4 text-lg font-light">
            <button
              className="ml-auto flex cursor-pointer items-center font-light"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
            >
              <IoSearch className="h-6 w-6" />
            </button>
            <div className="flex space-x-4">
              <button
                title="Enable NSFW"
                aria-label="Button to enable NSFW content"
                className="cursor-pointer text-green-500 transition-colors duration-300 hover:text-red-500"
              >
                <IoShieldOutline className="h-6 w-6" />
              </button>
              <a
                href="github.com/Gentrit29"
                target="_blank"
                aria-label="Go to github repository"
              >
                <IoLogoGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
        </nav>
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
