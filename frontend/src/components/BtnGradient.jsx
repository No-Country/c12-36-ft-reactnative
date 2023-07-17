/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

import '../styles/btnGradient.css'

const BtnGradient = (props) => {
  if (props.prop.path === null) {
    return (
      <Button className='btnGradient' type='button' color='secondary' variant='text'>
        {props.prop.text}
      </Button>
    )
  } else {
    return (
      <Link to={props.prop.path}>
        <Button className='btnGradient' type='button' color='secondary' variant='text'>
          {props.prop.text}
        </Button>
      </Link>
    )
  }
}

export default BtnGradient
