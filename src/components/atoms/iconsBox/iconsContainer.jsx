import React from "react";
import IconsBox from "./iconsBox";
import { IconContext } from "react-icons";
import { Box } from "@chakra-ui/react";

const IconsContainer = ({ children }) => {
  return (
    <Box display="flex">
      <IconContext.Provider
        value={{
          className: "global-class-name",
          size: 40,
          alignItems: "center",
        }}
      >
        <IconsBox>{children}</IconsBox>
      </IconContext.Provider>
    </Box>
  );
};
export default IconsContainer;
