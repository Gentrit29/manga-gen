import MangaCard from "../components/MangaCard";
import type { Manga, MangaData } from "../types/manga";

type MangaGridProps = {
  manga: Manga;
};

function MangaGrid({ manga }: MangaGridProps) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {manga?.data.map((manga: MangaData, idx: number) => (
        <MangaCard key={manga.mal_id} manga={manga} index={idx} />
      ))}
    </div>
  );
}

export default MangaGrid;
