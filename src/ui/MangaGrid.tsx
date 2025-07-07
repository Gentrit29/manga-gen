import MangaCard from "../components/MangaCard";
import type { MangaData } from "../types/manga";

type MangaGridProps = {
  manga: MangaData[];
};

function MangaGrid({ manga }: MangaGridProps) {
  return (
    <div className="grid grid-cols-5 gap-4">
      {manga?.map((manga: MangaData, idx: number) => (
        <MangaCard key={manga.mal_id} manga={manga} index={idx} />
      ))}
    </div>
  );
}

export default MangaGrid;
