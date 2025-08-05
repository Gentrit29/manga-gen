import { Link } from "react-router";
import { useMediaQuery } from "react-responsive";

import type { MangaData } from "../types/manga";

import { FaStar } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

import { formatNameForUrl } from "../utils/formatters";

type MangaCardProps = {
  manga: MangaData;
  index: number;
  customHeight?: string;
};

function MangaCard({
  manga,
  index,
  customHeight = "h-60 sm:h-72 2xl:h-96",
}: MangaCardProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Link to={`/detail/${manga.mal_id}?title=${formatNameForUrl(manga.title)}`}>
      <div className="group relative">
        <img
          className={`${customHeight} w-full rounded-lg object-cover brightness-90`}
          src={manga.images.webp.large_image_url}
          alt={manga.title}
          loading="lazy"
        />
        <div className="absolute right-0 bottom-0 left-0 h-32 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent md:h-48" />
        <div className="absolute inset-3 flex flex-col justify-between">
          <div className="flex justify-between text-base sm:text-lg">
            <span className="w-fit rounded-lg bg-gradient-to-r from-green-500/70 to-emerald-500/70 px-1 py-2 font-light text-white">
              #{index + 1}
            </span>
            {manga.score && (
              <div className="flex w-fit items-center space-x-1 rounded-lg bg-gradient-to-r from-yellow-500/70 to-orange-500/70 px-1 py-2 font-semibold text-white">
                <FaStar />
                <span>{manga.score}</span>
              </div>
            )}
          </div>
          <h2 className="line-clamp-2 font-light text-white md:line-clamp-none">
            {manga.title}
          </h2>
        </div>
        {!isMobile ? (
          <div className="absolute inset-0 z-10 h-full rounded-lg bg-neutral-900/90 p-2 text-white opacity-0 transition-all duration-200 group-hover:opacity-100">
            <div className="line-clamp-2 text-lg font-semibold">
              {manga.title}
            </div>
            <div className="mt-2 mb-2 flex flex-wrap items-center gap-2 text-sm text-gray-400">
              <span className="rounded bg-neutral-800 px-2 py-1">
                {manga.type}
              </span>
              {manga.volumes && (
                <span className="rounded bg-neutral-800 px-2 py-1">
                  {manga.volumes} vol.
                </span>
              )}
              {manga.chapters && (
                <span className="rounded bg-neutral-800 px-2 py-1">
                  {manga.chapters} ch.
                </span>
              )}
            </div>
            <p className="mb-3 line-clamp-3 text-sm text-gray-300">
              {manga.synopsis}
            </p>
            <div className="mb-2 text-sm text-gray-400">
              <p>Aired: {manga.published.string}</p>
              <p>Status: {manga.status}</p>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {manga.genres.slice(0, 3).map((g) => (
                <span
                  key={g.mal_id}
                  className="rounded bg-green-600/20 px-2 py-1 text-green-300"
                >
                  {g.name}
                </span>
              ))}
              {manga.genres.length > 3 && (
                <span className="rounded bg-green-600/20 px-2 py-1 text-green-300">
                  +{manga.genres.length - 3} more
                </span>
              )}
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 z-10 h-full rounded-lg bg-neutral-900/60 p-2 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="flex h-full items-center justify-center">
              <MdOutlineOpenInNew className="h-6 w-6 md:h-8 md:w-8" />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default MangaCard;
