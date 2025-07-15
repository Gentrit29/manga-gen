import { Link } from "react-router";

import { formatNameForUrl } from "../utils/formatters";

import type { Genre } from "../types/manga";
import { useGridAnimation } from "../hooks/useGridAnimation";

import { motion } from "framer-motion";

function GenresGrid({ mangaGenres }: { mangaGenres: Genre[] }) {
  const animation = useGridAnimation(6);
  return (
    <div className="mt-10 grid grid-cols-2 place-items-center gap-2 text-white sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {mangaGenres.map((genre: Genre, idx: number) => (
        <motion.div
          key={genre.mal_id}
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={animation}
        >
          <Link
            to={`/genre/${genre.mal_id}?name=${formatNameForUrl(genre.name)}`}
          >
            <div className="w-30 rounded-sm border-1 border-green-500 p-1 transition-colors duration-300 hover:bg-green-500 md:w-40">
              <span>{genre.name}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

export default GenresGrid;
