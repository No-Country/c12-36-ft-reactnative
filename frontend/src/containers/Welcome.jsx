import '../styles/welcome.css'
import openEye from '../assets/fi-sr-eye.png'
import icon2 from '../assets/fi-sr-copy.png'
import closeEye from '../assets/cerrar-ojo.png'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useAuth } from '../hooks/useAuth'
import { formatearPeso } from '../config/config'
import { userReload } from '../api/auth'
const Welcome = () => {
  const { dataUser, authToken, setDataUser, user } = useAuth()
  const [eye, setEye] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Definimos la función que actualizará la información en localStorage
    const updateUserInLocalStorage = () => {
      userReload(authToken, dataUser._id)
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res.data))
          return res
        })
        .then((res) => {
          setDataUser(res.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    // Ejecutamos la función por primera vez
    updateUserInLocalStorage()

    // Configuramos un intervalo para ejecutar la función cada 10 segundos
    const intervalId = setInterval(updateUserInLocalStorage, 10000)

    // Limpiamos el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId)
  }, [authToken, dataUser._id, setDataUser])

  return (
    <section className='containerWelcome'>
      <div>
        <p className='greetings'>Hola {user.firstName}</p>
      </div>
      <div className='cardSaldo'>
        <div className='containerCuentas'>
          <div>
            <div style={{ color: '#F1F0EA', fontWeight: '600', fontSize: '14px' }}>Cuentas</div>
            <div style={{ color: '#F1F0EA', fontWeight: '500', fontSize: '12px' }}>Saldos totales</div>
          </div>
          {
            eye
              ? (
                <div className='icon-image1' style={{ color: '#FFFFFF', width: '24px', height: '24px' }}>
                  <button className='eye' onClick={() => setEye(false)}><img src={openEye} alt='ocultar saldo' /></button>
                </div>
                )
              : (
                <div className='icon-image1' style={{ color: '#FFFFFF', width: '24px', height: '24px' }}>
                  <button className='eye' onClick={() => setEye(true)}><img src={closeEye} alt='ver saldo' /></button>
                </div>
                )
          }

        </div>
        <div style={{ color: '#F1F0EA', display: 'flex', fontSize: '48px', fontWeight: '700' }}>

          {
            !eye
              ? <span>$***</span>
              : <span>{formatearPeso.format(dataUser.balance)}</span>
          }
        </div>
        <div className='containerCVU'>
          <div className='cvu' style={{ fontSize: '14px' }}>{user.cbu}</div>
          <div className='icon-image2' style={{ color: '#FFFFFF', width: '24px', height: '24px' }}>
            <CopyToClipboard text={user.cbu} onCopy={() => setCopied(true)}>
              <button className='eye' onClick={setTimeout(() => { setCopied(false) }, '1500')}><img src={icon2} alt='copiar CBU' /></button>
            </CopyToClipboard>
          </div>
          {
            copied
              ? <p style={{ marginLeft: '1rem' }}>Copiado</p>
              : ''
          }
        </div>
      </div>
    </section>
  )
}

export default Welcome
