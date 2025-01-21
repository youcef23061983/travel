// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   EffectFade,
//   EffectCube,
//   Controller,
//   Mousewheel,
//   Autoplay,
// } from "swiper/modules";
// import "swiper/css/effect-fade";
// import "swiper/css/effect-cube";
// import "swiper/css/controller";
// import "./style.css";

// import "swiper/css";
// import { useState } from "react";
// const TopPackageSlider = () => {
//   const [textSlider, setTextSlider] = useState(null);
//   const [cubeSlider, setCubeSlider] = useState(null);
//   return (
//     <section>
//       <Swiper
//         className="text-slider"
//         modules={[EffectFade, Controller, Mousewheel, Autoplay]}
//         onSwiper={setTextSlider}
//         controller={{ control: cubeSlider }}
//         effect="fade"
//         loop
//         speed={800}
//         mousewheel
//         autoplay={{ delay: 4500, pauseOnMouseEnter: true }}
//       >
//         <SwiperSlide>
//           <h2>dgrg</h2>
//           <p>
//             Embark on an enchanting journey through Morocco, where vibrant
//             culture, breathtaking landscapes, and timeless traditions come
//             together to create an unforgettable experience.
//           </p>
//         </SwiperSlide>
//         <SwiperSlide>
//           <h2>etea</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
//             aspernatur asperiores consequatur laborum illum voluptatum! Aliquam,
//             reiciendis ullam nihil quaerat nisi dolores voluptatem reprehenderit
//             ea officia tempore labore nemo impedit.
//           </p>
//         </SwiperSlide>
//         <SwiperSlide>
//           <h2>ll</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
//             sapiente, cum, rem eos sed modi rerum cupiditate aperiam aut
//             consectetur minima ipsa nemo molestiae esse fugit odit. Natus, eos
//             qui!
//           </p>
//         </SwiperSlide>
//         <SwiperSlide>
//           <h2>aa</h2>
//           <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//             Perferendis recusandae quae architecto mollitia, aspernatur
//             consectetur illo sunt. Dolor veniam id et rerum praesentium
//             voluptate. Nesciunt dolor odio asperiores quasi vero?
//           </p>
//         </SwiperSlide>
//         <SwiperSlide>
//           <h2>mm</h2>
//           <p>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
//             accusantium, et odio ad quaerat voluptatibus saepe facere blanditiis
//             nemo asperiores omnis maiores provident recusandae quia, iste
//             voluptatem eum sequi assumenda.
//           </p>
//         </SwiperSlide>
//       </Swiper>
//       <Swiper
//         className="cube-slider"
//         modules={[EffectCube, Controller, Mousewheel]}
//         onSwiper={setCubeSlider}
//         controller={{ control: textSlider }}
//         effect="cube"
//         grabCursor
//         loop
//         speed={800}
//         mousewheel
//         cubeEffect={{
//           shadow: true,
//           slideShadows: true,
//           shadowOffset: 100,
//           shadowScale: 0.94,
//         }}
//         breakpoints={{
//           300: {
//             cubeEffect: {
//               shadowOffset: 60,
//             },
//           },
//           600: {
//             cubeEffect: {
//               shadowOffset: 100,
//             },
//           },
//         }}
//       >
//         <SwiperSlide>
//           <img src="/algeria/day1.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/algeria/day2.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/algeria/day3.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/algeria/day4.jpg" alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="/algeria/day5.jpg" alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// };

// export default TopPackageSlider;

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
import AnimatedText from "../AnimatedText";
import AnimatedTextArabic from "../AnimatedTextArabic";
import Word from "@/components/Word";
import { Link } from "@/i18n/routing";
const TopPackageSlider = ({ PackagesData }) => {
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
                  <Link href={`${locale}/${pack.id}`} className="slidelink">
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

export default TopPackageSlider;
