import React from "react";
import { Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"

import "./card.css";

import {
  FaGithubSquare,
  FaTelegram,
  FaYoutube,
  FaBehanceSquare,
} from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl"
import { IconContext } from "react-icons";

const cardAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: custom => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}


const Card = (props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 1, once: true }}
      variants={cardAnimation}
      className="card__container"
    >
      <div className="card">
        <div className="card-image"> <img src={props.image} alt="cat" />
        </div>

        <ul className="social-icons">

          {props.github ? (
            <li className="link">
              <Link target="_blank" href={props.github}>
                <IconContext.Provider
                  value={{
                    className: "icons",
                    size: 35,
                    alignItems: "center",
                  }}
                >
                  <div className="github">
                    <FaGithubSquare />
                  </div>
                </IconContext.Provider>
              </Link>
            </li>
          ) : null}

          {props.telegram ? (
            <li className="link">
              <Link target="_blank"
                href={props.telegram}>
                <IconContext.Provider
                  value={{
                    className: "icons",
                    size: 35,
                    alignItems: "center",
                  }}
                >
                  <div className="telegram">
                    <FaTelegram />
                  </div>
                </IconContext.Provider>
              </Link>
            </li>
          ) : null}

          {props.youtube ? (
            <li className="link">
              <Link target="_blank" href={props.youtube}>
                <IconContext.Provider
                  value={{
                    className: "icons",
                    size: 35,
                    alignItems: "center",
                  }}
                >
                  <div className="youtube">
                    <FaYoutube />
                  </div>
                </IconContext.Provider>
              </Link>
            </li>
          ) : null}

          {props.behance ? (
            <li className="link">
              <Link target="_blank" href={props.behance}>
                <IconContext.Provider
                  value={{
                    className: "icons",
                    size: 35,
                    alignItems: "center",
                  }}
                >
                  <div className="behance">
                    <FaBehanceSquare />
                  </div>
                </IconContext.Provider>
              </Link>
            </li>
          ) : null}

          {props.vk ? (
            <li className="link">
              <Link target="_blank" href={props.vk}>
                <IconContext.Provider
                  value={{
                    className: "icons",
                    size: 35,
                    alignItems: "center",
                  }}
                >
                  <div className="vk">
                    <SlSocialVkontakte />
                  </div>
                </IconContext.Provider>
              </Link>
            </li>
          ) : null}
        </ul>
        <div className="details">
          <Text fontWeight="bold" >{props.name}</Text>
          <span className="role-title">{props.job}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
