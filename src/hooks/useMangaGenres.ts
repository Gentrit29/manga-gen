import { useQuery } from "@tanstack/react-query";
import { getMangaGenres } from "../api/mangaApi";

export function useMangaGenres() {
  const {
    isLoading,
    error,
    data: mangaGenres,
  } = useQuery({
    queryKey: ["mangaGenres"],
    queryFn: getMangaGenres,
  });

  return { isLoading, error, mangaGenres };
}
