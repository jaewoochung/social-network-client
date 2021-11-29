import React, { useState, useEffect } from 'react'
import {
  Container,
  FormControl,
  Text,
  Button,
  FormLabel,
  Input,
  NumberInputField,
  NumberInput,
  Box,
  useToast
} from '@chakra-ui/react'

import Cookies from 'universal-cookie'

import userService from '../services/users'
import loginService from '../services/login'
import postService from '../services/posts'

const cookies = new Cookies()

const Auth = (user) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')
  const [name, setName] = useState('')
  const [users, setUsers] = useState([])

  const [isSignup, setIsSignup] = useState(false)
  const toast = useToast()

  useEffect(() => {
    userService
      .getAll()
      .then(init => {
        setUsers(init)
      })
  }, [])

  const switchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup);
	}

  const handleUserChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleVerifyChange = (event) => {
    setVerifyPassword(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    if (!isSignup) {
      try {
        const user = await loginService.login({
          username, password
        })

        console.log(user)
        
        cookies.set('token', user.token)
        cookies.set('username', user.username)
        cookies.set('name', user.name)
        postService.setToken(user.token)

        window.location.reload()
      } catch (exception) {
        toast({
          description: "Wrong Credentials - try again",
          isClosable: true,
          status: 'error'
        })
        console.log(exception)
      }

    } else {
      if (password !== verifyPassword) {
        toast({
          description: "passwords do not match! - please retry",
          status: "error",
          isClosable: true
        })
      } else {
        const account = {
          username: username,
          name: name,
          password: password,
        }
        
        userService.create(account)
        
        toast({
          description: "Succesfully created account",
          isClosable: true
        })
        
        setPassword('')
        setVerifyPassword('')
        setUsername('')
        setName('')

        // Toggle switchmode to let new user sign in
        switchMode()
      }
    }
  }
  
  return (
    <Container maxW="65%">
      <Box>
        <Text
          fontWeight="bold"
          fontSize="20px"
          mb={5}
        >
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Text>
        <FormControl id="signup" isRequired>

          {isSignup && (
            <div>
              <FormLabel>Full Name</FormLabel>
              <Input bgColor="white" type="text" onChange={handleNameChange} value={name} />
            </div>
          )}
          
          <FormLabel>Username</FormLabel>
          <Input bgColor="white" type="text" onChange={handleUserChange} value={username} />
          
          <FormLabel>Password</FormLabel>
          <Input bgColor="white" type="password" onChange={handlePasswordChange} value={password} />

          {isSignup && (
            <div>
              <FormLabel>Verify Password</FormLabel>
              <Input bgColor="white" type="password" onChange={handleVerifyChange} value={verifyPassword} />
            </div>            
          )}
          
          <Button
            onClick={handleSubmit}
            mt={3}
            bgColor="#86da75"
            type="submit"
          >
            {isSignup ? 'Create Account' : 'Sign In'}
          </Button>

        </FormControl>

        <Box mt={5}>
					{isSignup ? "Already have an account? " : "Don't have an account? " }
					<span onClick={switchMode}>
            <Button size="xs">
              {isSignup ? 'Sign In' : 'Sign Up' }
            </Button>
					</span>
				</Box>

      </Box>
    </Container>
  )
}

export default Auth
