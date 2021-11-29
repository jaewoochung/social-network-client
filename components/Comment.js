import React from 'react'
import {
  Flex,
  Icon,
  Text,
  Avatar
} from '@chakra-ui/react'
import { GoPerson } from 'react-icons/go'

const Comment = ({ comment, user }) => {
  return (
    <Flex bgColor="#eaeaeb">
      <Avatar size="sm" name={user} />
      <Text ml={2} fontWeight="bold">{user}:</Text>
      <Text pl={2}>{comment}</Text>
    </Flex>
  )
}

export default Comment
