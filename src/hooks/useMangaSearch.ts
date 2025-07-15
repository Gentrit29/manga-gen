import { useQuery } from "@tanstack/react-query";
import { getMangaSearch } from "../api/mangaApi";

export function useMangaSearch(query: string) {
  const { isLoading, data: mangaList } = useQuery({
    queryKey: ["mangaQuery", query],
    queryFn: () => getMangaSearch(query),
    enabled: query.trim().length > 0,
    staleTime: 0,
  });

  return { mangaList, isLoading };
}
