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
      name: "Mohamed",
      profession: "Photographer",
      description:
        "Exploring Egypt through my lens was a dream come true. The grandeur of the pyramids, the serenity of the Nile, and the stories etched in ancient temples left me inspired. Egypt's beauty is truly timeless.",
      color: "blue",
      image: "/testimonials/egyptTourist.jpg",
    },
    {
      id: "testimonial3",
      name: "Nadia",
      profession: "Travel Blogger",
      description:
        "The Emirates offered me a blend of modern luxury and traditional charm. Walking through the bustling souks and marveling at the architectural wonders like the Burj Khalifa were experiences I'll cherish forever.",
      color: "pink",
      image: "/testimonials/emiratesTourist.jpg",
    },
    {
      id: "testimonial4",
      name: "Hamza",
      profession: "Historian",
      description:
        "Visiting pilgrimage sites was a deeply spiritual journey. The sense of history and devotion I felt in these sacred places left a profound impact on me, reminding me of the power of faith and unity.",
      color: "green",
      image: "/testimonials/hadjTourist.jpg",
    },
    {
      id: "testimonial5",
      name: "Houda",
      profession: "Cultural Enthusiast",
      description:
        "Indonesia captivated me with its breathtaking landscapes and vibrant traditions. From the serene rice terraces of Bali to the lively markets of Jakarta, every moment was a celebration of life and culture.",
      color: "orange",
      image: "/testimonials/indonesia.jpg",
    },
    {
      id: "testimonial6",
      name: "Karima",
      profession: "Food Critic",
      description:
        "Iran's culinary scene was a revelation. The intricate flavors of saffron-infused dishes and the hospitality of the locals made my food journey an extraordinary experience.",
      color: "red",
      image: "/testimonials/iran.jpg",
    },
    {
      id: "testimonial7",
      name: "Omar",
      profession: "Architect",
      description:
        "Istanbul is a city where history and modernity collide beautifully. Walking through the Hagia Sophia and the Blue Mosque was like stepping into a masterpiece of architectural genius.",
      color: "teal",
      image: "/testimonials/istanbulTourist.jpg",
    },
    {
      id: "testimonial8",
      name: "Anas",
      profession: "Nature Lover",
      description:
        "Malaysia's natural beauty is unparalleled. Exploring the rainforests and witnessing the vibrant wildlife was a humbling experience that reminded me of nature's wonders.",
      color: "yellow",
      image: "/testimonials/malaysia.jpg",
    },
    {
      id: "testimonial9",
      name: "Mourad",
      profession: "Artisan",
      description:
        "Morocco's colorful souks and intricate artistry left me in awe. The energy of Marrakech and the serenity of the Atlas Mountains offered a perfect blend of adventure and peace.",
      color: "cyan",
      image: "/testimonials/moroccoTourist.jpg",
    },
    {
      id: "testimonial10",
      name: "Khaled",
      profession: "Marine Biologist",
      description:
        "Muscat's coastline is a treasure trove of marine life. Snorkeling in its crystal-clear waters and studying the vibrant coral reefs was an experience I'll always treasure.",
      color: "lime",
      image: "/testimonials/muscat.jpg",
    },
    {
      id: "testimonial11",
      name: "Said",
      profession: "Pilgrim",
      description:
        "Performing Umrah was a life-changing experience. The peace and spirituality I felt in these sacred places gave me a new perspective on life and faith.",
      color: "gold",
      image: "/testimonials/oumraTourist.jpg",
    },
    {
      id: "testimonial12",
      name: "Reda",
      profession: "Adventurer",
      description:
        "Petra's ancient ruins were like stepping back in time. Exploring its carved rose-red city and learning about its history was an adventure I'll never forget.",
      color: "brown",
      image: "/testimonials/petraTourist.jpg",
    },
    {
      id: "testimonial13",
      name: "Catherine",
      profession: "Luxury Traveler",
      description:
        "Qatar offered me a taste of luxury like no other. From staying in world-class resorts to experiencing the vibrant culture of Doha, every moment was pure indulgence.",
      color: "silver",
      image: "/testimonials/qatarTourist.jpg",
    },
    {
      id: "testimonial14",
      name: "John",
      profession: "Wildlife Photographer",
      description:
        "Saudi Arabia's deserts are a photographer's paradise. The golden dunes, unique wildlife, and breathtaking sunsets provided endless opportunities to capture nature's raw beauty.",
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
