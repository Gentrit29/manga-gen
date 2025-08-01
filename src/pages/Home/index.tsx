import MangaRandom from "./MangaRandom";
import MangaSlider from "./MangaSlider";
import MangaTop from "./MangaTop";
import MangaGenres from "./MangaGenres";

import AboutSection from "../../components/AboutSection";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

function Home() {
  useDocumentTitle("");
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
