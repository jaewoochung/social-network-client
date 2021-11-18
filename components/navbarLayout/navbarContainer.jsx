import {
  Flex
} from '@chakra-ui/react'

const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w='100%'
      mb={8}
      p={5}
      bgColor="#1E2530"
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      { children }
    </Flex>
  )
}

export default NavbarContainer
