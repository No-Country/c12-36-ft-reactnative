import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import '../styles/transfer.css'
import { useAuthContext } from '../hooks/useAuthContext'
import pencil from '../assets/fi-sr-pencil.png'
import BtnGradient from '../components/BtnGradient'
import { Link } from 'react-router-dom'
import backIcon from '../assets/back.png'
const Transfers = () => {
  const { user } = useAuthContext()
  const continuar = { text: 'Continuar' }
  return (
    <div className='transfer'>
      <div className='titleSubtitle'>
        <Typography color='secondary' variant='p' className='titleTransfer'>Transacciones</Typography>
        <Typography color='secondary' variant='p' className='subtitleTransfer'>Ingresa un monto:</Typography>
      </div>
      <div className='containerAmount'>
        <div className='balance'>
          <label className='amount'>$<input type='number' className='sinBorde ' placeholder='0' /></label>
        </div>
        <Typography variant='p' color='secondary' className='available'>Saldo disponible ${user.balance}</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField id='standard-basic' label='Ingresar CBU o CVU' variant='standard' />
          <div className='containerMotivo'>
            <Typography variant='p' color='secondary'>Motivo:</Typography>
            <TextField id='standard-basic' label='Varios' variant='standard' />
            <img src={pencil} alt='editar motivo' />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <BtnGradient prop={continuar} />
          <div className='back_button'>
            <Link to='/home/dashboard' className='link-back'>
              <img className='back_arrow' src={backIcon} alt='back-icon' />
              Volver a mi panel
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Transfers
