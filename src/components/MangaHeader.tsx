import type { Manga } from "../types/manga";

import { FaHeart, FaStar } from "react-icons/fa";

type MangaHeaderProps = {
  params: Manga;
};

function MangaHeader({ params }: MangaHeaderProps) {
  return (
    <div className="relative py-15">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm brightness-30"
        style={{ backgroundImage: `url(${params.images.webp.image_url})` }}
      />
      <section className="relative z-10 mx-20 flex space-x-8">
        <img
          src={params.images.webp.image_url}
          alt={params.title}
          className="h-80 w-60 rounded-lg"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl font-bold text-white">{params.title}</h1>
          <div className="flex items-center space-x-2 text-base font-light text-white">
            <span className="rounded bg-linear-to-r from-green-500 to-emerald-500 px-2 py-1">
              {params.type}
            </span>
            {params.volumes && (
              <span className="rounded bg-linear-to-r from-green-500 to-emerald-500 px-2 py-1">
                {params.volumes} vol.
              </span>
            )}
            {params.chapters && (
              <span className="rounded bg-linear-to-r from-green-500 to-emerald-500 px-2 py-1">
                {params.chapters} ch.
              </span>
            )}
            <span className="rounded bg-linear-to-r from-green-500 to-emerald-500 px-2 py-1">
              {params.status}
            </span>
            {params.score && (
              <div className="flex items-center space-x-1 rounded bg-linear-to-r from-green-500 to-emerald-500 px-2 py-1">
                <FaStar className="text-yellow-500" />
                <span>{params.score}</span>
              </div>
            )}
            {params.favorites > 0 && (
              <div className="flex items-center space-x-1 rounded bg-linear-to-r from-green-500 to-emerald-500 px-2 py-1">
                <FaHeart className="text-red-500" />
                <span>{params.favorites}</span>
              </div>
            )}
          </div>
          <div className="mt-6 max-w-2xl">
            <p className="text-white">{params.synopsis}</p>
          </div>
          <div className="mt-6 space-x-2">
            <span className="rounded bg-linear-to-r from-green-800 to-emerald-800 px-2 py-1 text-white">
              Genres:
            </span>
            {params.genres.map((g) => (
              <span
                key={g.mal_id}
                className="rounded bg-linear-to-r from-gray-800 to-gray-900 px-2 py-1 text-white"
              >
                {g.name}
              </span>
            ))}
          </div>
          <div className="mt-2 space-x-2">
            <span className="rounded bg-linear-to-r from-green-800 to-emerald-800 px-2 py-1 text-white">
              Authors:
            </span>
            {params.authors.map((a) => (
              <span
                key={a.mal_id}
                className="rounded bg-linear-to-r from-gray-800 to-gray-900 px-2 py-1 text-white"
              >
                {a.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MangaHeader;
