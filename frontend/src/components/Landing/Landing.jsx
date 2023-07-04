import banner from '../../assets/banner.jpg'
import InfoBanner from '../InfoBanner/InfoBanner'
import './landing.css'

const Landing = () => {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '80%', margin: 'auto' }}>
      <img className='banner' src={banner} alt='banner presentacion pocketpal' />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InfoBanner />
      </div>
    </section>
  )
}

export default Landing
