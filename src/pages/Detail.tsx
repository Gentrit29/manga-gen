import { useParams } from "react-router";
import { useMangaFullById } from "../hooks/useMangaFullById";
import MangaHeader from "../components/MangaHeader";
import MangaRecommendations from "../components/MangaRecommendations";
import { useMangaRecommendations } from "../hooks/useMangaRecommendations";

function Detail() {
  const { id } = useParams();
  const { isLoading, error, mangaFull } = useMangaFullById(Number(id));
  const {
    isLoading: isRecommendationsLoading,
    error: recommendationsError,
    mangaRecommendations,
  } = useMangaRecommendations(Number(id));

  if (isLoading || isRecommendationsLoading) return null;
  if (error || recommendationsError) return null;

  return (
    <>
      <MangaHeader params={mangaFull} />
      <MangaRecommendations params={mangaRecommendations} />
    </>
  );
}

export default Detail;
