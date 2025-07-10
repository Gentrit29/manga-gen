import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";

import { IoReload } from "react-icons/io5";

import MangaCard from "../../components/MangaCard";

import MangaGrid from "../../ui/MangaGrid";
import SkeletonGrid from "../../ui/SkeletonGrid";

import { useRandomManga } from "../../hooks/useRandomManga";

import type { MangaData } from "../../types/manga";

function MangaRandom() {
  const { isLoading, isFetching, refetch, randomManga } = useRandomManga();

  // if (error) return null;

  return (
    <section className="mx-5 mt-15 space-y-4 lg:mx-20 2xl:mx-40">
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
      <div className="hidden xl:block">
        {isLoading || isFetching ? (
          <SkeletonGrid elements={5} />
        ) : (
          randomManga &&
          randomManga.length > 0 && <MangaGrid manga={randomManga} />
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
