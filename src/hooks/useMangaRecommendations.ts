import { useQuery } from "@tanstack/react-query";
import { getMangaRecommendations } from "../api/mangaApi";

export function useMangaRecommendations(id: number) {
  const {
    isLoading,
    error,
    data: mangaRecommendations,
  } = useQuery({
    queryKey: ["mangaRecommendations", id],
    queryFn: () => getMangaRecommendations(id),
  });

  return { isLoading, error, mangaRecommendations };
}
