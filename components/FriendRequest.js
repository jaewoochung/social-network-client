import React, { useEffect, useState} from 'react'
import {
  Text,
  Button,
  Avatar,
  Wrap,
  Flex,
  useToast
} from '@chakra-ui/react'
import userService from '../services/users'
import Cookies from 'universal-cookie'

const FriendRequest = ({request}) => {
  const [friend, setFriend] = useState([])
  const toast = useToast()
  const cookies = new Cookies()
  
  useEffect(() => {
    userService
      .getFriend(request)
      .then(friend => setFriend(friend))
  }, [])

  const acceptRequest = () => {
    userService
      .acceptRequest(friend.id, cookies.get('token'))
    
    toast({
      description: 'accepted friend request',
      isClosable: true,
    })
  }
  
  return (
    <Flex>
      <Wrap>
        {console.log(friend.id)}
        <Text>{friend.name}</Text>
        <Button onClick={acceptRequest} size="xs">accept request</Button>
      </Wrap>
    </Flex>
  )
}

export default FriendRequest
