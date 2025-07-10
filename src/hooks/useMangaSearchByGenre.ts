import { useQuery } from "@tanstack/react-query";
import { getMangaSearchByGenre } from "../api/mangaApi";

export function useMangaSearchByGenre(genres: number, page = 1) {
  const {
    isLoading,
    error,
    data: mangaList,
  } = useQuery({
    queryKey: ["mangaByGenre", genres, page],
    queryFn: () => getMangaSearchByGenre(genres, page),
  });

  return { isLoading, error, mangaList };
}
