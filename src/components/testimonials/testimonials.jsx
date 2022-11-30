import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

import "./testimonials.css";
import "swiper/css";
import "swiper/css/navigation";

import Feedback from "../atoms/feedback/feedback.jsx";
import { reviews } from "./data";


const Testimonials = () => {
  const pagination = {
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="testimonials__container">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          1600: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        autoplay
        centeredSlides
        loop={true}
        pagination={pagination}
        modules={[FreeMode, Pagination]}
        className="swiper"
      >
        {reviews.map(item => {
          return (
            <SwiperSlide>
              <Feedback
                id={item.id}
                text={item.text}
                name={item.name}
              />
            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  );
};

export default Testimonials;
