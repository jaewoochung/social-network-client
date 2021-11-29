import React, { useState, useEffect } from 'react'
import postService from '../services/posts'
import userService from '../services/users'
import {
  Box,
  Container
} from '@chakra-ui/react'

import SharePost from './SharePost'
import Post from './Post'

import Cookies from 'universal-cookie'

const Home = () => {
  const [posts, setPosts] = useState([])
  const [curUser, setCurUser] = useState([])
  const [allowedUsers, setAllowedUsers] = useState([])
  
  const cookies = new Cookies()
  
  useEffect(() => {
    postService
      .getAll()
      .then(initialPosts => {
        setPosts(initialPosts.sort((a,b) => a.date-b.date))
      })
  }, [])

  useEffect(() => {
    userService
      .getUser(cookies.get('token'))
      .then(initUser => setCurUser(initUser))
  }, [])

  useEffect(() => {
    postService.setToken(cookies.get('token'))
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
    <Box>
      <SharePost minW="55%" createPost={createPost} />
      {
        posts.filter(post => post.user.friends.includes(curUser.id) || post.user.id === curUser.id)
             .sort((a, b) => b - a)
             .map(p =>
               <Post
                 key={p.id}
                 post={p}
                 refreshComments={refreshComments}
               />
             )
      }
    </Box>
  )
}

export default Home
