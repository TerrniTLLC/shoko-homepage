import { Box, Button, Text } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons"
import { useState, useEffect } from "react";

const GoToButton = ({ displayAfter, target }) => {
  const [showButton, setShowButton] = useState(false);
  const handleShowButton = () => {
    if (!showButton && window.scrollY > displayAfter) {
      setShowButton(true);
      return;
    }
    if (!showButton && window.scrollY <= displayAfter) {
      setShowButton(false);
      return;
    }
  };
  window.addEventListener("scroll", handleShowButton);

  useEffect(() => {
    return window.removeEventListener("scroll", handleShowButton);
  });

  const scrollToRef = (target) => {
    window.scrollTo({
      top: target.current.offsetTop,
      behavior: "smooth"
    });
  };

  return (
    <Button display="flex" flexDir="column" variant="unstyled" onClick={() => scrollToRef(target)}>
      <ArrowUpIcon w={5} h={5} />
      <Text fontSize="xs">Top</Text>

    </Button>

  )
};
export default GoToButton;
