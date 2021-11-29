import React, { useState } from 'react'
import postService from '../services/posts'
import {
  Text,
  Container,
  Avatar,
  Box,
  Flex,
  Textarea,
  Button,
  Icon,
  FormControl,
  useToast
} from '@chakra-ui/react'
import { MdOutlineFaceUnlock } from 'react-icons/md'

import Cookies from 'universal-cookie'

const SharePost = ({ createPost }) => {
  const [content, setContent] = useState('')
  
  const toast = useToast( )
  const cookies = new Cookies()

  const handleChange = (event) => {
    setContent(event.target.value)
  }

  const addPost = (event) => {
    event.preventDefault()

    createPost({
      content: content,
      user_id: cookies.get('id'),
      likes: 0,
      comments: []
    })

    toast({
      description: "Success - posted new content!"
    })
    setContent('')
  }
  
  return (
    <Container maxW="75%" mb={5}>
      <Box bgColor="#eaeaeb" p={5} align="right">
        <Flex>
          <Avatar name={cookies.get('username')} />
          <FormControl onSubmit={createPost}>
            <Textarea
              resize="none"
              value={content}
              bgColor="#edecee"
              placeholder="Share a new post with users!"
              onChange={handleChange}
            />
            <Button mt={3} bgColor="#86da75" type="submit" onClick={addPost}>Post</Button>
          </FormControl>
        </Flex>

      </Box>
    </Container>
  )
}

export default SharePost
