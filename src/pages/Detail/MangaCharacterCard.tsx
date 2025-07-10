import type { MangaCharacter } from "../../types/manga";

type MangaCharacterCardProps = {
  character: MangaCharacter;
};

function MangaCharacterCard({ character }: MangaCharacterCardProps) {
  return (
    <div className="group relative w-full">
      <img
        className="h-72 w-full rounded-lg object-cover brightness-90 2xl:h-96"
        src={character.character.images.webp.image_url}
      />
      <div className="absolute right-0 bottom-0 left-0 h-32 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute inset-3 flex flex-col justify-between">
        <div className="flex justify-between">
          <h3 className="w-fit rounded-lg bg-gradient-to-r from-green-500/70 to-emerald-500/70 px-1 py-2 text-lg font-light text-white">
            {character.role}
          </h3>
        </div>
        <h3 className="font-light text-white">{character.character.name}</h3>
      </div>
    </div>
  );
}

export default MangaCharacterCard;
