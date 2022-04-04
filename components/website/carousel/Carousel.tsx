import { useAnimation } from "framer-motion";
import React, { useState } from "react";

// SwiperJS
import {
  Autoplay,
  EffectFade,
  Navigation,
  EffectCube,
  EffectFlip,
  EffectCreative,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Slider } from "./Slider";
import { sliders } from "./carouselData";

const effects = ["fade", "creative", "flip", "slide"] as const;

export const Carousel = () => {
  const [effect, setEffect] = useState<
    "fade" | "creative" | "slide" | "flip" | "cube" | "coverflow" | "cards"
  >("creative");
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

  const handleSetEffect = () => {
    const randomInt = Math.floor(Math.random() * effects.length);
    const chosenEffect = effects[randomInt];
    console.log(chosenEffect);
    setEffect(chosenEffect);
  };

  if (effect === "fade") {
    return (
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        slidesPerView={1}
        speed={2000}
        navigation
        autoplay={{ delay: 5000 }}
        onSlideChange={() => handleSetEffect()}
        effect={`${effect}`}
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
  } else if (effect === "creative") {
    return (
      <Swiper
        modules={[Autoplay, Navigation, EffectCreative]}
        slidesPerView={1}
        speed={2000}
        navigation
        creativeEffect={creativeEffect}
        autoplay={{ delay: 5000 }}
        onSlideChange={() => handleSetEffect()}
        effect={`${effect}`}
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
  } else if (effect === "flip") {
    return (
      <Swiper
        modules={[Autoplay, Navigation, EffectFlip]}
        slidesPerView={1}
        speed={2000}
        navigation
        creativeEffect={creativeEffect}
        autoplay={{ delay: 5000 }}
        onSlideChange={() => handleSetEffect()}
        effect={`${effect}`}
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
  } else {
  }
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      slidesPerView={1}
      speed={2000}
      navigation
      autoplay={{ delay: 5000 }}
      onSlideChange={() => handleSetEffect()}
      effect={`${effect}`}
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
