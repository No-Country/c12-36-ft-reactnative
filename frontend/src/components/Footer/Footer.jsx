import { Typography } from '@mui/material'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <section style={{ width: '100vw', background: '#000', marginTop: '4rem', textAlign: 'center' }}>
      <div style={{ display: 'flex' }}>
        <img src={logo} alt='logo pocketpal' style={{ maxWidth: '250px', padding: '3rem' }} />
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
          <div>
            <Typography variant='h5' color='secondary'>
              Informacion legal
            </Typography>
          </div>
          <div>
            <Typography variant='h5' color='secondary'>
              Para ti
            </Typography>
          </div>
          <div>
            <Typography variant='h5' color='secondary'>
              Ayuda
            </Typography>
          </div>
        </div>
      </div>
      <Typography variant='p' color='secondary'>PocketPal®.  Todos los derechos reservados.</Typography>
    </section>
  )
}

export default Footer
