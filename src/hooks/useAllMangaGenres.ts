import { useQuery } from "@tanstack/react-query";
import { getAllMangaGenres } from "../api/mangaApi";

export function useAllMangaGenres() {
  const {
    isLoading,
    error,
    data: allMangaGenres,
  } = useQuery({
    queryKey: ["allMangaGenres"],
    queryFn: getAllMangaGenres,
  });

  return { isLoading, error, allMangaGenres };
}
