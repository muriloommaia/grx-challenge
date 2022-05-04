import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint)
  return data
}

export const request = async (endpoint: string, body: any) => {
  const { data } = await api.post(endpoint, body)
  return data
}

export default api
