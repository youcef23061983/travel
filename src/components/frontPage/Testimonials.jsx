"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

const Testimonials = () => {
  const slidesData = [
    {
      title: "aa",
      desctiption: "aa",
      color: "purple",
      image: "/algeria/day1.jpg",
    },
    {
      title: "bb",
      desctiption: "bb",
      color: "green",
      image: "/algeria/day2.jpg",
    },
    {
      title: "cc",
      desctiption: "cc",
      color: "orange",
      image: "/algeria/day3.jpg",
    },
    {
      title: "ee",
      desctiption: "ee",
      color: "pink",
      image: "/algeria/day4.jpg",
    },
    // {
    //   title: "ff",
    //   desctiption: "ff",
    //   color: "grey",
    //   image: "/algeria/day5.jpg",
    // },
  ];
  return (
    // <div className="testimonial">
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
    >
      {slidesData.map((slide, i) => {
        return (
          <SwiperSlide key={i}>
            {({ isActive }) => {
              return (
                <div className="slide-container">
                  <div className="info">
                    <h1 data-color={slide.color}>{slide.title}</h1>
                    <p>{slide.desctiption}</p>
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
    // </div>
  );
};

export default Testimonials;
