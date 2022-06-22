import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Contact() {
  const [input, setInput] = useState({});
  const [isClicked, setIsClicked] = useState({});

  const handleInputChange = (e, inputName) => {
    setInput({ ...input, [inputName]: e.target.value });
  };

  function handleInputClicked(inputName) {
    setIsClicked({ ...isClicked, [inputName]: true });
  }

  const isError = {
    name: isClicked?.name ? input?.name?.length < 3 : false,
    msg: isClicked?.msg ? input?.msg?.length < 10 : false,
    plan: isClicked?.plan ? input?.plan?.length < 3 : false,
  };

  const dynamicLink = `https://api.whatsapp.com/send?phone=+330749303048&text=Olá%2C vim pelo seu site e estou interessado no curso de química.%0AMe chamo ${
    input?.name
  }.${!!input?.msg ? `%0A%0A${encodeURI(input.msg)}%0A` : ''}${
    !!input?.plan
      ? `%0AGostaria de adquirir o plano referente a ${input?.plan}`
      : ''
  }`;

  function handleSendMsg() {
    if (input?.name?.length <= 3) return;
    window.open(dynamicLink, '_blank');
  }

  return (
    <Box minHeight="50vh" id="contato" margin="100px">
      <Box textAlign="center" padding="12px 0" marginBottom="32px">
        <Text as="h2" textAlign="center" fontSize="3xl">
          Fale comigo
        </Text>
        <Text as="p" margin="8px 0 16px" textAlign="center">
          Se preferir entrar em contato via email ou telefone:
          <br />
          <Link color="brand.400" href="mailto:contato@gomesquimica.com.br">
            contato@gomesquimica.com.br
          </Link>
          <br />
          <Link href="https://api.whatsapp.com/send?phone=+330749303048&text=Olá%2C vim pelo seu site e estou interessado em adquirir um plano">
            + 33 07 49 30 30 48
          </Link>
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="0 12px"
      >
        <Box width="500px">
          <FormControl isInvalid={isError?.name} isRequired>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input
              id="name"
              type="text"
              value={input?.name || ''}
              onChange={e => handleInputChange(e, 'name')}
              onClick={() => handleInputClicked('name')}
              placeholder="Digite seu nome"
            />
            {isError && (
              <FormErrorMessage>Nome é obrigatório.</FormErrorMessage>
            )}
          </FormControl>
          <FormControl margin="12px 0" isInvalid={isError?.msg}>
            <FormLabel htmlFor="msg">Mensagem</FormLabel>
            <Textarea
              id="msg"
              value={input?.msg}
              onChange={e => handleInputChange(e, 'msg')}
              placeholder="Coloque aqui sua mensagem"
              size="sm"
            />
          </FormControl>
          <FormControl isInvalid={isError?.plan}>
            <FormLabel htmlFor="plan">Plano</FormLabel>
            <Select id="plan" placeholder="Selecione o plano de interesse">
              <option value="ingles">Aulas de Inglês</option>
              <option value="espanhol">Aulas de Espanhol</option>
              <option value="portugues">
                Aulas de Português para estrangeiros
              </option>
              <option value="traducao">Tradução não-juramentada</option>
              <option value="interpretacao">
                Interpretação de conferências e reuniões
              </option>
              <option value="escrita">Escrita Acadêmica</option>
              <option value="treinamentos">
                Treinamentos metodológicos para professores
              </option>
            </Select>
          </FormControl>
          <Box display="flex" justifyContent="center" marginTop="24px">
            <Button
              width="100px"
              color="brandText.100"
              colorScheme="whatsapp"
              onClick={handleSendMsg}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
