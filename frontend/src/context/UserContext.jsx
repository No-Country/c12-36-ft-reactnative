import { createContext, useEffect, useState } from 'react'
import { registerRequest, loginRequest } from '../api/auth'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
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

  /*   const [errors, setErrors] = useState([])
 */

  useEffect(() => {
    const seeUser = JSON.parse(localStorage.getItem('user'))
    if (seeUser) {
      setUser(seeUser)
    }
  }, [])

  useEffect(() => {
    setAuthToken(user?.accessToken)
  }, [user])

  const signup = async (user) => {
    const res = await registerRequest(user)
    console.log(res)
    /* const res =
      console.log(res.data) */
    /* localStorage.setItem('user', JSON.stringify(res.data)) */
  }

  const login = async (user) => {
    try {
      const res = await loginRequest(user)
      await setUser(res.data)
      await console.log(res.data)
      await setIsAuthenticated(true)
      localStorage.setItem('user', JSON.stringify(res.data))
      /*  */
    } catch (error) {
      console.error(error)
    }
  }

  const logout = async () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, signup, isAuthenticated, authToken, login, logout, data, setData, activation, setActivation, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}