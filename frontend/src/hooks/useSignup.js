// import { useAuthContext } from './useAuthContext'

// export const useSignup = () => {
//   const { dispatch } = useAuthContext()

//   const signup = async ({ email, firstName, lastName }) => {
//     const user = {
//       email,
//       firstName,
//       lastName,
//       token: 'akjsdfljasdlfadsjlfas' // Fake
//     }

//     // save the user to local storage
//     localStorage.setItem('user', JSON.stringify(user))

//     // update the auth context
//     dispatch({ type: 'LOGIN', payload: user })
//   }

//   return signup
// }

import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  // Delete after proxy setup:
  const api = 'https://wallet-project-nocountry-backend-production-y.up.railway.app/api'

  const signup = async (data) => {
    setIsLoading(true)
    setError(null)

    // Edit after proxy setup:
    const response = await fetch(api + '/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const user = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(user.error)
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

  return { signup, isLoading, error }
}
