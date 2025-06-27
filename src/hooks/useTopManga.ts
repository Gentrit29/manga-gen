import { useQuery } from "@tanstack/react-query";
import { getTopManga } from "../api/mangaApi";

export function useTopManga(type: string) {
  const {
    isLoading,
    error,
    data: topManga,
  } = useQuery({
    queryKey: ["topManga", type],
    queryFn: () => getTopManga(type),
  });

  return { isLoading, error, topManga };
}
