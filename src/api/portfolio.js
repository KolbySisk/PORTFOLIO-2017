import axios from 'axios'

const API_ENDPOINT = 'http://kolby-sisk-portfolio.azurewebsites.net/api/stuff'

export const getStuff = () => {
  return axios.get(API_ENDPOINT)
}