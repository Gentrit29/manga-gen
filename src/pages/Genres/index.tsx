import { useAllMangaGenres } from "../../hooks/useAllMangaGenres";

import GenresHeaderSection from "./GenresHeaderSection";
import GenresContentSection from "./GenresContentSection";

function Genres() {
  const { isLoading, allMangaGenres } = useAllMangaGenres();

  return (
    <section className="layout space-y-10">
      <GenresHeaderSection />
      <GenresContentSection isLoading={isLoading} genres={allMangaGenres} />
    </section>
  );
}

export default Genres;
