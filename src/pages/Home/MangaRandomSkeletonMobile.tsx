import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";

function MangaRandomSkeletonMobile() {
  return (
    <Swiper
      modules={[A11y, Autoplay, Navigation]}
      slidesPerView={"auto"}
      spaceBetween={16}
      navigation={false}
      autoplay={false}
    >
      {Array.from({ length: 5 }).map((_, idx) => (
        <SwiperSlide key={idx} className="!w-[240px]">
          <div className="h-72 w-full animate-pulse rounded bg-neutral-600/70" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MangaRandomSkeletonMobile;
