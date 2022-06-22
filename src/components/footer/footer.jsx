import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <footer>
      <Box textAlign="center" padding="12px 0">
        <Text color="brandText.200">
          {new Date().getFullYear()} © Todos os direitos reservados para Thais
          Martins.
        </Text>
      </Box>
    </footer>
  );
}
