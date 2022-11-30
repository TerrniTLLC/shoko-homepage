import React, { useState } from 'react';

const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => { setIsReadMore(!isReadMore) };

  return (
    <>
      {isReadMore ? text.slice(0, 200) : text}
      {text.length > 150 &&
        <span style={{ color: "skyblue" }} onClick={toggleReadMore}>
          {isReadMore ? ' Show more' : ' Show less'}
        </span>
      }
    </>
  )
}

export default ReadMore;
