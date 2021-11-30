import axios from 'axios'
const baseUrl = process.env.NODE_ENV === 'production' ? 'https://serene-oasis-52826.herokuapp.com/api/login' : 'http://localhost:3001/api/login'
console.log(process.env.NODE_ENV)
console.log(baseUrl)

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }
