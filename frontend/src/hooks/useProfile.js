import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
// import { useNavigate } from 'react-router-dom'

export const useProfile = () => {
  // const navigate = useNavigate()
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [activation, setActivation] = useState(false)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch, user } = useAuthContext()
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
      // Avisar al back que estandarice la
      // propiedad de mensaje-error
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
      if (!user?.isActivated) {
        setActivation(true)
      } else {
        setActivation(false)
      }
      setSuccess(responseObject.mensaje)

      const { email, ...editedUser } = responseObject.userEdited
      // update the auth context AND save the user to local storage:
      dispatch({ type: 'UPDATE', payload: editedUser })

      // // ¿Redirijo al dashboard? (Habría que diseñar un popup o algo):
      // navigate('/home/dashboard')

      setIsLoading(false)
    }
  }

  return { updateProfile, isLoading, error, success, activation }
}
