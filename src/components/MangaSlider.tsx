import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";

import { FaHeart, FaStar } from "react-icons/fa";

import { useTop5Manga } from "../hooks/useTop5Manga";

import { Link } from "react-router";

function MangaSlider() {
  const { isLoading, top5Manga } = useTop5Manga();

  if (isLoading) return null;

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
      {top5Manga.map((manga) => (
        <SwiperSlide key={manga.mal_id}>
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-0 scale-100 bg-cover bg-center blur-sm brightness-50"
              style={{ backgroundImage: `url(${manga.images.webp.image_url})` }}
            />
            <div className="relative z-10 flex flex-col px-20 py-10">
              <div className="flex h-10 w-fit items-center rounded-sm bg-linear-to-r from-green-500 to-emerald-500 px-4">
                <h3 className="text-lg font-light text-white">
                  Ranked #{manga.rank} in Top Manga
                </h3>
              </div>
              <div className="mt-6">
                <h1 className="text-3xl font-bold text-white">{manga.title}</h1>
                <h2 className="text-xl font-light text-white">
                  ({manga.title_japanese})
                </h2>
              </div>
              <div className="mt-8 max-w-lg">
                <p className="line-clamp-3 text-lg text-gray-200">
                  {manga.synopsis}
                </p>
                <button className="text-lg font-bold text-green-400">
                  Read More
                </button>
              </div>
              <div className="mt-4 flex items-center space-x-1 text-lg font-light">
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
                to={`/detail/${manga.mal_id}`}
                className="mt-10 inline-block w-fit cursor-pointer rounded-sm bg-linear-to-r from-green-500 to-emerald-500 px-4 py-1 text-lg font-bold text-gray-200 transition-all duration-300 hover:scale-105"
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
