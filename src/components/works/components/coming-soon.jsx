import { Image, Text, VStack } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import JabCat from "../../../images/coming-soon.png"
import Layout from '../../atoms/layout/layout';

export default function ComingSoon() {
  return (
    <Layout>
      <VStack maxW="100%" py={10} px={6}>
        <InfoIcon boxSize={'50px'} color={'blue.600'} />
        <Text
          as="h2"
          mt={6}
          mb={2}
          bgGradient='linear(to-l, #7083CF, #5F1DC2)'
          bgClip='text'
          fontSize='2xl'
          fontWeight='extrabold'
        >
          Coders at Work
        </Text>

        <Text size="xl" mb={2}>
          - Coming Soon -
        </Text>
        <Image
          h={150}
          src={JabCat}
          alt="working cat"
        />
      </VStack>
    </Layout>
  );
}
