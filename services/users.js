import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async account => {
  const config = {
    headers: { Authorization: token },
  }
  
  const response = await axios.post(baseUrl, account, config)
  return response.data
}

export default { create, getAll }