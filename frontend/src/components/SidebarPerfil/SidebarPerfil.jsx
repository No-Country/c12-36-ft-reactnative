import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import { useAuthContext } from '../../hooks/useAuthContext'
import avatar from '../../assets/avatar.png'

const SidebarPerfil = () => {
  const { user } = useAuthContext()

  return (
    <div style={{ display: 'flex', gap: '14px', marginTop: '79px' }}>
      <Avatar alt='avatar' src={avatar} sx={{ width: 55, height: 55 }} />
      <div>
        <Typography variant='p' color='secondary'>
          {user.firstName + ' ' + user.lastName}
        </Typography>
        <a href='#' style={{ textDecoration: 'underline', color: '#F1F0EA', fontWeight: '300' }}>Ver mi perfil</a>
      </div>
    </div>
  )
}

export default SidebarPerfil
