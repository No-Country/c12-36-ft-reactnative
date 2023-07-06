import React from 'react'

const Welcome = () => {
  return (
    <section style={{ position: 'relative' }}>
      <div className='text-wrapper'>Hola Fernando,</div>
      <h1 className='h-1'>Bienvenido</h1>
      <div>
        <div className='element'>
          <span className='span'>$ </span>
          <span className='text-wrapper-8'>0,00</span>
        </div>
        <div className='text-wrapper-9'>Saldos totales</div>
        <div className='text-wrapper-10'>Cuentas</div>
        <div className='text-wrapper-11'>Tu CVU</div>
      </div>
    </section>
  )
}

export default Welcome