/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const FooterComponent = ({ footerlist }) => {
  return (
    <div className='footer_component'>
      <ul className='footer_options'>
        {
          footerlist.map((list) => (
            <li key={list.name}>
              <Link to={list.path}>
                {list.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default FooterComponent
