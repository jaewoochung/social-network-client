import {
  Container,
  Text
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Auth from '../components/Auth'
import Home from '../components/Home'

import Cookies from 'universal-cookie'

const cookies = new Cookies()

const authToken = cookies.get('token')

const Page = () => {
  const [user, setUser] = useState(null)

  if (!authToken) return (
    <Container maxW="100%">
      <Auth />
    </Container>
  )
  
  return (
    <Container maxW="100%">
      <Home />
    </Container>
  )
}

export default Page
