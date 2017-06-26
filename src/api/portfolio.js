import axios from 'axios'

const API_ENDPOINT = process.env.NODE_ENV === 'development' ? 'http://localhost:57144/api/' : 'http://kolbysisk-001-site1.ftempurl.com/api/'

axios.defaults.baseURL = API_ENDPOINT;

export const getStuff = () => {
  return axios.get('stuff')
}

export const getStats = () => {
  return axios.get('stats')
}

export const postContactForm = (data) => {
  var params = new URLSearchParams();
  params.append('name', data.name);
  params.append('email', data.email);
  params.append('message', data.message);

  return axios.post('contact', params)
}