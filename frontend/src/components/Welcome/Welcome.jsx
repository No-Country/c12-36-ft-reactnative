import React from 'react'

const Welcome = () => {
  return (
    <section style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', margin: 'auto', marginTop: '150px' }}>
      <div className='text-wrapper'>Hola Francisco,</div>
      <h1 className='h-1'>Bienvenido</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <div className='element' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className='span'>$ </span>
          <span className='text-wrapper-8'>0,00</span>
        </div>
        <div className='text-wrapper-10' style={{ alignSelf: 'center' }}>Cuentas</div>
        <div className='text-wrapper-9' style={{ alignSelf: 'center' }}>Saldos totales</div>
        <div className='text-wrapper-11' style={{ alignSelf: 'center' }}>Tu CVU</div>
      </div>
    </section>
  )
}

export default Welcome
