import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import './signUpButton.css'

const SignUpButton = () => {
  return (
    <Link to='/signup'>
      <Button variant='contained' className='btnGradient'>
        Registrarse
      </Button>
    </Link>
  )
}

export default SignUpButton
