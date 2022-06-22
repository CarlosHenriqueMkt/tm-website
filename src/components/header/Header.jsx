import React from 'react';
import { Box, Image, Link } from '@chakra-ui/react';

export default function header() {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Image
          src="./media/circle-tm-nobg.webp"
          width="60px"
          height="auto"
          marginBottom="1"
          marginLeft="5"
          marginTop="2"
        ></Image>
        <Box
          display="flex"
          alignItems="center"
          marginRight="10"
          gap="8"
          color="brandText.200"
        >
          <Link>Sobre mim</Link>
          <Link>Planos</Link>
          <Link>Depoimentos</Link>
          <Link>Contato</Link>
        </Box>
      </Box>
    </>
  );
}
