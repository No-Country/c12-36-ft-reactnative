import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export const useProfile = () => {
  // const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  // Delete after proxy setup:
  const api = 'https://wallet-project-nocountry-backend-production-y.up.railway.app/api'

  const updateProfile = async (data, token) => {
    setIsLoading(true)
    setError(null)

    // Edit after proxy setup:
    const response = await fetch(api + '/users/edituser', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'access-token': token
      },
      body: JSON.stringify(data)
    })
    const responseObject = await response.json()

    if (!response.ok) {
      if (responseObject.message) {
        setError(responseObject.message)
      } else if (responseObject.mensaje) {
        setError(responseObject.mensaje)
      } else if (responseObject.errors) {
        if (responseObject.errors[0]) {
          if (responseObject.errors[0].msg) {
            setError(responseObject.errors[0].msg)
          }
        }
      }
      setIsLoading(false)
    }
    if (response.ok) {
      setIsLoading(false)

      // [Auxiliar] En realidad, éxito
      setError(responseObject.mensaje)

      // // Redirijo al dashboard (hay que rediseñar)
      // navigate('/home/dashboard')
    }
  }

  return { updateProfile, isLoading, error }
}
