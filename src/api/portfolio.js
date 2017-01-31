import axios from 'axios'

const API_ENDPOINT = 'http://www.kolbysisk.com/api/stuff'

export const getStuff = () => {
  return axios.get(API_ENDPOINT)
}