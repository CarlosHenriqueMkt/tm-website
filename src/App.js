import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
/* import { ColorModeSwitcher } from './ColorModeSwitcher'; */
import Home from './pages/Home';

function App() {
  const theme = extendTheme({
    colors: {
      brandText: {
        100: '#EBEBEB',
        200: '#969C9E',
        300: '#9D9995',
        400: '#3D4D52',
        500: '#524B45',
      },

      brandBg: {
        100: '#FFFFFF',
        200: '#E6EFF2',
        300: '#595654',
        400: '#7C9CA6',
        500: '#A6998D',
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
