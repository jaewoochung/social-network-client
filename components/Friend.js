import React from 'react'
import {
  Flex,
  Text,
  Heading,
  Avatar,
  Button,
  Wrap
} from '@chakra-ui/react'

const Friend = ({friend, sendFriendRequest}) => {
  const sendRequest = () => {
    sendFriendRequest(friend.id)
  }
  
  return (
    <Flex justify="space-around">
      <Wrap>
        <Avatar size="xs" name={friend.username} />
        <Text>{friend.name}</Text>
      </Wrap>
      <Button onClick={sendRequest} size="xs">Add Friend</Button>
    </Flex>
    
  )
}

export default Friend
