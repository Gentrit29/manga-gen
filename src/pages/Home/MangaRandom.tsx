import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";

import { IoReload } from "react-icons/io5";

import MangaCard from "../../components/MangaCard";

import MangaGrid from "../../ui/MangaGrid";
import SkeletonGrid from "../../ui/SkeletonGrid";

import { useRandomManga } from "../../hooks/useRandomManga";

import type { MangaData } from "../../types/manga";
import { useMediaQuery } from "react-responsive";
import MangaRandomSkeletonMobile from "./MangaRandomSkeletonMobile";

function MangaRandom() {
  const isMobile = useMediaQuery({ maxWidth: 1280 });
  const { isLoading, isFetching, refetch, randomManga } = useRandomManga();

  const loadingSkeleton = isMobile ? (
    <MangaRandomSkeletonMobile />
  ) : (
    <SkeletonGrid elements={5} />
  );

  return (
    <section className="layout space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="h-10 w-1.5 rounded-sm bg-green-500" />
          <h2 className="text-2xl font-bold text-white">Random Manga Picks</h2>
        </div>
        <button
          disabled={isFetching}
          className="cursor-pointer"
          onClick={() => refetch()}
        >
          <IoReload
            className={`h-6 w-6 text-white transition-colors duration-300 hover:text-green-500 ${isFetching ? "animate-spin" : ""}`}
          />
        </button>
      </div>

      {isLoading || isFetching ? (
        loadingSkeleton
      ) : !isMobile ? (
        randomManga &&
        randomManga.length > 0 && <MangaGrid manga={randomManga} />
      ) : (
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
              <MangaCard manga={manga} index={idx} customHeight="h-80" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}

export default MangaRandom;
