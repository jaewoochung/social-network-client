s
import React from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'

const Post = ({ post }) => {
  return (
    <li>
      {post.content}
    </li>
  )
}

const Posts = (props) => {
  return (
    <ul>
      {console.log(props)}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const ConnectedPosts = connect(
  mapStateToProps
)(Posts)

export default ConnectedPosts
