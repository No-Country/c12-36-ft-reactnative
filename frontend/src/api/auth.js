import axios from 'axios'

const API = 'https://wallet-project-nocountry-backend-production-y.up.railway.app/api'

export const registerRequest = user => axios.post(`${API}/users`, user)
export const loginRequest = user => axios.post(`${API}/users/login`, user)
export const userUpdate = (token, data) => {
  return axios.put('https://wallet-project-nocountry-backend-production-y.up.railway.app/api/users/editUser', data, {
    headers: {
      'access-token': token //
    }
  })
}
