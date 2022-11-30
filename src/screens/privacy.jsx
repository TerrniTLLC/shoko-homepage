import { ChakraProvider } from "@chakra-ui/react"
import React from 'react'
import Section from '../components/atoms/section/section';
import { NavBar } from '../components/atoms/navbar/navbar';
import Layout from '../components/atoms/layout/layout';
import PrivacyTabs from "./components/tabs";


const Privacy = () => {
  return (
    <ChakraProvider>
      <Section>
        <NavBar />
        <Layout>
          <PrivacyTabs />
        </Layout>
      </Section>
    </ChakraProvider >
  )
}

export default Privacy

