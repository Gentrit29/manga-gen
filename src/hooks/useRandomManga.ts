import { useQuery } from "@tanstack/react-query";
import { getRandomMangas } from "../api/mangaApi";

export function useRandomManga() {
  const {
    isLoading,
    error,
    data: randomManga,
  } = useQuery({
    queryKey: ["randomManga"],
    queryFn: getRandomMangas,
  });

  return { isLoading, error, randomManga };
}
