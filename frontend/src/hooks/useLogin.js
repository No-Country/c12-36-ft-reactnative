import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  // Delete after proxy setup:
  const api = 'https://wallet-project-nocountry-backend-production-y.up.railway.app/api'

  const login = async ({ email, password }) => {
    setIsLoading(true)
    setError(null)

    // Edit after proxy setup:
    const response = await fetch(api + '/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const responseObject = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      if (responseObject.mensaje) {
        setError(responseObject.mensaje)
      } else if (responseObject.errors[0] && responseObject.errors[0].msg) {
        setError(responseObject.errors[0].msg)
      }
    }
    if (response.ok) {
      const { mensaje, ...user } = responseObject

      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(user))

      // update the auth context
      dispatch({ type: 'LOGIN', payload: user })
      navigate('/home/dashboard')
      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}
