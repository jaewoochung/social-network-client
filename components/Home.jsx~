import React, { useState, useEffect } from 'react'
import postService from '../services/posts'
import {
  Box,
  Container
} from '@chakra-ui/react'

import SharePost from './SharePost'
import Post from './Post'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    postService
      .getAll()
      .then(initialPosts => {
        setPosts(initialPosts)
      })
  }, [])

  const createPost = (postObject) => {
    postService
      .createPost(postObject)
      .then(returnedPost => {
        setPosts(posts.concat(returnedPost))
      })
  }

  const refreshComments = () => {
    postService
      .getAll()
      .then(init => {
        setPosts(init)
      })
  }

  return (
    <Container maxW="75%">
      <SharePost createPost={createPost} />
      {
        posts.map(p =>
          <Post key={p.id} post={p} refreshComments={refreshComments} />
        )
      }
    </Container>
  )
}

export default Home
