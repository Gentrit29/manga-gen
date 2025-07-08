import { useRandomManga } from "../hooks/useRandomManga";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";

import MangaGrid from "../ui/MangaGrid";
import type { MangaData } from "../types/manga";
import MangaCard from "./MangaCard";

function MangaRandom() {
  const { isLoading, error, randomManga } = useRandomManga();

  if (isLoading) return null;
  if (error) return null;
  return (
    <section className="mx-5 mt-15 space-y-4 lg:mx-20 xl:mx-50">
      <div className="flex items-center space-x-2 md:space-x-4">
        <div className="h-10 w-1.5 rounded-sm bg-green-500"></div>
        <h2 className="text-2xl font-bold text-white">Random Manga Picks</h2>
      </div>
      <div className="hidden xl:block">
        {randomManga && randomManga.length > 0 && (
          <MangaGrid manga={randomManga} />
        )}
      </div>
      <div className="xl:hidden">
        <Swiper
          modules={[A11y, Autoplay, Navigation]}
          slidesPerView={"auto"}
          spaceBetween={16}
          navigation
          autoplay={{
            delay: 5000,
          }}
        >
          {randomManga?.map((manga: MangaData, idx: number) => (
            <SwiperSlide key={manga.mal_id} className="!w-[240px]">
              <MangaCard manga={manga} index={idx} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MangaRandom;
