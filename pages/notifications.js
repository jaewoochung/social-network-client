import React, { useEffect, useState } from 'react'
import {
  Heading,
  Text,
  Container
} from '@chakra-ui/react'
import userService from '../services/users'
import Cookies from 'universal-cookie'
import FriendRequest from '../components/FriendRequest'
import Index from './index'

const cookies = new Cookies()

const authToken = cookies.get('token')

const Notifications = () => {
  const [curUser, setCurUser] = useState([])  

  useEffect(() => {
    if (authToken) {
      userService
        .getUser(authToken)
        .then(init => setCurUser(init))
    }
  }, [])

  if (!authToken) {
    return (
      <Index />
    )
  }
  
  if (curUser.friendRequests) {
    return (
      <Container>
        <Heading>
          Notifications
        </Heading>
        {
          curUser.friendRequests.map(req => <FriendRequest request={req} />)
        }
      </Container>
    )
  } else {
    return (
      <Container>
        <Heading>
          Notifications
        </Heading>
        <Text>Notfications are loading</Text>
      </Container>
    )
  }

  
}
/*
   curUser.friendRequests.map(req => <FriendRequest request={req} />)

   curUser
   ? curUser.friendRequests.map(req => <FriendRequest request={req} />)
   : Loading
 */
export default Notifications
