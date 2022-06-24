import { Box, Link } from '@chakra-ui/react';
import './style.css';

export default function MenuLinks() {
  return (
    <>
      <Box>
        <Link className="navLink" href="#home">
          Home
        </Link>
      </Box>
      <Box marginTop={{ base: '10px', md: '0' }}>
        <Link className="navLink" href="#sobre">
          Thais Martins
        </Link>
      </Box>
      <Box marginTop={{ base: '10px', md: '0' }}>
        <Link className="navLink" href="#planos">
          Planos
        </Link>
      </Box>
      <Box marginTop={{ base: '10px', md: '0' }}>
        <Link className="navLink" href="#contato">
          Contato
        </Link>
      </Box>
    </>
  );
}
