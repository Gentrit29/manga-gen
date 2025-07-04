import { useQuery } from "@tanstack/react-query";
import { getMangaCharacters } from "../api/mangaApi";

export function useMangaCharacters(id: number) {
  const {
    isLoading,
    error,
    data: mangaCharacters,
  } = useQuery({
    queryKey: ["mangaCharacters", id],
    queryFn: () => getMangaCharacters(id),
  });

  return { isLoading, error, mangaCharacters };
}
