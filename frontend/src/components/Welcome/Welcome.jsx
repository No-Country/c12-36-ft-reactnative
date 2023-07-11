import { Typography } from '@mui/material'
import './welcome.css'

const Welcome = () => {
  return (
    <section style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '150px', margin: 'auto' }}>
      <div>
        <Typography variant='h4' color='secondary'>Hola Francisco,</Typography>
        <Typography variant='p' color='secondary'>Bienvenido</Typography>
      </div>
      <div className='cardSaldo' style={{ color: '#f1f0ea', display: 'flex', flexDirection: 'column', gap: '1rem', width: '324px', heigt: '160px', background: '#8d4eb5', padding: '16px', borderRadius: '10px' }}>
        <div>
          <div style={{ fontSize: '14px' }}>Cuentas</div>
          <div style={{ fontSize: '12px' }}>Saldos totales</div>
        </div>
        <div style={{ display: 'flex', fontSize: '28px', fontWeight: '400' }}>
          <span>$ </span>
          <span>0,00</span>
        </div>
        <div style={{ fontSize: '12px' }}>Tu CVU</div>
      </div>
    </section>
  )
}

export default Welcome
