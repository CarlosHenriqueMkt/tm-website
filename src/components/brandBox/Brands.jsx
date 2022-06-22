import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export default function Brands() {
  return (
    <Box
      display="flex"
      marginTop="5"
      marginBottom="5"
      flexWrap="wrap"
      justifyContent="space-evenly"
    >
      <Image src="./Media/logo-chanel-512.png" width="150" height="150"></Image>
      <Image src="./Media/logo-chanel-512.png" width="150" height="150"></Image>
      <Image src="./Media/logo-chanel-512.png" width="150" height="150"></Image>
      <Image src="./Media/logo-chanel-512.png" width="150" height="150"></Image>
      <Image src="./Media/logo-chanel-512.png" width="150" height="150"></Image>
    </Box>
  );
}
