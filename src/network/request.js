import axios from 'axios'

export function request123(option) {
  const requestExample = axios.create({
    baseURL: ''
  })
  requestExample.interceptors.request.use((config) => {
    return config
  }, (error) => {
    console.log(error);
  })
  requestExample.interceptors.response.use((res) => {
    return res.data
  }, (error) => {
    console.log(error);
  })
  return requestExample(option)
}


export function request152(option) {
  const requestExample = axios.create({
    baseURL: ''
  })
  requestExample.interceptors.request.use((config) => {
    return config
  }, (error) => {
    console.log(error);
  })
  requestExample.interceptors.response.use((res) => {
    return res.data
  }, (error) => {
    console.log(error);
  })
  return requestExample(option)
}