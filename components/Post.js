import React, { useEffect, useState } from 'react'
import {
  Container,
  Button,
  Box,
  Text,
  Heading,
  Icon,
  Flex,
  Textarea,
  Avatar,
  Wrap
} from '@chakra-ui/react'
import { GoThumbsup } from 'react-icons/go'
import Comment from './Comment'
import CreateComment from './CreateComment'
import postService from '../services/posts'

const Post = ({ post, refreshComments }) => {
  const [comments, setComments] = useState([])
  const [likes, setLikes] = useState(0)
  
  useEffect(() => {
    postService
      .getAll()
      .then(init => {
        setComments(post.comments)
        setLikes(post.likes)
      })
  }, [])

  const addComment = (commentObject, postID) => {
    postService
      .createComment(postID, commentObject)
      .then(returnedComment => {
        setComments(comments.concat({comment: commentObject.comment, user: commentObject.user}))
      })
  }

  const likePost = () => {
    postService
      .likePost(post.id)
      .then(returnedLikes => {
        console.log(returnedLikes)
        setLikes(returnedLikes.likes+1)
      })
  }

  return (
    <Box
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      p={5}
      flex="1"
      mb={10}
    bgColor="#eaeaeb"
    >
    <Wrap mb={3}>
      <Avatar name={post.user.username} />
      <Text pl={3} fontWeight="bold">{post.user.name}</Text>
      <Text>{post.date}</Text>
    </Wrap>      
    <Text>{post.content}</Text>
    
    <Box pt={3}>
      <Flex>
        <Button size="xs" onClick={likePost}>
          <Icon as={GoThumbsup} />
        </Button>
        
        <Text px={2}>{likes} likes</Text>
      </Flex>
    </Box>
    
    <Box pt={5} mx={5} shadow="md" >
      {comments.map(comment =>
        <Comment id={comment.id} comment={comment.comment} user={comment.user} />
      )}
    </Box>
    <Box px={10} pt={5}>
      <CreateComment post={post} addComment={addComment} />
    </Box>
    </Box>
  )
}

export default Post
