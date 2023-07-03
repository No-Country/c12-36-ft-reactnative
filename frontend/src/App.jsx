import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element='' />
        <Route path='/pagina2' element='' />
        <Route path='/' element='' />
        <Route path='/' element='' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
