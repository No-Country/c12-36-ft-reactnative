import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { Link, useLocation } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar'
import './header.css'
import LoginButton from '../LoginButton/LoginButton'
import BtnGradient from '../BtnGradient/BtnGradient'
import { useAuthContext } from '../../hooks/useAuthContext'
import { Button } from '@mui/material'
import { useLogout } from '../../hooks/useLogout'

const pages = ['Nosotros', 'Beneficios', 'Ayuda']

const Header = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()
  const actualPath = useLocation().pathname
  const [anchorNav, setAnchorNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorNav(null)
  }

  const register = { text: 'Registrarse', path: '/signup' }
  const home = { text: 'Home', path: '/home' }
  return (
    <AppBar className='header'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters className='toolbar'>
          <Link to='/'>
            <div className='name'>
              Pocketpal
            </div>
          </Link>
          {
          actualPath === '/' &&
            <>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} justifyContent='flex-end'>
                <IconButton size='large' aria-label='account' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
                  <MenuIcon />
                </IconButton>
                <Menu id='menu-appbar' anchorEl={anchorNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} open={Boolean(anchorNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign='center'><Link>{page}</Link></Typography>
                    </MenuItem>
                  ))}

                  <LoginButton />
                </Menu>
              </Box>
              <Typography variant='h5' noWrap component='a' sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, color: 'inherit', textDecoration: 'none' }}> Nombre</Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent='space-around'>
                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                  {pages.map((page) => (
                    <Link key={page} onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>{page}</Link>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {
                    user
                      ? <BtnGradient prop={home} />
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
      </Container>
    </AppBar>
  )
}

export default Header
