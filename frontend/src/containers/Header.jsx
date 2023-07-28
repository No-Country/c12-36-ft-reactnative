import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Divider, Button, Container } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

import logo from '../assets/logo.png'
import panel from '../assets/fi-sr-apps.png'
import moves from '../assets/fi-sr-navigation.png'
import help from '../assets/fi-sr-comments.png'
import settings from '../assets/fi-sr-settings.png'
import terms from '../assets/fi-sr-document.png'
import tarjeta from '../assets/fi-sr-credit-card.png'
import portrait from '../assets/fi-sr-portrait.png'
import close from '../assets/close.png'
import LoginButton from '../components/LoginButton'
import BtnGradient from '../components/BtnGradient'

import '../styles/header.css'

const pages = [{ name: 'Nosotros', path: 'who-we-are' }, { name: 'Ayuda', path: 'contact-us' }]
const sidebarUp = [{ name: 'Mi panel', img: panel, path: '/home/dashboard', focus: true }, { name: 'Transacciones', img: tarjeta, path: '/home/transfers' }, { name: 'Movimientos', img: moves, path: '/home/history' }, { name: 'Mis datos', img: portrait, path: '/home/profile' }]
const sidebarDown = [{ name: 'Terminos de uso', img: terms, path: 'home/terms-conditions' }, { name: 'Ayuda y soporte', img: help, path: 'home/contact-us' }, { name: 'Configuraciones', img: settings, path: '/home/settings/edit_profile' }]

const Header = () => {
  const { user } = useAuth()
  const actualPath = useLocation().pathname

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const { navigate } = useNavigate()
  const { logout } = useAuth()
  const handleLogout = () => {
    logout()
    navigate('/landing')
  }

  return (
    <AppBar position='static' className='header'>
      <Toolbar className='tool_bar'>
        <div className='header_loggedout'>
          {
            actualPath === '/' && !user &&
              <Container className='header_container'>
                <div className='header_left'>
                  <Link to='/' className='logo_container'>
                    <img src={logo} alt='Logo' className='logo_header' />
                    <div className='logo_text'>Pocketpal</div>
                  </Link>
                  <ul className='listNav'>
                    {
                    pages.map((page) => (
                      <li key={page.name}>
                        <Link to={page.path}>
                          <p>{page.name}</p>
                        </Link>
                      </li>
                    ))
                  }
                  </ul>
                </div>
                <div className='header_buttons'>
                  <LoginButton />
                  <Link to='/signup'>
                    <Button color='secondary' className='btnGradient signup_landing'>
                      Registrarse
                    </Button>
                  </Link>
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
                <IconButton
                  className='hamburguer_button'
                  id='resources-button'
                  size='large' edge='start'
                  color='inherit'
                  aria-label='logo'
                  onClick={handleClick}
                // aria-control={open ? 'Menu de opciones' : undefined}
                  aria-haspopup='true'
                  aria-expanded={open ? 'true' : undefined}
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  className='hamburguer_menu'
                  id='resources-menu'
                  anchorEl={anchorEl}
                  open={open}
                  MenuListProps={{ 'aria-labelledby': 'resources-button' }}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                >
                  <div className='sidebar'>
                    <ul className='ul_resp'>
                      {
                      sidebarUp.map((list) => (
                        <div key={list.name}>
                          <MenuItem className='logout_button' to={list.path} onClick={handleClose}>
                            <Link className='focus_resp' to={list.path}>
                              <img src={list.img} alt={list.name} className='iconSidebar' />
                              <Typography variant='p' color='secondary' fontSize='1rem'>{list.name}</Typography>
                            </Link>
                          </MenuItem>
                        </div>
                      ))
                    }
                    </ul>
                    <ul className='ul_resp'>
                      {
                      sidebarDown.map((list) => (
                        <div key={list.name}>
                          <MenuItem className='logout_button' to={list.path} onClick={handleClose}>
                            <Link to={list.path}>
                              <img src={list.img} alt={list.name} className='iconSidebar' />
                              <Typography variant='p' color='secondary' fontSize='1rem'>{list.name}</Typography>
                            </Link>
                          </MenuItem>
                        </div>
                      ))
                    }
                    </ul>
                    <Divider className='divider' />
                    <Button className='logout_button' href='/' onClick={handleLogout}><img src={close} className='iconSidebar' />Cerrar sesión</Button>
                  </div>
                </Menu>

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
      </Toolbar>
    </AppBar>
  )
}

export default Header
