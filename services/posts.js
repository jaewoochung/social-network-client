import axios from 'axios'
const baseUrl = '/api/posts'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createPost = async (content) => {
  const config = {
    headers: { Authorization: token },
  }
  
  const response = await axios.post(baseUrl, content, config)
  return response.data
}

const createComment = async (id, content) => {
  const request = await axios.put(`${baseUrl}/${id}`, content)
  return request.data
}

const likePost = async (id) => {
  const request = await axios.put(`${baseUrl}/like/${id}`)
  return request.data
}

export default { getAll, createPost, createComment, setToken, likePost }
