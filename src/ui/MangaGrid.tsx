import { useMediaQuery } from "react-responsive";
import MangaCard from "../components/MangaCard";
import { useGridAnimation } from "../hooks/useGridAnimation";
import type { MangaData } from "../types/manga";

import { motion } from "framer-motion";

type MangaGridProps = {
  manga: MangaData[];
};

function MangaGrid({ manga }: MangaGridProps) {
  const animation = useGridAnimation();
  const isWideScreen = useMediaQuery({ minWidth: 1440 });
  const columns = 5;
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5">
      {manga?.map((manga: MangaData, idx: number) => {
        const isFirstRow = idx < columns;
        return (
          <motion.div
            key={manga.mal_id}
            custom={idx}
            initial={isWideScreen && isFirstRow ? "visible" : "hidden"}
            whileInView={isWideScreen && isFirstRow ? undefined : "visible"}
            viewport={{ once: true, amount: 0 }}
            variants={animation}
          >
            <MangaCard manga={manga} index={idx} />
          </motion.div>
        );
      })}
    </div>
  );
}

export default MangaGrid;
