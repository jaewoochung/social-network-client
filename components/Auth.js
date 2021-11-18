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

  const [isSignup, setIsSignup] = useState(true)
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
        
        cookies.set('token', user.token)
        cookies.set('username', user.username)
        cookies.set('name', user.name)

        window.location.reload()
      } catch (exception) {
        console.log(exception)
      }

    } else {
      // verify passwords match
      if (password !== verifyPassword) {
        toast({
          description: "passwords do not match! - please retry",
          status: "error",
          isClosable: true
        })
      } else {
        const account = {
          username: user,
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
        setUser('')
        setName('')
      }
    }
  }

  const Test = ({ u }) => {
    return (
      <div>
        {u.name}
      </div>
    )
  }
  
  return (
    <Container>
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
              <Input bgColor="white" type="text" onChange={handleNameChange} />
            </div>
          )}
          
          <FormLabel>Username</FormLabel>
          <Input bgColor="white" type="text" onChange={handleUserChange} />
          
          <FormLabel>Password</FormLabel>
          <Input bgColor="white" type="password" onChange={handlePasswordChange} />

          {isSignup && (
            <div>
              <FormLabel>Verify Password</FormLabel>
              <Input bgColor="white" type="password" onChange={handleVerifyChange} />
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
