import { useQuery } from "@tanstack/react-query";
import { getTop5Manga } from "../api/mangaApi";

export function useTop5Manga() {
  const {
    isLoading,
    error,
    data: top5Manga,
  } = useQuery({
    queryKey: ["top5Manga"],
    queryFn: getTop5Manga,
  });

  return { isLoading, error, top5Manga };
}
