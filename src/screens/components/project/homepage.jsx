import React from 'react'
import Caption from "../atoms/caption/caption.jsx"
import Paragraph from "../atoms/paragraph/paragraph.jsx"
import { Tag, Stack } from "@chakra-ui/react";
import { homepagePrivacy } from '../data/data';

const Homepage = () => {
  return (
    <Stack textAlign="start">
      {
        homepagePrivacy.map(item => {
          return (
            <>
              {item.id ? (
                <>
                  <Caption>
                    {item.caption ? <><Tag>{item.id}</Tag> {item.caption}</> : null}
                  </Caption>
                  <Paragraph key={item.id}>
                    {item.caption ? null : <><Tag>{item.id}</Tag>  {item.paragraph}</>}
                  </Paragraph>
                </>
              ) : (
                <>
                  <Caption>
                    {item.caption ? <><Tag>{item.id}</Tag> {item.caption}</> : null}
                  </Caption>
                  <Paragraph key={item.id}>
                    {item.caption ? null : <> {item.paragraph}</>}
                  </Paragraph>
                </>
              )}
            </>
          )
        })
      }
    </Stack >

  )
}

export default Homepage
