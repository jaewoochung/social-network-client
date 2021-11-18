import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbarLayout/Navbar'

const Main = ({ children, router }) => {
	return (
		<Box as="main" pb={1}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Social Network</title>
			</Head>

      <Navbar />

			<Container maxW="100%" marginX={0} paddingX={0} paddingY={10}>
				{children}
			</Container>
		</Box>
	)
}

export default Main
