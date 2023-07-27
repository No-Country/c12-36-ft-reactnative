import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

import logo from '../assets/logo.png'
import SidebarResponsive from './SidebarResponsive'
import LoginButton from '../components/LoginButton'
import BtnGradient from '../components/BtnGradient'

import '../styles/header.css'

const pages = [{ name: 'Nosotros', path: 'contact-us' }, { name: 'Ayuda', path: 'contact-us' }]

const Header = () => {
  const { user } = useAuth()
  const actualPath = useLocation().pathname
  const [anchorNav, setAnchorNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorNav(null)
  }

  return (
    <AppBar className='header'>
      <Container>
        <div className='header_loggedout'>
          {
              actualPath === '/' && !user &&
                <Container className='header_container'>
                  <Link to='/' className='logo_container'>
                    <img src={logo} alt='Logo' className='logo_header' />
                    <div className='logo_text'>Pocketpal</div>
                  </Link>
                  <ul className='listNav'>
                    {
                    pages.map((page) => (
                      <li key={page.name}>
                        <NavLink to={page.path}>
                          <p>{page.name}</p>
                        </NavLink>
                      </li>
                    ))
                  }
                  </ul>
                  <div className='header_buttons'>
                    <LoginButton />
                    <Button
                      href='/signup'
                      className='btnGradient'
                      variant='text'
                      sx={{
                        color: '#F1F0EA'
                      }}
                    >
                      Registrarse
                    </Button>
                  </div>
                </Container>
            }
          {
              actualPath !== '/' && !user &&
                <Container className='header_container'>
                  <Link to='/' className='logo_container'>
                    <img src={logo} alt='Logo' className='logo_header' />
                    <div className='logo_text'>Pocketpal</div>
                  </Link>
                </Container>
            }
        </div>
      </Container>

      <Container>
        <div className='header_loggedin'>
          {
            user && actualPath === '/' &&
              <Container className='header_container'>
                <Link to='/' className='logo_container'>
                  <img src={logo} alt='Logo' className='logo_header' />
                  <div className='logo_text'>Pocketpal</div>
                </Link>
                <Link to='/home/dashboard' className='btnGradient'>
                  Mi cuenta
                </Link>
              </Container>
          }
          {
            user && actualPath !== '/' &&
              <Container className='header_container'>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                  <IconButton size='large' aria-label='account' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleOpenNavMenu} color='inherit'>
                    <MenuIcon />
                  </IconButton>
                  <Menu id='menu-appbar' anchorEl={anchorNav} open={Boolean(anchorNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
                    <SidebarResponsive />
                  </Menu>
                </Box>
                <Link to='/' className='logo_container'>
                  <img src={logo} alt='Logo' className='logo_header' />
                  <div className='logo_text'>Pocketpal</div>
                </Link>
                <div className='circlePictureHeader'>
                  <Typography variant='p' color='secondary'>{user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()}</Typography>
                </div>
              </Container>
          }
        </div>
      </Container>

    </AppBar>
  )
}

export default Header
