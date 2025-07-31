import { useLocation, useParams } from "react-router";

import MangaHeader from "./MangaHeader";
import MangaRecommendations from "./MangaRecommendations";
import MangaCharacters from "./MangaCharacters";

import AboutSection from "../../components/AboutSection";

import { useMangaFullById } from "../../hooks/useMangaFullById";
import { useMangaRecommendations } from "../../hooks/useMangaRecommendations";
import { useMangaCharacters } from "../../hooks/useMangaCharacters";
import { formatNameForDisplay } from "../../utils/formatters";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

function Detail() {
  const { id } = useParams();

  const { search } = useLocation();

  const titleParam = new URLSearchParams(search).get("title");

  const title = titleParam ? formatNameForDisplay(titleParam) : "";

  const { isLoading, error, mangaFull } = useMangaFullById(Number(id));

  const {
    isLoading: isRecommendationsLoading,
    error: recommendationsError,
    mangaRecommendations,
  } = useMangaRecommendations(Number(id));

  const {
    isLoading: isCharactersLoading,
    error: charactersError,
    mangaCharacters,
  } = useMangaCharacters(Number(id));

  useDocumentTitle(`${title}`);

  if (error || recommendationsError || charactersError) return null;

  return (
    <>
      <MangaHeader params={mangaFull} isLoading={isLoading} />
      <MangaCharacters
        params={mangaCharacters}
        isLoading={isCharactersLoading}
      />
      <AboutSection />
      <MangaRecommendations
        params={mangaRecommendations}
        isLoading={isRecommendationsLoading}
      />
    </>
  );
}

export default Detail;
