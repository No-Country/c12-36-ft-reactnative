import React from 'react'
import './cardBalance.css'

import Welcome from '../Welcome/Welcome.jsx'
import arrowSortImage from '../../assets/fluent_arrow-sort-16-filled.png'
import handCashImage from '../../assets/iconoir_hand-cash.png'
import basilDocumentImage from '../../assets/basil_document-solid.png'
import streamlineMoneyImage from '../../assets/streamline_money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow.png'

const Overlap = () => {
  return (
    <div className='overlap'>
      <div className='text-wrapper-5'>Transacciones</div>
      <img
        className='fluent-arrow-sort'
        alt='Fluent arrow sort'
        src={arrowSortImage}
      />
    </div>
  )
}

const OverlapGroup = () => {
  return (
    <div className='overlap-group'>
      <div className='text-wrapper-6'>Recibir dinero</div>
      <img
        className='iconoir-hand-cash'
        alt='Iconoir hand cash'
        src={handCashImage}
      />
    </div>
  )
}

const Overlap2 = () => {
  return (
    <div className='overlap-2'>
      <div className='text-wrapper-7'>Pago de servicios</div>
      <img
        className='basil-document-solid'
        alt='Basil document solid'
        src={basilDocumentImage}
      />
    </div>
  )
}

const OverlapGroup2 = () => {
  return (
    <div className='overlap-group-2'>
      <div className='text-wrapper-6'>Inversiones</div>
      <img
        className='streamline-money'
        alt='Streamline money'
        src={streamlineMoneyImage}
      />
    </div>
  )
}

const Overlap3 = ({ children }) => {
  return <div className='overlap-3'>{children}</div>
}

const Rectangle = () => {
  return <div className='rectangle' />
}

const Rectangle2 = () => {
  return <div className='rectangle-2' />
}

const Rectangle3 = () => {
  return <div className='rectangle-3' />
}

const Rectangle4 = () => {
  return <div className='rectangle-4' />
}

const Rectangle5 = () => {
  return <div className='rectangle-5' />
}

const Rectangle6 = () => {
  return <div className='rectangle-6' />
}

const Rectangle7 = () => {
  return <div className='rectangle-7' />
}

const Rectangle8 = () => {
  return <div className='rectangle-8' />
}

const Rectangle9 = () => {
  return <div className='rectangle-9' />
}

const Rectangle10 = () => {
  return <div className='rectangle-10' />
}

const Rectangle11 = () => {
  return <div className='rectangle-11' />
}

export const Home = () => {
  return (
    <article className='home'>
      <div className='div'>

        <Welcome />

        {/*
        <div className="text-wrapper-2">Nuestros productos</div>
        <div className="text-wrapper-3">Beneficios</div>
        <div className="text-wrapper-4">Historial de movimientos</div>
        <Overlap />
        <OverlapGroup />
        <Overlap2 />
        <OverlapGroup2 />

        <Rectangle />
        <Rectangle2 />
        <Rectangle3 />
        <Rectangle4 />
        <Rectangle5 />
        <Rectangle6 />
        <Rectangle7 />
        <Rectangle8 />
        <Rectangle9 />
        <Rectangle10 />
        <Rectangle11 />
        */}
      </div>
    </article>
  )
}

export default Home
