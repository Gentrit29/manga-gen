import { useQuery } from "@tanstack/react-query";
import { getTopManga } from "../api/mangaApi";

export function useTopManga(type: string, page: number) {
  const {
    isLoading,
    error,
    data: topManga,
  } = useQuery({
    queryKey: ["topManga", type, page],
    queryFn: () => getTopManga(type, page),
  });

  return { isLoading, error, topManga };
}
