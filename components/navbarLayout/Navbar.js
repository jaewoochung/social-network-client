import { React, useState } from 'react'

import Logo from './logo'
import MenuLinks from './menuLinks'
import MenuToggle from './menuToggle'
import NavbarContainer from './navbarContainer'
import { Text, Avatar, Flex } from '@chakra-ui/react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const authToken = cookies.get('token')

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  if (authToken) {
    return (
      <NavbarContainer {...props}>
        <Logo />
        <Text fontWeight="bold">{cookies.get('name')}</Text>
        <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuLinks isOpen={isOpen} />
      </NavbarContainer>
    )
  }
  
  return (
    <NavbarContainer {...props}>
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavbarContainer>
  )
}

export default Navbar
