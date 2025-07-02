import { useQuery } from "@tanstack/react-query";
import { getMangaFullById } from "../api/mangaApi";

export function useMangaFullById(id: number) {
  const {
    isLoading,
    error,
    data: mangaFull,
  } = useQuery({
    queryKey: ["mangaFull", id],
    queryFn: () => getMangaFullById(id),
  });

  return { isLoading, error, mangaFull };
}
