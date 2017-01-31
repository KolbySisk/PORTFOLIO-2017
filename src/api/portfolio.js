import axios from 'axios'

const API_ENDPOINT = process.env.NODE_ENV ? 'http://localhost:57144/api/' : 'http://kolby-sisk-portfolio.azurewebsites.net/api/'

export const getStuff = () => {
  return axios.get(API_ENDPOINT + 'stuff')
}