import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useSignup = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  // Delete after proxy setup:
  const api = 'https://wallet-project-nocountry-backend-production-y.up.railway.app/api'

  const signup = async ({ email, firstName, lastName, password }) => {
    setIsLoading(true)
    setError(null)

    // Edit after proxy setup:
    const response = await fetch(api + '/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, firstName, lastName, password })
    })
    const responseObject = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      if (responseObject.message) {
        setError(responseObject.message)
      } else if (responseObject.errors[0]?.msg) {
        setError(responseObject.errors[0]?.msg)
      }
    }
    if (response.ok) {
      setIsLoading(false)
      // Redirijo al login (hay que rediseñar con popup)
      navigate('/login')
    }
  }

  return { signup, isLoading, error }
}
