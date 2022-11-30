import React from "react";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion"

import "./hero.css";


import Arrow from "../../images/icons/ArrowDown.svg";
import Logo from "../atoms/logo/logo";

const textAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}
const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="hero__wrapper"
    >
      <div class="parallax">
        <div class="parallax-content">
          <div className="hero__container">
            <Logo className="hero__logo" />
            <div className="hero__content">
              <motion.h1 custom={1} variants={textAnimation} >
                Shoko
              </motion.h1>
              <Text as={motion.p} fontSize={20} custom={2} variants={textAnimation}>App development, and other</Text>
            </div>
            <img src={Arrow} alt="arrow" className="hero__arrow" />
          </div>
        </div>
        <div class="mask"></div>
      </div>
    </motion.div>
  );
};

export default Hero;
