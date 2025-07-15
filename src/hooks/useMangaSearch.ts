import { useQuery } from "@tanstack/react-query";
import { getMangaSearch } from "../api/mangaApi";

export function useMangaSearch(query: string, page: number) {
  const { isLoading, data: mangaList } = useQuery({
    queryKey: ["mangaQuery", query, page],
    queryFn: () => getMangaSearch(query, page),
    enabled: query.trim().length > 0,
    staleTime: 0,
  });

  return { mangaList, isLoading };
}
