import { useQuery } from "@tanstack/react-query";
import { MAIN_GENRE } from "../lib/genres";

//Keeping the hook to utilize loading state and display SkeletonGrid component
//Didn't want to fake loading state with setTimeout and useEffect
export function useMangaGenres() {
  const {
    isLoading,
    error,
    data: mangaGenres,
  } = useQuery({
    queryKey: ["mangaGenres"],
    queryFn: () => Promise.resolve(MAIN_GENRE),
  });

  return { isLoading, error, mangaGenres };
}
