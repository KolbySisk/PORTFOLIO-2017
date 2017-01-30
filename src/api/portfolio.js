import axios from 'axios'

const API_ENDPOINT = 'http://localhost:57144/api/stuff'

export const getStuff = () => {
  return axios.get(API_ENDPOINT)
}