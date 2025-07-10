import { useQuery } from "@tanstack/react-query";
import { getRandomMangas } from "../api/mangaApi";

export function useRandomManga() {
  const {
    isLoading,
    isFetching,
    refetch,
    error,
    data: randomManga,
  } = useQuery({
    queryKey: ["randomManga"],
    queryFn: getRandomMangas,
  });

  return { isLoading, isFetching, refetch, error, randomManga };
}
