import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import logo from '../../assets/logo.png'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar'
import './header.css'
import LoginButton from '../LoginButton/LoginButton'
import SignUpButton from '../SignUpButton/SignUpButton'

const pages = ['Nosotros', 'Beneficios', 'Ayuda']

const Header = () => {
  const [anchorNav, setAnchorNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorNav(null)
  }

  return (
    <AppBar className='header'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters className='toolbar'>
          <Link to='/'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              Pocketpal
            </div>
          </Link>
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
            <div style={{ display: 'flex', gap: '3rem' }}>
              {pages.map((page) => (
                <Link key={page} onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>{page}</Link>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <LoginButton />
              <SignUpButton />
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
