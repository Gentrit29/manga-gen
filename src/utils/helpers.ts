import type { Genre } from "../types/manga";

export const removeDuplicateGenresTag = (genres: Genre[]) => {
  const seen = new Set<string>();
  return genres.filter((genre) => {
    if (seen.has(genre.name)) return false;
    seen.add(genre.name);
    return true;
  });
};

export function filterExplicitGenre(genre: Genre[], filter: string[]) {
  return genre.filter((genre: Genre) => !filter.includes(genre.name));
}
