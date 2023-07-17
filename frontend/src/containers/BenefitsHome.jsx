import { Typography } from '@mui/material'
import '../styles/benefitsHome.css'

const iconCard = ['', '', '']
const benefitsHome = () => {
  return (
    <section>
      <div>
        <p className='benefits'>Beneficios</p>
      </div>
      <div style={{ display:'flex', gap:'30px' }}>
        {iconCard.map((icon) => (
          <div className='cardsBenefits' style={{ width: '297px', height: '182px' }} key={icon.name} >
            <div>
              <Typography variant='p' color='secondary'>{icon.name}</Typography>
            </div>
        </div>
        )
        )
      }
      </div>
    </section>
  )
}

export default benefitsHome
