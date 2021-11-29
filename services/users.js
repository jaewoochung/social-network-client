import axios from 'axios'
const baseUrl = '/api/users'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getFriend = (id) => {
  console.log("userservice ", id)
  const request = axios.get(`${baseUrl}/requester/${id}`)
  return request.then(response => response.data)
}

const getUser = async (cookieToken) => {
  const config = {
    headers: { Authorization: cookieToken },
  }
  
  console.log("getUser service", cookieToken)
  
  const request = axios.get(`${baseUrl}/getUser`, config)
  console.log("recieved request")
  return request.then(response => response.data)
}

const create = async account => {
  const config = {
    headers: { Authorization: token },
  }
  
  const response = await axios.post(baseUrl, account, config)
  return response.data
}

const acceptRequest = async (friendId, cookieToken) => {
  const config = {
    headers: { Authorization: cookieToken },
  }
  
  console.log(friendId, cookieToken)
  const response = await axios.post(`${baseUrl}/accept/${friendId}`, {cookieToken})
}

const addFriend = async (id, userToken) => {
  const config = {
    headers: { Authorization: token },
  }
  console.log(id)
  const request = await axios.post(`${baseUrl}/${id}`, userToken, config)
  return request.data
}

export default { create, getAll, addFriend, setToken, getUser, getFriend, acceptRequest }
