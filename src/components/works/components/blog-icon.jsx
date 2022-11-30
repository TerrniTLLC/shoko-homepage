import React from 'react';

import { IconContext } from 'react-icons';


const BlogIcon = (props) => {
  return (
    <IconContext.Provider
      value={{
        style: { height: 22, width: 22, color: "black" }
      }}>
      {props.children}
    </IconContext.Provider >
  )
}

export default BlogIcon
