import panel from '../../assets/panel.png'
import cards from '../../assets/tarjetas-de-credito.png'
import manos from '../../assets/apreton-de-manos.png'
import moves from '../../assets/iconoir_hand-cash.png'
import Typography from '@mui/material/Typography'
import './sidebar.css'

const sidebar = [{ name: 'Mi panel', img: panel }, { name: 'Mis tarjetas', img: cards }, { name: 'Servicios', img: manos }, { name: 'Movimientos', img: moves }]
const SidebarUp = () => {
  return (
    <ul style={{ gap: '8px', display: 'flex', flexDirection: 'column' }}>
      {
            sidebar.map((list) => (
              <li className='btnSidebar' key={list.name}>
                <img src={list.img} alt={list.name} className='iconSidebar' />
                <Typography variant='p' color='secondary' fontSize='1rem'>{list.name}</Typography>
              </li>
            ))
        }
    </ul>
  )
}

export default SidebarUp
