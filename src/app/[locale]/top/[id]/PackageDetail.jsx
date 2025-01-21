"use client";
import { Pagination } from "swiper/modules";

// import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import "swiper/css";
import "./detail.css";
// import Image from "next/image";

export default function PackageDetail({ locale, pack }) {
  // const t = useTranslations("HomePage");
  // const daysimages = pack ? pack?.daysImages : [];

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
            <SwiperSlide className="swiper-slide slide-1">
              <div className="title">
                <h1>the bear</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
                <div className="text">
                  <h2>the bear</h2>
                  <p>
                    culpa sequi blanditiis non error vel rerum numquam quis,
                    vitae cum? Doloribus itaque possimus repellat dolorem. Ipsa
                    excepturi voluptate voluptatem, obcaecati voluptas quod
                    dolores distinctio?
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide slide-2">
              <div className="title">
                <h1>wednesday</h1>
              </div>
              <div className="content">
                <div className="score">8.6</div>
                <div className="text">
                  <h2>wednesday</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus necessitatibus vero distinctio aliquam iusto
                    eos culpa sequi blanditiis non error vel rerum numquam quis,
                    vitae cum? Doloribus itaque possimus repellat dolorem. Ipsa
                    excepturi voluptate voluptatem, obcaecati voluptas quod
                    dolores distinctio?
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1 }}>supernatral</span>
                  <span style={{ "--i": 2 }}>comedy</span>
                  <span style={{ "--i": 2 }}>mystery</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide slide-3">
              <div className="title">
                <h1>serverance</h1>
              </div>
              <div className="content">
                <div className="score">8.7</div>
                <div className="text">
                  <h2>surverance</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus necessitatibus vero distinctio aliquam iusto
                    eos culpa sequi blanditiis non error vel rerum numquam quis,
                    vitae cum? Doloribus itaque possimus repellat dolorem. Ipsa
                    excepturi voluptate voluptatem, obcaecati voluptas quod
                    dolores distinctio?
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1 }}>thriller</span>
                  <span style={{ "--i": 2 }}>science fiction</span>
                  <span style={{ "--i": 2 }}>mystery</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide slide-4">
              <div className="title">
                <h1>games of thrones</h1>
              </div>
              <div className="content">
                <div className="score">9.7</div>
                <div className="text">
                  <h2>game of thrones</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatibus necessitatibus vero distinctio aliquam iusto
                    eos culpa sequi blanditiis non error vel rerum numquam quis,
                    vitae cum? Doloribus itaque possimus repellat dolorem. Ipsa
                    excepturi voluptate voluptatem, obcaecati voluptas quod
                    dolores distinctio?
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1 }}>fantacy</span>
                  <span style={{ "--i": 2 }}>science fiction</span>
                  <span style={{ "--i": 2 }}>adventure</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide slide-5">
              <div className="title">
                <h1>succeession</h1>
              </div>
              <div className="content">
                <div className="score">6.7</div>
                <div className="text">
                  <h2>succeession</h2>
                  <p>
                    hbsh ujfd isdjd , amet consectetur adipisicing elit.
                    Voluptatibus necessitatibus vero distinctio aliquam iusto
                    eos culpa sequi blanditiis non error vel rerum numquam quis,
                    vitae cum? Doloribus itaque possimus repellat dolorem. Ipsa
                    excepturi voluptate voluptatem, obcaecati voluptas quod
                    dolores distinctio?
                  </p>
                </div>
                <div className="genre">
                  <span style={{ "--i": 1 }}>drama</span>
                  <span style={{ "--i": 2 }}>satire</span>
                  <span style={{ "--i": 2 }}>adventure</span>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </main>
      {/* <div>
        <h2>{t(`packages.${pack.key}.city`)}</h2>
        <p>Price: {pack.price}</p>
        <p>reviews : {pack.review}</p>
        <p>Price: {pack.journeyDays}</p>
        {daysimages.map((im, i) => {
          return <Image key={i} width={40} height={40} src={im} alt="" />;
        })}
      </div> */}
    </>
  );
}
