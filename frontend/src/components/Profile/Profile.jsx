import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import './profile.css'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import provincias from '../../data/provincias.json'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { es } from 'dayjs/locale/es'
import localeData from 'dayjs/plugin/localeData'
import picture from '../../assets/picture.svg'
import camera from '../../assets/fi-sr-camera.png'
import BtnGradient from '../BtnGradient/BtnGradient'
import { useAuthContext } from '../../hooks/useAuthContext'

const Profile = () => {
  const { user } = useAuthContext()
  dayjs.locale('es')
  dayjs.extend(localeData)
  dayjs.extend(customParseFormat)

  /*   const [provincia, setProvincia] = useState(1) */
  const [date, setDate] = useState(dayjs())

  /*   const handleChange = (event) => {
    setProvincia(event.target.value)
  } */
  const changes = { text: 'Guardar cambios' }
  return (
    <section style={{ width: '50%', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '69px' }}>
      <div>
        <div className='circlePicture'>
          <img className='pictureProfile' src={picture} alt=' ' />
          <div className='pictureCamera'>
            <img className='camera' src={camera} alt='' />
          </div>

        </div>

        {/* <div>
          <Button>Subir Foto</Button>
          <Button>Quitar</Button>
        </div> */}
      </div>
      <FormControl style={{ gap: '34px' }}>
        <div className='containerLabel'>
          <FormLabel className='labelInput' id='firstName'>Nombres* <TextField id='firstName' placeholder={user.firstName} /></FormLabel>
          <FormLabel className='labelInput' id='lastname'>Apellidos* <TextField id='lastname' placeholder={user.lastName} /></FormLabel>
        </div>
        <div className='containerLabel'>
          <FormLabel className='labelInput' id='email'>Correo electronico* <TextField id='email' placeholder={user.email} /></FormLabel>
          <FormLabel className='labelInput' id='nacionality'>Nacionalidad* <TextField id='nacionality' placeholder='Argentina' /></FormLabel>
        </div>
        <div className='containerLabel'>
          <div className='labelInput'>
            <FormLabel style={{ color: '#f1f0ea' }} id='dateOfBirth'>Fecha de Nacimiento*</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker defaultValue={date} onChange={(newDate) => setDate(newDate.format('DD/MM/YYYY'))} />
            </LocalizationProvider>
          </div>
          <FormLabel className='labelInput' id='dni'>DNI*<TextField id='dni' placeholder='12345678' /></FormLabel>
        </div>

        <div className='containerLabel'>
          <FormLabel className='labelInput' id='address'>Dirección* <TextField id='address' placeholder='Calle' /></FormLabel>
          <FormLabel className='labelInput' id='number'>Número* <TextField id='number' placeholder='123' /></FormLabel>

        </div>
        <div className='containerLabel'>
          {/* <FormLabel id='province'>Provincia*</FormLabel>
          <Select id='province' value={provincia} displayEmpty onChange={handleChange}>
            {
                  provincias.map(provincia => (
                    <MenuItem value={provincia.id} key={provincia.id}>{provincia.nombre}</MenuItem>
                  ))
            }
          </Select> */}
          <FormLabel className='labelInput' id='zipCode'>Codigo Postal* <TextField id='zipCode' placeholder='1000' /></FormLabel>
        </div>
        <div />
        <BtnGradient prop={changes} />
      </FormControl>

    </section>
  )
}

export default Profile
