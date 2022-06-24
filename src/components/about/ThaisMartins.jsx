import { Box, Button, Heading, Text } from '@chakra-ui/react';
import Lottie from 'react-lottie-player';
import Thais from '../lotties/Thais.json';
import React from 'react';

export default function ThaisMartins() {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      marginTop="100px"
      id="sobre"
    >
      <Box
        flexBasis="60%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Heading marginBottom="15px" color="brandText.400">
          Thais Martins
        </Heading>
        <Text color="brandText.200" margin="5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          facilisis euismod erat quis feugiat. Suspendisse nec risus ami
          fermentum varius eu eget neque. Aliquam non varius nulla, ut auctor
          nisl. Sed placerat tellus magna, sed sodales odio mollis a. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravidatellus
          odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus facilisis euismod erat quis feugiat. Suspendisse nec risus
          ami fermentum varius eu eget neque. Aliquam non varius nulla, ut
          auctor nisl. Sed placerat tellus magna, sed sodales odio mollis a.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          gravidatellus odio.
        </Text>
        <Button
          margin="5"
          colorScheme="whatsapp"
          color="brandText.100"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        >
          Currículo completo!
        </Button>
      </Box>
      <Box
        flexBasis="30%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Lottie loop animationData={Thais} play style={{ width: '60%' }} />
      </Box>
    </Box>
  );
}
