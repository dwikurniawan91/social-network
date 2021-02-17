import axios from 'axios'
const apiClient = axios.create({
  baseURL: 'https://newsapi.org/v2/',
})

export default apiClient;