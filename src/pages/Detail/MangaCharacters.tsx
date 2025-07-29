import MangaCharacterCard from "./MangaCharacterCard";

import type { MangaCharacter } from "../../types/manga";

import SkeletonGrid from "../../ui/SkeletonGrid";

import { motion } from "framer-motion";
import { useGridAnimation } from "../../hooks/useGridAnimation";

type MangaCharacterProps = {
  params: MangaCharacter[];
  isLoading: boolean;
};

function MangaCharacters({ params, isLoading }: MangaCharacterProps) {
  const animation = useGridAnimation();
  return (
    <section className="layout space-y-4">
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="h-10 w-1.5 rounded-sm bg-green-500"></div>
        <h2 className="text-2xl font-bold text-white">Characters</h2>
      </div>
      {isLoading ? (
        <SkeletonGrid elements={25} />
      ) : params && params.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5">
          {params?.slice(0, 25).map((manga: MangaCharacter, idx: number) => (
            <motion.div
              key={manga.character.mal_id}
              initial="hidden"
              whileInView="visible"
              variants={animation}
              custom={idx}
              viewport={{ once: true, amount: 0 }}
            >
              <MangaCharacterCard character={manga} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="mt-10 flex items-center justify-center">
          <p className="text-2xl text-white">No characters available!</p>
        </div>
      )}
    </section>
  );
}

export default MangaCharacters;
