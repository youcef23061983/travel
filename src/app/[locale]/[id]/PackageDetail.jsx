"use client";
import { Pagination } from "swiper/modules";

import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import "swiper/css";
import "./detail.css";
import AnimatedText from "@/components/AnimatedText";
import AnimatedTextArabic from "@/components/AnimatedTextArabic";
import Word from "@/components/Word";

export default function PackageDetail({ locale, pack }) {
  const t = useTranslations("HomePage");
  const AnimatedComponent = locale === "en" ? AnimatedText : AnimatedTextArabic;
  const daysimages = pack ? pack?.daysImages : [];

  return (
    <>
      <main className="detailMain">
        <div className="container">
          <Swiper
            className="detailSwiper"
            modules={[Pagination]}
            grabCursor={true}
            initialSlide={2}
            centeredSlides={true}
            slidesPerView="auto"
            speed={800}
            slideToClickedSlide={true}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            breakpoints={{
              320: { spaceBetween: 20 },
              430: { spaceBetween: 30 },
              580: { spaceBetween: 30 },
              650: { spaceBetween: 50 },
            }}
          >
            {daysimages.map((im) => {
              const ii = im.slice(-5, -4);

              return (
                <SwiperSlide
                  className="swiper-slide"
                  style={{
                    background: `url(${im}) no-repeat center / cover`,
                  }}
                >
                  <div className="slide-content">
                    <div className="title">
                      <AnimatedComponent
                        once
                        text={t(
                          `packages.package${pack.id}.packagePlan.day${ii}.day${ii}`
                        )}
                        el="h2"
                        className="text-center"
                      />
                    </div>
                    <div className="content">
                      <div className="score">{pack.review}</div>
                      <div className="text">
                        <Word
                          paragraph={t(
                            `packages.package${pack.id}.packagePlan.day${ii}.description${ii}`
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </main>
    </>
  );
}
