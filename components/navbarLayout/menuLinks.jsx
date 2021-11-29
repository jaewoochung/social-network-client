import MenuItem from './menuItem'
import {
  Stack,
  Box,
  Button
} from '@chakra-ui/react'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const MenuLinks = ({ isOpen }) => {

  const logout = () => {
    cookies.remove('token')
    cookies.remove('username')
    cookies.remove('name')
    window.location.reload()
  }
  
  return (
    <Box
      display={{ base: isOpen ? 'block' : "none", md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/notifications">Notifications</MenuItem>
        <MenuItem to="/people">Users</MenuItem>
        <Button onClick={logout} size="sm" color="#1E2530">Log out</Button>
      </Stack>
    </Box>
  )
}

export default MenuLinks
