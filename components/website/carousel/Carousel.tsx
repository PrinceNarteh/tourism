import React from "react";
import styled from "styled-components";
import { Slider } from "./Slider";

// SwiperJS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const sliders = [
  {
    image: "/images/kakum.jpg",
    title: "Kakum Nation Park",
    description: "A canopy walk in Ghana",
  },
  {
    image: "/images/boti-falls.jpg",
    title: "Boti Water Falls",
    description: "Water falling from rocks.",
  },
];

export const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, EffectFade]}
      slidesPerView={1}
      speed={2000}
      navigation
      autoplay={{ delay: 5000 }}
      effect="fade"
    >
      {sliders.map((slider, idx) => (
        <SwiperSlide key={idx}>
          <Slider
            image={slider.image}
            title={slider.title}
            description={slider.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
