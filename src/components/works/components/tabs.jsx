import { Flex, TabList, Tabs, TabPanel, TabPanels, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion"
import React from "react";
import ProjectItem from "../ProjectItem.jsx"
import ComingSoon from "../components/coming-soon";
import CustomTab from "../tabs-motion";
import { website, mobile } from "../data"


const WorksTabs = () => {
  return (
    <Flex
      maxW="1210px"
      px={2}
      direction={{ base: 'column', md: 'row' }}
      textAlign="center"
      flexWrap='wrap'
      color="black"
      gap={{ base: "4", lg: "10" }}
      alignItems="center"
      justifyContent="center"
    >
      <Tabs
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        variant="unstyled"
        display="flex"
        isLazy
        size="sm"
        mt="4"
      >
        <TabList
          flexWrap="wrap"
          gap={{ base: "4", sm: "6" }}
        >
          <CustomTab>
            Website
          </CustomTab>
          <CustomTab>
            Design
          </CustomTab>
          <CustomTab>
            Mobile
          </CustomTab>
          <CustomTab isDisabled>
            <Tooltip hasArrow label='Coming soon' bg='blue.600' color="white">
              Desktop
            </Tooltip>
          </CustomTab>
          <CustomTab isDisabled>
            <Tooltip hasArrow label='Coming soon' bg='blue.600' color="white">
              3D
            </Tooltip>
          </CustomTab>

        </TabList>

        <TabPanels>
          <TabPanel>
            {website.map(site => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  <ProjectItem
                    title={site.title}
                    info={site.info}
                    key={site.id}
                    src={site.github}
                    image={site.image}
                  >
                    {/* TODO: Parse array of icons */}
                  </ProjectItem>
                </motion.div>
              )
            })}
          </TabPanel>

          <TabPanel>
            <ComingSoon />
          </TabPanel>

          <TabPanel>
            {mobile.map(item => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  <ProjectItem
                    title={item.title}
                    info={item.info}
                    key={item.id}
                    src={item.github}
                    image={item.image}
                  >
                  </ProjectItem>
                </motion.div>
              )
            })}
          </TabPanel>
          <TabPanel>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              <ComingSoon />
            </motion.div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default WorksTabs

