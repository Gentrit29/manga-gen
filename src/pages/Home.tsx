import MangaGenres from "../components/MangaGenres";
import MangaRandom from "../components/MangaRandom";
import MangaSlider from "../components/MangaSlider";
import MangaTop from "../components/MangaTop";

function Home() {
  return (
    <>
      <MangaSlider />
      <MangaRandom />
      <MangaTop />
      <MangaGenres />
    </>
  );
}

export default Home;
