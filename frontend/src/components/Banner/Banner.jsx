import Typography from '@mui/material/Typography'
import homeImage from '../../assets/Group.png'
import './banner.css'

const Banner = () => {
  return (
    <section style={{ display: 'flex', alignItems: 'center', marginTop: '201px', marginBottom: '121px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
      <Typography variant='p' color='secondary' style={{ fontSize: '4rem', fontWeight: '600', backgroundImage: 'linear-gradient(to right, rgba(141, 78, 181, 1), rgba(102, 114, 222, 1), rgba(192, 145, 222, 1))', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>La mejor manera de llevar tu dinero</Typography>
        <p className='textInfo'>Simplifica tus finanzas con nuestra billetera digital. <br />
        Descubre todo lo que Pocketpal tiene para ti. <br /> <br />
        ¡Tu vida financiera en un solo lugar!<br /></p>
      </div>

        <img src={homeImage} alt=' ' className='image' />

    </section>
  )
}

export default Banner
