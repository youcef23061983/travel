"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  EffectCube,
  Controller,
  Mousewheel,
  Autoplay,
} from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/controller";
import "./style.css";
import "swiper/css";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import AnimatedText from "@/components/AnimatedText";
import AnimatedTextArabic from "@/components/AnimatedTextArabic";
import Word from "@/components/Word";

const Top = ({ PackagesData }) => {
  const [textSlider, setTextSlider] = useState(null);
  const [cubeSlider, setCubeSlider] = useState(null);
  const locale = useLocale();
  const t = useTranslations("HomePage");

  const AnimatedComponent = locale === "en" ? AnimatedText : AnimatedTextArabic;

  return (
    <div className="mt-40 mb-40">
      <AnimatedComponent
        once
        text={t("topHeader")}
        el="h2"
        className="text-center mt-[40px] mb-20"
      />{" "}
      <section>
        <Swiper
          className="text-slider"
          modules={[EffectFade, Controller, Mousewheel, Autoplay]}
          onSwiper={setTextSlider}
          controller={{ control: cubeSlider }}
          effect="fade"
          loop
          speed={800}
          mousewheel
          autoplay={{ delay: 4500, pauseOnMouseEnter: true }}
        >
          {PackagesData?.sort((a, b) => b.expertJudgement - a.expertJudgement)
            .slice(0, 4)
            .map((pack) => {
              const country = t(`packages.${pack.key}.country`);
              const city = t(`packages.${pack.key}.city`);
              const description = t(`packages.${pack.key}.description`);
              return (
                <SwiperSlide key={pack.id}>
                  <AnimatedComponent
                    once
                    text={country}
                    el="h2"
                    className="text-center mt-[40px]"
                  />
                  <AnimatedComponent
                    once
                    text={city}
                    el="h2"
                    className="text-center mt-[40px]"
                  />{" "}
                  <Word paragraph={description} />
                  <Link href={`/top/${pack.id}`} className="slidelink">
                    {t("discover")}
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
        <Swiper
          className="cube-slider"
          modules={[EffectCube, Controller, Mousewheel]}
          onSwiper={setCubeSlider}
          controller={{ control: textSlider }}
          effect="cube"
          grabCursor
          loop
          speed={800}
          mousewheel
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 100,
            shadowScale: 0.94,
          }}
          breakpoints={{
            300: {
              cubeEffect: {
                shadowOffset: 60,
              },
            },
            600: {
              cubeEffect: {
                shadowOffset: 100,
              },
            },
          }}
        >
          {PackagesData.sort((a, b) => b.expertJudgement - a.expertJudgement)
            .slice(0, 4)
            .map((pack) => {
              return (
                <SwiperSlide>
                  <img src={pack.packageimage} alt="" />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </section>
    </div>
  );
};

export default Top;
