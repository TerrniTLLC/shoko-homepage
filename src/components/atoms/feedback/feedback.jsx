import React from "react";
import { Avatar } from "@chakra-ui/react";
import { useSwiperSlide } from "swiper/react";

import "./feedback.css";

const Feedback = (props) => {
  const swiperSlide = useSwiperSlide();

  return (
    <div
      className={swiperSlide.isActive ? "feedback__container" : "not-active"}
    >
      {/* TODO: Add custom avatars */}

      <div className="content__container">
        <h3 className="feedback__text">
          {props.text}
        </h3>
        <div className="profile__content">
          <Avatar mr={2} h={25} w={25} />
          <h3 className="profile__name">
            @{props.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
