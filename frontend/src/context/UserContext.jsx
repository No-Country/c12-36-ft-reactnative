import { createContext, useEffect, useState } from 'react'
import { registerRequest, loginRequest, userRequest } from '../api/auth'

export const AuthContext = createContext()
// eslint-disable-next-line
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [dataUser, setDataUser] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authToken, setAuthToken] = useState('')
  const [activation, setActivation] = useState(false)
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    dni: '',
    nacionality: '',
    address: {
      street: '',
      number: '',
      zipcode: ''
    }
  })

  useEffect(() => {
    userRequest(authToken)
      .then((res) => {
        const usersData = res.data
        return usersData
      })
      .then((usersData) => {
        const filterUser = usersData.find((userData) => userData.dni === user.dni)
        return filterUser
      })
      .then((filterUser) => {
        setDataUser(filterUser)
      })
  }, [authToken, user])

  useEffect(() => {
    const seeUser = JSON.parse(localStorage.getItem('user'))
    const token = JSON.parse(localStorage.getItem('token'))
    if (seeUser) {
      setUser(seeUser)
      setAuthToken(token)
    }
  }, [])

  const signup = async (user) => {
    await registerRequest(user)
  }

  const login = (user) => {
    loginRequest(user)
      .then((res) => {
        setUser(res.data)
        return res
      })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data))
        return res
      })
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.data.accessToken))
        return res
      })
      .then((res) => setAuthToken(res.data.accessToken))
      .then(() => setIsAuthenticated(true))
      .catch((err) => {
        console.error(err)
      })

    /* Código adicional aquí después del login exitoso si es necesario */
  }

  const logout = async () => {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, signup, isAuthenticated, authToken, login, logout, data, setData, activation, setActivation, setUser, dataUser, setDataUser }}>
      {children}
    </AuthContext.Provider>
  )
}
