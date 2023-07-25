import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'
import { Button } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

/* import { useLogout } from '../hooks/useLogout' */
/* import { useAuthContext } from '../hooks/useAuthContext' */
import bell from '../assets/fi-sr-bell.png'
import LoginButton from '../components/LoginButton'
import BtnGradient from '../components/BtnGradient'

import '../styles/header.css'
import Sidebar from './Sidebar'
import { useAuth } from '../hooks/useAuth'

const pages = ['Nosotros', 'Beneficios', 'Ayuda']

const Header = () => {
  const { user } = useAuth()
  /*   const { logout } = useLogout()
 */ const actualPath = useLocation().pathname
  const [anchorNav, setAnchorNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorNav(null)
  }

  const pages = ['Nosotros', 'Beneficios', 'Ayuda']
  const register = { text: 'Registrarse', path: '/signup' }
  const home = { text: 'Home', path: '/home' }
  return (
    <AppBar className='header'>

      {/* <Container maxWidth='xl' style={{ display: 'flex', alignItems: 'center' }}> */}

      {
          actualPath === '/' && !user

            ? (
              <Container style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'space-between' }}>
                <Link to='/'>
                  <div className='logo'>Pocketpal</div>
                </Link>
                <div style={{ display: 'flex' }}>
                  <LoginButton />
                  <BtnGradient prop={register} />
                </div>
              </Container>

              )
            : (
              <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                  <IconButton size='large' aria-label='account' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
                    <MenuIcon />
                  </IconButton>
                  <Menu id='menu-appbar' anchorEl={anchorNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'rigth' }} open={Boolean(anchorNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>

                    <Sidebar />
                    {/* pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign='center'><Link>{page}</Link></Typography>
                      </MenuItem>
                    ))} */}
                  </Menu>
                </Box>
                <Link to='/'>
                  <div className='logo'>Pocketpal</div>
                </Link>
                <ul className='listNav'>
                  {
                  pages.map(name => (
                    <li key={name}>{name}</li>
                  ))
                }
                </ul>
                {
                  user &&
                    <div>
                      <img className='notifications' src={bell} alt=' ' />
                      <div className='perfilHeader'>
                        {/* <div className='circlePictureHeader'>
                          <Typography variant='p' color='secondary'>{user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()}</Typography>
                        </div> */}
                        <Link to='/home/dashboard' className='btnGradient btnGradient--header'>Ir a mi panel</Link>
                      </div>
                    </div>
                }
              </Container>
              )
        }

      {/* <Toolbar disableGutters className='toolbar'>

        {
            actualPath === '/' &&
              <>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent='space-around'>
                  <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                    {pages.map((page) => (
                      <Link key={page} onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>{page}</Link>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {
                    user
                      ? (
                        <>
                          <BtnGradient prop={home} />
                          <Button
                            color='secondary'
                            onClick={logout}
                          >
                            Salir
                          </Button>
                        </>
                        )
                      : (
                        <>
                          <LoginButton />
                          <BtnGradient prop={register} />
                        </>
                        )
                  }
                  </div>
                </Box>
              </>
          }
        {
            user && actualPath !== '/' &&
              <div
                style={{
                  textAlign: 'end',
                  width: '100%'
                }}
              >
                <Button
                  color='secondary'
                  onClick={logout}
                >
                  Cerrar sesión
                </Button>
              </div>
          }
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  )
}

export default Header
