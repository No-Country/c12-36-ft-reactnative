import { useAuth } from '../hooks/useAuth'

import '../styles/myData.css'

const MyData = () => {
  const { user } = useAuth()

  console.log(user)

  return (
    <div className='mydata'>
      <div className='info_container'>
        <div className='circlePicture'>
          <p
            style={{ fontSize: '5rem' }}
          >
            {user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()}
          </p>
        </div>
        <p className='info_label'>Nombre:</p>
        <p className='info_text'>{user.firstName + ' ' + user.lastName}</p>
        <p className='info_label'>Correo electrónico:</p>
        <p className='info_text'>{user.email}</p>
        <p className='info_label'>CBU/CVU:</p>
        <p className='info_text'>{user.cbu}</p>
      </div>
    </div>
  )
}

export default MyData
