import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
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
    // Edit after backend updates /login response:
    const user = {
      token: responseObject.accessToken,
      email: responseObject.email,
      firstName: responseObject.firstName,
      lastName: responseObject.lastName
    }

    if (!response.ok) {
      setIsLoading(false)
      setError(responseObject.message)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(user))

      // update the auth context
      dispatch({ type: 'LOGIN', payload: user })

      // update loading state
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}
