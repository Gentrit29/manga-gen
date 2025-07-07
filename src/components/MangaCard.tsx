import { Link } from "react-router";

import type { MangaData } from "../types/manga";

type MangaCardProps = {
  manga: MangaData;
  index: number;
};

function MangaCard({ manga, index }: MangaCardProps) {
  return (
    <Link to={`/detail/${manga.mal_id}`}>
      <div className="group relative w-full max-w-60">
        <img
          className="h-80 w-60 rounded-lg brightness-90"
          src={manga.images.webp.image_url}
        />
        <div className="absolute right-0 bottom-0 left-0 h-32 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-3 flex flex-col justify-between">
          <div className="flex justify-between">
            <h3 className="w-fit rounded-lg bg-gradient-to-r from-green-500/70 to-emerald-500/70 px-1 py-2 text-lg font-light text-white">
              #{index + 1}
            </h3>
            {manga.genres.some((g) => g.name === "Erotica") && (
              <h3 className="w-fit rounded-lg bg-gradient-to-r from-rose-500/70 to-pink-500/70 px-1 py-2 text-lg font-semibold text-white">
                16+
              </h3>
            )}
          </div>
          <h3 className="font-light text-white">{manga.title}</h3>
        </div>
        <div className="absolute inset-0 z-10 hidden h-full rounded-lg bg-neutral-900/90 p-2 text-white shadow-xl transition-all duration-300 group-hover:block">
          <h3 className="line-clamp-2 text-lg font-semibold">{manga.title}</h3>
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
      </div>
    </Link>
  );
}

export default MangaCard;
