import React, { useEffect, useState } from 'react'
import userService from '../services/users'
import {
  Container,
  Text,
  Box,
  Heading,
  useToast
} from '@chakra-ui/react'

import Friend from '../components/Friend'
import Cookies from 'universal-cookie'
import Auth from '../components/Auth'
import Index from './index'

import Router from 'next/router'
const cookies = new Cookies()

const authToken = cookies.get('token')

const People = () => {
  const [users, setUsers] = useState([])
  const [curUser, setCurUser] = useState([])
  
  const toast = useToast()
  
  useEffect(() => {
    if (authToken) {
      userService
      .getAll()
      .then(initialUsers => {
        setUsers(initialUsers)
      })
    }
    
  }, [])

  // Set the current user
  useEffect(() => {
    if (authToken) {
      userService
        .getUser(cookies.get('token'))
        .then(initUser => setCurUser(initUser))
    }
  }, [])

  useEffect(() => {
    if (authToken) {
      userService.setToken(authToken)
    }
  }, [])

  const addFriend = (friendID) => {
    userService.addFriend(friendID, cookies.get('token'))

    toast({
      description: "sent freind request",
      isClosable: true,
    })
  }

  if (!authToken) {
    return (
      <Index />
    )
  }
  
  return (
    <Container>
      <Heading>Find users and request new friends!</Heading>
      <Box>
        {
          users
            .filter(user => user.id != curUser.id && !curUser.friends.includes(user.id))
            .map(user =>
              <Friend friend={user} sendFriendRequest={addFriend} key={user.id} />
            )
        }
      </Box>
    </Container>
  )
}

export default People
