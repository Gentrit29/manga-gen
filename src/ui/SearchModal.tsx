import { useEffect } from "react";
import { Link } from "react-router";

import { IoSearch } from "react-icons/io5";
import type { MangaData } from "../types/manga";

import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { formatNameForUrl } from "../utils/formatters";
import { removeDuplicates } from "../utils/helpers";

type SearchModalProps = {
  query: string;
  setQuery: (query: string) => void;
  mangaList: MangaData[];
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
};

function SearchModal({
  query,
  setQuery,
  mangaList,
  isOpen,
  onClose,
  isLoading,
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

  const uniqueMangas = removeDuplicates(mangaList ?? []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 py-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="relative mx-2 w-full max-w-md rounded-md bg-neutral-900 px-6 py-4 md:mx-0 md:max-w-xl lg:max-w-3xl"
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
              <ul className="mt-4 max-h-[60vh] w-full overflow-y-auto border-t border-white py-2">
                {!isLoading ? (
                  uniqueMangas && uniqueMangas.length > 0 ? (
                    uniqueMangas.map((manga: MangaData) => (
                      <li key={manga.mal_id}>
                        <Link
                          to={`/detail/${manga.mal_id}?title=${formatNameForUrl(manga.title)}`}
                          onClick={onClose}
                          className="flex cursor-pointer items-center space-x-3 border-b border-neutral-700 py-2 font-light transition-colors duration-300 hover:bg-green-600"
                        >
                          <img
                            src={manga.images.webp.large_image_url}
                            alt={manga.title}
                            className="h-auto w-16 shrink-0 rounded-sm object-contain"
                          />
                          <div className="w-full">
                            <span className="line-clamp-3 text-white">
                              {manga.title_english || manga.title}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))
                  ) : query.length > 0 ? (
                    <p className="mt-2 text-white">No results found.</p>
                  ) : (
                    <p className="text-white">Type something for search...</p>
                  )
                ) : (
                  <p className="text-white">Loading...</p>
                )}
              </ul>
            </div>
            {!isLoading && query.length > 0 && (
              <div className="mt-2 flex items-center justify-center">
                <Link
                  to={`/search?q=${formatNameForUrl(query)}`}
                  onClick={onClose}
                  className="flex w-fit cursor-pointer items-center rounded-sm bg-linear-to-r from-green-500 to-emerald-500 px-4 py-1 text-base font-bold text-gray-200 transition-all duration-300 hover:scale-105 md:text-lg"
                >
                  View All Results
                  <MdOutlineKeyboardDoubleArrowRight className="h-6 w-6" />
                </Link>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchModal;
