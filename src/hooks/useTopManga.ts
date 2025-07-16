import { useQuery } from "@tanstack/react-query";
import { getTopManga } from "../api/mangaApi";
import type { Route } from "../types/manga";

export function useTopManga(category: Route, page: number, type?: string) {
  const {
    isLoading,
    error,
    data: topManga,
  } = useQuery({
    queryKey: ["topManga", category, page, type ?? ""],
    queryFn: () => getTopManga(category, page, type),
  });

  return { isLoading, error, topManga };
}
