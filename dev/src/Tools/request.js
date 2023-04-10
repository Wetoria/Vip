import axios from 'axios';

const baseURL = import.meta.env.BASE_URL

export function getProjectData(url) {
  return axios.get(`.${baseURL}${url}`)
}