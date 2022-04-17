import React from "react";
import { useAnimation } from "framer-motion";

// SwiperJS
import { Autoplay, Navigation, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Slider } from "./Slider";
import { sliders } from "./carouselData";

export const Carousel = () => {
  const h3Control = useAnimation();

  const creativeEffect = {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  };

  return (
    <Swiper
      modules={[Autoplay, Navigation, EffectCreative]}
      slidesPerView={1}
      speed={2000}
      navigation
      creativeEffect={creativeEffect}
      autoplay={{ delay: 5000 }}
      effect="creative"
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
