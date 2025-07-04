import { useQuery } from "@tanstack/react-query";
import { getTopManga } from "../api/mangaApi";

export function useTopManga(category: string, page: number, type?: string) {
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
