import { useParams } from "react-router";
import { useMangaFullById } from "../hooks/useMangaFullById";
import MangaHeader from "../components/MangaHeader";
import MangaRecommendations from "../components/MangaRecommendations";
import { useMangaRecommendations } from "../hooks/useMangaRecommendations";
import { useMangaCharacters } from "../hooks/useMangaCharacters";

import MangaCharacters from "../components/MangaCharacters";
import AboutSection from "../components/AboutSection";

function Detail() {
  const { id } = useParams();

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

  if (isLoading || isRecommendationsLoading || isCharactersLoading) return null;
  if (error || recommendationsError || charactersError) return null;

  return (
    <>
      <MangaHeader params={mangaFull} />
      <MangaCharacters params={mangaCharacters} />
      <AboutSection />
      <MangaRecommendations params={mangaRecommendations} />
    </>
  );
}

export default Detail;
