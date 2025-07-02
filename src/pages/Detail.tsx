import { useParams } from "react-router";
import { useMangaFullById } from "../hooks/useMangaFullById";
import MangaHeader from "../components/MangaHeader";

function Detail() {
  const { id } = useParams();
  const { isLoading, error, mangaFull } = useMangaFullById(Number(id));

  if (isLoading) return null;
  if (error) return null;

  return (
    <>
      <MangaHeader params={mangaFull} />
    </>
  );
}

export default Detail;
