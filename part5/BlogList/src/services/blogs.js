import axios from 'axios'
import { config } from 'dotenv'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken =>
{
  token = `Bearer ${newToken}`
}

const create = async newObject =>
{
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl,newObject,config)
  return response.data
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const update = async (newObject,id) =>
{
  const config = {
    headers: { Authorization: token },
  }
  const request = await axios.put(`${baseUrl}/${id}`,newObject,config)
  return request.data
}

const remove = async (id) =>
{
  const config = {
    headers: { Authorization: token },
  }
  const request = await axios.delete(`${baseUrl}/${id}`,config)
  return request.data
}

export default { getAll , create , setToken , update ,remove }