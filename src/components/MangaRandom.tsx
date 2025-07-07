import MangaCard from "./MangaCard";

import { useRandomManga } from "../hooks/useRandomManga";

import type { MangaData } from "../types/manga";

function MangaRandom() {
  const { isLoading, error, randomManga } = useRandomManga();

  if (isLoading) return null;
  if (error) return null;
  return (
    <section className="mx-20 mt-15 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="h-10 w-1.5 rounded-sm bg-green-500"></div>
        <h2 className="text-2xl font-bold text-white">Random Manga Picks</h2>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {randomManga?.map((manga: MangaData, idx: number) => (
          <MangaCard key={manga.mal_id} manga={manga} index={idx} />
        ))}
      </div>
    </section>
  );
}

export default MangaRandom;
