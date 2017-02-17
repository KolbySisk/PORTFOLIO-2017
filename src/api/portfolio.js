import axios from 'axios'

const API_ENDPOINT = process.env.NODE_ENV === 'development' ? 'http://localhost:57144/api/' : 'http://kolby-sisk-portfolio.azurewebsites.net/api/'

axios.defaults.baseURL = API_ENDPOINT;

export const getStuff = () => {
  return axios.get('stuff')
}

export const postContactForm = (data) => {
  var params = new URLSearchParams();
  params.append('name', data.name);
  params.append('email', data.email);
  params.append('message', data.message);

  return axios.post('contact', params)
}