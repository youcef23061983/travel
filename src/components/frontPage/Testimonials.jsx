"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import { useLocale, useTranslations } from "next-intl";

const Testimonials = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage");

  const slidesData = [
    {
      id: "testimonial1",
      color: "purple",
      image: "/testimonials/algeriaTourist.jpg",
    },
    {
      id: "testimonial2",
      color: "blue",
      image: "/testimonials/egyptTourist.jpg",
    },
    {
      id: "testimonial3",
      color: "pink",
      image: "/testimonials/emiratesTourist.jpg",
    },
    {
      id: "testimonial4",
      color: "green",
      image: "/testimonials/hadjTourist.jpg",
    },
    {
      id: "testimonial5",
      color: "orange",
      image: "/testimonials/indonesia.jpg",
    },
    {
      id: "testimonial6",
      color: "red",
      image: "/testimonials/iran.jpg",
    },
    {
      id: "testimonial7",
      color: "teal",
      image: "/testimonials/istanbulTourist.jpg",
    },
    {
      id: "testimonial8",
      color: "yellow",
      image: "/testimonials/malaysia.jpg",
    },
    {
      id: "testimonial9",
      color: "cyan",
      image: "/testimonials/moroccoTourist.jpg",
    },
    {
      id: "testimonial10",
      color: "lime",
      image: "/testimonials/muscat.jpg",
    },
    {
      id: "testimonial11",
      color: "gold",
      image: "/testimonials/oumraTourist.jpg",
    },
    {
      id: "testimonial12",
      color: "brown",
      image: "/testimonials/petraTourist.jpg",
    },
    {
      id: "testimonial13",
      color: "silver",
      image: "/testimonials/qatarTourist.jpg",
    },
    {
      id: "testimonial14",
      color: "navy",
      image: "/testimonials/saudiTourist.jpg",
    },
  ];

  return (
    <Swiper
      modules={[Mousewheel, Pagination]}
      direction={"vertical"}
      speed={800}
      loop={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={{
        thresholdDelta: 50,
        sensitivity: 1,
      }}
      className="testimonialsSwiper"
    >
      {slidesData.map((slide) => {
        const name = t(`testimonials.${slide.id}.name`);
        const profession = t(`testimonials.${slide.id}.profession`);
        const description = t(`testimonials.${slide.id}.description`);

        return (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => {
              return (
                <div className="slide-container">
                  <div className="info">
                    <h1 data-color={slide.color}>{name}</h1>
                    <h1 data-color={slide.color}>{profession}</h1>
                    <p>{description}</p>
                  </div>
                  <div className="item">
                    <div
                      className={`circle ${isActive ? "animated-circle" : ""}`}
                      data-item={slide.color}
                    ></div>
                    <img src={slide.image} alt={slide.title} />
                  </div>
                </div>
              );
            }}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonials;
