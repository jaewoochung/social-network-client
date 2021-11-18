import React, { useState } from 'react'
import {
  Container,
  Textarea,
  useToast,
  FormControl,
  Button,
  Flex
} from '@chakra-ui/react'

const CreateComment = ({ post, addComment }) => {
  const [comment, setComment] = useState('')
  const toast = useToast()

  const handleChange = (event) => {
    setComment(event.target.value)
  }

  const createComment = (event) => {
    event.preventDefault()

    const fullComment = {
      comment: comment,
      user: "Stephen"
    }
    
    addComment(comment, fullComment.user, {
      title: post.title,
      author: post.author,
      content: post.content,
      comments: post.comments.concat(fullComment),
      likes: post.likes,
      id: post.id
    })

    setComment('')

    toast({
      description: "added comment"
    })
  }
  
  return (
    <FormControl>
      <Flex>
        <Textarea
          bgColor="#edecee"
          minH="unset"
          placeholder="Leave a comment here"
          size="sm"
          resize="none"
          value={comment}
          onChange={handleChange}
        />
        <Button
          onClick={createComment}
          bgColor="#86da75"
          type="submit"
          size="sm"
          ml={3}
        >
          comment
        </Button>
      </Flex>
    </FormControl>
  )
}

export default CreateComment
