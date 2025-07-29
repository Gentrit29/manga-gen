import { Link } from "react-router";
import { MdOutlineOpenInNew } from "react-icons/md";

import SkeletonGrid from "../../ui/SkeletonGrid";

import type { MangaRecommendation } from "../../types/manga";

import { formatNameForUrl } from "../../utils/formatters";
import { useGridAnimation } from "../../hooks/useGridAnimation";

import { motion } from "framer-motion";

type MangaRecommendationsProps = {
  params: MangaRecommendation[];
  isLoading: boolean;
};

function MangaRecommendations({
  params,
  isLoading,
}: MangaRecommendationsProps) {
  const animation = useGridAnimation();
  return (
    <section className="layout space-y-4">
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="h-10 w-1.5 rounded-sm bg-green-500"></div>
        <h2 className="text-2xl font-bold text-white">You May Also Like</h2>
      </div>
      {isLoading ? (
        <SkeletonGrid elements={10} />
      ) : params && params.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5">
          {params.slice(0, 10).map(({ entry }, idx) => (
            <motion.div
              key={entry.mal_id}
              initial="hidden"
              whileInView="visible"
              variants={animation}
              viewport={{ once: true, amount: 0 }}
              custom={idx}
            >
              <Link
                to={`/detail/${entry.mal_id}?title=${formatNameForUrl(entry.title)}`}
              >
                <div className="group relative w-full">
                  <img
                    className="h-60 w-full rounded-lg object-cover brightness-90 sm:h-72 2xl:h-96"
                    src={entry.images.webp.image_url}
                    alt={entry.title}
                  />
                  <div className="absolute right-0 bottom-0 left-0 h-32 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-3 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <h3 className="w-fit rounded-lg bg-gradient-to-r from-green-500/70 to-emerald-500/70 px-1 py-2 text-lg font-light text-white">
                        #{idx + 1}
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
            </motion.div>
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
