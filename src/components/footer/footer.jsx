import { Box, Link, Text } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './style.css';

export default function Footer() {
  return (
    <footer>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop="25px"
      >
        <Box className="socialLinks">
          <Link href="https://www.facebook.com/ThayMart" target="_blank">
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.instagram.com/thaisinhamartins/"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link href="#" target="_blank">
            <FaLinkedinIn />
          </Link>
        </Box>
        <Box>
          <Box textAlign="center" padding="12px 0">
            <Text color="brandText.200">
              {new Date().getFullYear()} © Todos os direitos reservados para
              Thais Martins.
            </Text>
          </Box>
        </Box>
      </Box>
    </footer>
  );
}
