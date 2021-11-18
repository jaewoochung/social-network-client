import React from 'react'
import {
  Flex,
  Icon,
  Text
} from '@chakra-ui/react'
import { GoPerson } from 'react-icons/go'

const Comment = ({ comment, user }) => {
  return (
    <Flex bgColor="#eaeaeb">
      <Icon as={GoPerson} />
      <Text fontWeight="bold">{user}:</Text>
      <Text pl={2}>{comment}</Text>
    </Flex>
  )
}

export default Comment
