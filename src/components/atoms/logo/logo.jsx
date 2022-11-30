import React from 'react'
import image from "../../../images/logo_white.png"

const Logo = (props) => {
  return (
    <img
      src={image}
      alt="shoko"
      {...props}
    />
  )
}

export default Logo
