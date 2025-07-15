import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import { FaHeart, FaStar } from "react-icons/fa";

import MangaSliderSkeleton from "./MangaSliderSkeleton";

import { useTop5Manga } from "../../hooks/useTop5Manga";

import type { MangaSlide } from "../../types/manga";

import { formatNameForUrl } from "../../utils/formatters";

function MangaSlider() {
  const { isLoading, top5Manga } = useTop5Manga();

  if (isLoading) return <MangaSliderSkeleton />;

  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay, Navigation]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 6000,
      }}
    >
      {top5Manga.map((manga: MangaSlide) => (
        <SwiperSlide key={manga.mal_id}>
          <div className="relative h-[500px] max-h-[500px] overflow-hidden">
            <div
              className="absolute inset-0 scale-100 bg-cover bg-center blur-xs brightness-50 sm:blur-sm"
              style={{ backgroundImage: `url(${manga.images.webp.image_url})` }}
            />
            <div className="relative z-10 flex h-full flex-col justify-center px-5 py-10 lg:px-20 2xl:px-40">
              <div className="flex h-10 w-fit items-center rounded-sm bg-linear-to-r from-green-500 to-emerald-500 px-4">
                <h3 className="text-base text-white md:text-lg">
                  Ranked #{manga.rank} in Top Manga
                </h3>
              </div>
              <div className="mt-3 md:mt-6">
                <h1 className="text-2xl font-bold text-white md:text-3xl">
                  {manga.title}
                </h1>
                <h2 className="text-lg font-light text-white md:text-xl">
                  ({manga.title_japanese})
                </h2>
              </div>
              <div className="mt-3 max-w-lg md:mt-8">
                <p className="line-clamp-3 text-sm text-gray-200 md:text-lg">
                  {manga.synopsis}
                </p>
                <Link
                  to={`/detail/${manga.mal_id}?title=${formatNameForUrl(manga.title)}`}
                  className="text-sm font-bold text-green-400 md:text-lg"
                >
                  Read More
                </Link>
              </div>
              <div className="mt-4 flex items-center space-x-1 text-base font-light md:text-lg">
                <FaStar className="text-yellow-500" />
                <span className="text-gray-200">
                  {manga.score} ({manga.scored_by} ratings)
                </span>
                <div className="ml-4 flex items-center space-x-1">
                  <FaHeart className="text-red-500" />
                  <span className="text-gray-200">{manga.favorites}</span>
                </div>
              </div>
              <Link
                to={`/detail/${manga.mal_id}?title=${formatNameForUrl(manga.title)}`}
                className="mt-5 inline-block w-fit cursor-pointer rounded-sm bg-linear-to-r from-green-500 to-emerald-500 px-4 py-1 text-base font-bold text-gray-200 transition-all duration-300 hover:scale-105 md:mt-10 md:text-lg"
              >
                Show Detail
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MangaSlider;
