import React from 'react'
import { Box, Flex, TabList, TabPanel, TabPanels, Tabs, Tooltip } from "@chakra-ui/react";
import CustomTab from '../../components/works/tabs-motion';
import AnimHeading from '../../components/atoms/anim-heading/AnimHeading';
import ComingSoon from '../../components/works/components/coming-soon';
import Homepage from "./project/homepage.jsx"
import Fores from './project/fores';


const PrivacyTabs = () => {

  return (
    <Flex
      pt={8}
      mt={10}
      direction={{ base: 'column', md: 'row' }}
      textAlign="center"
      flexWrap='wrap'
      gap={{ base: "4", lg: "10" }}
    >
      <Tabs
        variant="unstyled"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        w={{ base: "310px", sm: "768px" }}
        isLazy
        size="sm"
        mt="4"
      >
        <TabList
          flexWrap="wrap"
          gap={{ base: "3", sm: "6" }}
        >
          <CustomTab>
            Homepage
          </CustomTab>
          <CustomTab>
            Fores
          </CustomTab>
          <CustomTab isDisabled>
            <Tooltip hasArrow label='Coming soon' bg='blue.600' color="white">
              Coming Soon
            </Tooltip>
          </CustomTab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box mt={5}>
              <AnimHeading alignText="center" custom={2}>
                Политика в отношении обработки персональных данных
              </AnimHeading>
              <Homepage />
            </Box>
          </TabPanel>

          <TabPanel>
            <Box mt={5}>
              <AnimHeading alignText="center" custom={2}>
                Политика конфиденциальности для мобильного приложения "Fores"
              </AnimHeading>
              <Fores />
            </Box>
          </TabPanel>
          <TabPanel>
            <ComingSoon />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default PrivacyTabs
