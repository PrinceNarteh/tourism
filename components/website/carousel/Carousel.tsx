import { useAnimation } from "framer-motion";
import React from "react";

// SwiperJS
import { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Slider } from "./Slider";

import BotiFalls from "assets/images/boti-falls.jpg";
import CapeCoastCastle from "assets/images/cape-coast-castle.jpg";
import Kakum from "assets/images/kakum.jpg";

const sliders = [
  {
    image: Kakum,
    title: "Kakum National Park",
    description:
      "The Kakum National Park is one of the top attraction sites for tourists who intend on seeing wildlife and nature in Ghana",
  },
  {
    image: BotiFalls,
    title: "Boti Water Falls",
    description:
      "Boti falls is a twin waterfall located at Boti in Yilo Krobo District in the Eastern Region of Ghana. These twin falls are referred to as female and male.",
  },
  {
    image: CapeCoastCastle,
    title: "Cape Coast Castle",
    description:
      'Cape Coast Castle is one of about forty "slave castles", or large commercial forts, built on the Gold Coast of West Africa by European traders.',
  },
];

export const Carousel = () => {
  const h3Control = useAnimation();

  return (
    <Swiper
      modules={[Autoplay, Navigation, EffectFade]}
      slidesPerView={1}
      speed={2000}
      navigation
      autoplay={{ delay: 5000 }}
    >
      {sliders.map((slider, idx) => (
        <SwiperSlide key={idx}>
          <Slider
            image={slider.image}
            title={slider.title}
            description={slider.description}
            controls={h3Control}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
