import { Link } from "react-router";

import type { MangaRecommendation } from "../types/manga";

import { MdOutlineOpenInNew } from "react-icons/md";

type MangaRecommendationsProps = {
  params: MangaRecommendation[];
};

function MangaRecommendations({ params }: MangaRecommendationsProps) {
  return (
    <section className="mx-5 mt-15 space-y-4 lg:mx-20 xl:mx-50">
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="h-10 w-1.5 rounded-sm bg-green-500"></div>
        <h2 className="text-2xl font-bold text-white">You May Also Like</h2>
      </div>
      {params && params.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {params.slice(0, 10).map(({ entry }, index) => (
            <Link key={entry.mal_id} to={`/detail/${entry.mal_id}`}>
              <div className="group relative w-full">
                <img
                  className="h-60 w-60 rounded-lg brightness-90 md:h-80 xl:w-full"
                  src={entry.images.webp.image_url}
                  alt={entry.title}
                />
                <div className="absolute right-0 bottom-0 left-0 h-32 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-3 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h3 className="w-fit rounded-lg bg-gradient-to-r from-green-500/70 to-emerald-500/70 px-1 py-2 text-lg font-light text-white">
                      #{index + 1}
                    </h3>
                  </div>
                  <h3 className="font-light text-white">{entry.title}</h3>
                </div>
                <div className="absolute inset-0 z-10 h-full rounded-lg bg-neutral-900/80 p-2 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="flex h-full items-center justify-center">
                    <MdOutlineOpenInNew className="h-10 w-10" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-10 flex items-center justify-center">
          <p className="text-2xl text-white">No recommendations available!</p>
        </div>
      )}
    </section>
  );
}

export default MangaRecommendations;
