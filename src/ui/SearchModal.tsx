import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";
import type { MangaData } from "../types/manga";
import { useEffect } from "react";

type SearchModalProps = {
  query: string;
  setQuery: (query: string) => void;
  mangaList: MangaData[];
  isOpen: boolean;
  onClose: () => void;
};

function SearchModal({
  query,
  setQuery,
  mangaList,
  isOpen,
  onClose,
}: SearchModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 py-10"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-md bg-neutral-900 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full flex-col items-start bg-neutral-800 p-4">
          <div className="flex w-full items-center space-x-2 rounded-md border-2 border-white transition-colors duration-300 focus-within:border-green-500">
            <IoSearch className="ml-2 h-6 w-6 text-white" />
            <input
              autoFocus
              type="text"
              className="w-full bg-neutral-800 p-2 font-light text-white outline-none"
              placeholder="Search for a manga..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {query.length > 0 && (
            <div className="mt-2 font-light text-white">
              Search results for{" "}
              <span className="font-bold text-green-500">{query}</span>
            </div>
          )}
          <ul className="mt-4 max-h-[60vh] w-full overflow-y-auto border-t-1 border-white py-2">
            {mangaList && mangaList.length > 0 ? (
              mangaList.map((manga: MangaData) => (
                <li key={manga.mal_id}>
                  <Link
                    to={`/detail/${manga.mal_id}`}
                    onClick={onClose}
                    className="flex cursor-pointer items-center space-x-4 border-b border-neutral-700 px-2 py-3 font-light transition-colors duration-300 hover:bg-green-600"
                  >
                    <img
                      src={manga.images.webp.image_url}
                      alt={manga.title}
                      className="h-16 w-16 rounded-sm object-cover"
                    />
                    <span className="text-white">{manga.title}</span>
                  </Link>
                </li>
              ))
            ) : query.length > 0 ? (
              <p className="mt-2 text-white">No results found.</p>
            ) : (
              <p className="text-white">Type something for search...</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
