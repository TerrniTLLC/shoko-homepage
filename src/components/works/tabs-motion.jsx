import React from "react"
import { motion } from "framer-motion"
import { Box, Button, useTab } from "@chakra-ui/react"

const CustomTab = React.forwardRef((props, ref) => {
  const tabProps = useTab({ ...props, ref })
  const isSelected = !!tabProps['aria-selected']

  return (
    <Button
      variant="unstyled"
      style={{
        position: "relative",
      }}
      {...tabProps}
    >
      <Box fontSize="18px" >
        <motion.div
        >
          {tabProps.children}
        </motion.div>
      </Box>
      {isSelected ? (
        <motion.div
          style={{
            position: "absolute",
            bottom: "-1px",
            left: "0px",
            right: 0,
            height: "4px",
            background: "#5686F5",
            borderRadius: "8px",
            zIndex: 0
          }}
          layoutId="underline"
        />
      ) : null}
    </Button>
  )
})


export default CustomTab

