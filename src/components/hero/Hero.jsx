import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Lottie from "react-lottie-player";
import Teacher from "../lotties/teacher.json";
export default function Hero() {
	return (
		<>
			<Box display="flex" flexWrap="wrap">
				{/* Quadrado Esquerdo (Imagem) */}
				<Box
					flexBasis="49%"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Lottie
						loop
						animationData={Teacher}
						play
						style={{ width: "80%", height: "auto" }}
					/>
				</Box>

				{/* Quadrado Direito (H1 + Texto auxiliar + CTA) */}
				<Box
					flexBasis="49%"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					textAlign="center"
				>
					<Heading
						as="h1"
						size="2xl"
						margin="5"
						color="brandText.400"
					>
						Serviços Educacionais
					</Heading>
					<Text textAlign="center" padding="5" color="brandText.200">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Phasellus facilisis euismod erat quis feugiat.
						Suspendisse nec risus a mi fermentum varius eu eget
						neque. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Phasellus facilisis euismod erat quis
						feugiat. Suspendisse nec risus a mi fermentum varius eu
						eget neque.
					</Text>
					<Button
						margin="5"
						colorScheme="whatsapp"
						color="brandText.100"
						boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
					>
						Entre em contato!
					</Button>
				</Box>
			</Box>
		</>
	);
}
