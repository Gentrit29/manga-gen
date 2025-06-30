import MangaRandom from "../components/MangaRandom";
import MangaSlider from "../components/MangaSlider";
import MangaTop from "../components/MangaTop";
import AboutSection from "../components/AboutSection";
import MangaGenres from "../components/MangaGenres";

function Home() {
  return (
    <>
      <MangaSlider />
      <MangaRandom />
      <MangaTop />
      <AboutSection />
      <MangaGenres />
    </>
  );
}

export default Home;
