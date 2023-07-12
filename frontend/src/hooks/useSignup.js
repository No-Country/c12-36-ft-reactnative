import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const { dispatch } = useAuthContext()

  const signup = async ({ email, firstName, lastName }) => {
    const json = {
      email,
      firstName,
      lastName,
      token: 'akjsdfljasdlfadsjlfas' // Fake
    }

    // save the user to local storage
    localStorage.setItem('user', JSON.stringify(json))

    // update the auth context
    dispatch({ type: 'LOGIN', payload: json })
  }

  return signup
}
