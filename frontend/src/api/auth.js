import axios from 'axios'

const API = 'https://wallet-project-nocountry-backend-production-y.up.railway.app/api'

export const registerRequest = user => axios.post(`${API}/users`, user)
export const loginRequest = user => axios.post(`${API}/users/login`, user)
export const userUpdate = (token, data) => {
  return axios.put(`${API}/users/editUser`, data, {
    headers: {
      'access-token': token //
    }
  })
}
export const transferRequest = (token, data, sender) => axios.post(`${API}/transactions`, data, {
  headers: {
    'access-token': token
  },
  body: sender
})
export const userRequest = token => axios.get(`${API}/users`, {
  headers: {
    'access-token': token
  }
})

export const movementsRequest = () => axios.get(`${API}/transactions`)

export const userReload = (token, id) => axios.get(`${API}/users/${id}`, {
  headers: {
    'access-token': token
  }
})

export const changePassword = (token, data) => axios.patch(`${API}/users/reset/password`, data, {
  headers: {
    'access-token': token
  }
})
