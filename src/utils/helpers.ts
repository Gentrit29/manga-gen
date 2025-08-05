import type { Genre } from "../types/manga";

export const removeDuplicates = <T extends { mal_id: number }>(
  data: T[] = [],
) => {
  const seen = new Set<number>();
  return data.filter((item) => {
    if (seen.has(item.mal_id)) return false;
    seen.add(item.mal_id);
    return true;
  });
};

export function filterExplicitGenre(genre: Genre[], filter: string[]) {
  return genre.filter((genre: Genre) => !filter.includes(genre.name));
}
