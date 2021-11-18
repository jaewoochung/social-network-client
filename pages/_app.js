import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout/main.js'
import theme from '../lib/theme.js'
import '@fontsource/merriweather'

const App = ({ Component, pageProps, router }) => {  
 	return(
    <ChakraProvider theme={theme}>
 			<Layout router={router}>
 				<Component {...pageProps}  />
 			</Layout>
 		</ChakraProvider>
  )
}

export default App
