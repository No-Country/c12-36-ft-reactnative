import { Link } from 'react-router-dom'

import backIcon from '../assets/back.png'

import '../styles/backButton.css'

const BackButton = () => {
    return (
        <div className='back_button'>
            <Link to='/' className='link-back'>
                <img className='back_arrow' src={backIcon} alt='back-icon'/>
                Volver atrás
            </Link>
        </div>
    )
}

export default BackButton