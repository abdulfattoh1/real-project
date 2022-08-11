import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import HeaderSwiper from "./HeaderSwiper";

function Header() {
  const slides = [];

  for (let i = 0; i < 3; i++) {
    slides.push(
      <SwiperSlide key={`${i}`}>
        <HeaderSwiper />
      </SwiperSlide>
    );
  }

  return (
    <React.Fragment>
      <header className="header">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides}
        </Swiper>
      </header>
    </React.Fragment>
  );
}

export default Header;
