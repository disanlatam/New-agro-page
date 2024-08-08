import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import map from "../assets/map.png";
import patent from "../assets/Patentkali-8.png";
import fylloton from "../assets/fylloton.png";

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  background-color: #fff; /* Cambia el color según lo que necesites */
`;

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect="fade"
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
    >
      <SwiperSlide>
        <SlideImage
          src={map}
          alt="Image 1"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage
          src={patent}
          alt="Image 2"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage
          src={fylloton}
          alt="Image 3"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
