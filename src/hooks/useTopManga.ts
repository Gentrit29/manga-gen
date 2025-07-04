import { useQuery } from "@tanstack/react-query";
import { getTopManga } from "../api/mangaApi";

export function useTopManga(category: string, page: number) {
  const {
    isLoading,
    error,
    data: topManga,
  } = useQuery({
    queryKey: ["topManga", category, page],
    queryFn: () => getTopManga(category, page),
  });

  return { isLoading, error, topManga };
}
