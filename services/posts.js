import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/posts'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createPost = async (content) => {
  const response = await axios.post(baseUrl, content)
  return response.data
}

const createComment = async (id, content) => {
  const request = await axios.put(`${baseUrl}/${id}`, content)
  return request.data
}

export default { getAll, createPost, createComment }
