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
        const filterUser = usersData.find((userData) => userData.dni === user.dni)
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
    const res = await registerRequest(user)
    console.log(res)
  }

  const login = async (user) => {
    try {
      const res = await loginRequest(user)
      await setUser(res.data)
      await console.log(res.data)
      await setIsAuthenticated(true)
      localStorage.setItem('user', JSON.stringify(res.data))
      localStorage.setItem('token', JSON.stringify(res.data.accessToken))

      /*  */
    } catch (error) {
      console.error(error)
    }
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
