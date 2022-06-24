import { Box, Heading, Icon, Text, Center } from '@chakra-ui/react';
import React from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import './style.css';

export default function Plans() {
  return (
    <Box className="boxContainer" id="planos">
      <Center>
        <Heading as="h2" margin="10">
          Planos disponíveis
        </Heading>
      </Center>
      <Box className="boxWrapper">
        <Box className="masterBox">
          <Box className="boxes">
            <Box className="boxesIcon">
              <Icon as={FaGlobeAmericas} />
            </Box>
            <Text className="boxesSubTitle">Curso de Inglês</Text>
            <Text className="boxesParagraph">
              Aulas do básico ao avançado para jovens e adultos de todas as
              idades
            </Text>
          </Box>
          <Box className="boxes">
            <Box className="boxesIcon">
              <Icon as={FaGlobeAmericas} />
            </Box>
            <Text className="boxesSubTitle">Curso de Espanhol</Text>
            <Text className="boxesParagraph">
              Aulas do básico ao avançado para jovens e adultos de todas as
              idades
            </Text>
          </Box>
          <Box className="boxes">
            <Box className="boxesIcon">
              <Icon as={FaGlobeAmericas} />
            </Box>
            <Text className="boxesSubTitle">
              Curso de Português para estrangeiros
            </Text>
            <Text className="boxesParagraph">
              Aulas do básico ao avançado para jovens e adultos de todas as
              idades
            </Text>
          </Box>
          <Box className="boxes">
            <Box className="boxesIcon">
              <Icon as={FaGlobeAmericas} />
            </Box>
            <Text className="boxesSubTitle">Tradução não-juramentada</Text>
            <Text className="boxesParagraph">
              Aulas do básico ao avançado para jovens e adultos de todas as
              idades
            </Text>
          </Box>
        </Box>

        <Box className="masterBox">
          <Box className="boxes">
            <Box className="boxesIcon">
              <Icon as={FaGlobeAmericas} />
            </Box>
            <Text className="boxesSubTitle">
              Interpretação de conferências e reuniões
            </Text>
            <Text className="boxesParagraph">
              Aulas do básico ao avançado para jovens e adultos de todas as
              idades
            </Text>
          </Box>
          <Box className="boxes">
            <Box className="boxesIcon">
              <Icon as={FaGlobeAmericas} />
            </Box>
            <Text className="boxesSubTitle">Escrita acadêmica</Text>
            <Text className="boxesParagraph">
              Aulas do básico ao avançado para jovens e adultos de todas as
              idades
            </Text>
          </Box>
          <Box className="boxes">
            <Box className="boxesIcon">
              <Icon as={FaGlobeAmericas} />
            </Box>
            <Text className="boxesSubTitle">
              Treinamentos metodológicos para professores
            </Text>
            <Text className="boxesParagraph">
              Aulas do básico ao avançado para jovens e adultos de todas as
              idades
            </Text>
          </Box>
          <Box className="boxes">
            <Box className="boxesIcon">
              <Icon as={FaGlobeAmericas} />
            </Box>
            <Text className="boxesSubTitle">Pacotes on-demand</Text>
            <Text className="boxesParagraph">
              Aulas do básico ao avançado para jovens e adultos de todas as
              idades
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
