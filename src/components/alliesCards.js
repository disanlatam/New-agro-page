import React, { useRef, useState } from "react";
import styled from "styled-components";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ColorTab from "./colorTab";
import verdesian from "../assets/allies/verdesian-logo.png";

const SlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 20px;
  img {
    width: 100%;
    height: auto;
    max-height: 100px;
    max-width: 100px;
  }

  @media (max-width: 768px) {
    img {
      max-height: 200px;
      max-width: 200px;
    }
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.colors.fill};
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.primary};
  padding: 5% 2%;
  gap: 20px;
`;

const SwiperContainer = styled(Swiper)`
  width: 100%;

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) =>
      props.theme.colors
        .secondary}; /* Cambia el color de los botones de navegación */
    width: 20px; /* Ancho de los botones */
    height: 20px; /* Alto de los botones */
    border-radius: 50%; /* Bordes redondeados */
  }

  .swiper-pagination-bullet-active {
    background: ${(props) =>
      props.theme.colors.green}; /* Cambia el color del bullet activo */
  }

  .swiper-pagination {
    bottom: 0; /* Espacio desde el borde inferior */
    left: 50%; /* Posición horizontal en el centro */
    transform: translateX(-50%); /* Centra horizontalmente */
  }

  .swiper-wrapper {
    padding-bottom: 20px; /* Padding adicional si es necesario */
  }
`;
const alliesCards = () => {
  return (
    <Container>
      <ColorTab color="yellow" />
      <h2>Aliados</h2>
      <SwiperContainer
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        <SwiperSlide>
          <SlideContent>
            <img src={verdesian} alt="" />
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <img src={verdesian} alt="" />
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <img src={verdesian} alt="" />
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <img src={verdesian} alt="" />
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <img src={verdesian} alt="" />
          </SlideContent>
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent>
            <img src={verdesian} alt="" />
          </SlideContent>
        </SwiperSlide>
      </SwiperContainer>
    </Container>
  );
};

export default alliesCards;
