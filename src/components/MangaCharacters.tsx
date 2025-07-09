import type { MangaCharacter } from "../types/manga";
import MangaCharacterCard from "./MangaCharacterCard";

type MangaCharacterProps = {
  params: MangaCharacter[];
};

function MangaCharacters({ params }: MangaCharacterProps) {
  return (
    <section className="layout space-y-4">
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="h-10 w-1.5 rounded-sm bg-green-500"></div>
        <h2 className="text-2xl font-bold text-white">Characters</h2>
      </div>
      {params && params.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {params?.slice(0, 25).map((manga: MangaCharacter) => (
            <MangaCharacterCard
              key={manga.character.mal_id}
              character={manga}
            />
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
