import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'

import './App.css'
import theme from './config/temeConfig'
import Header from './components/Header/Header'
import Landing from './components/Landing/Landing'
import Login from './components/Login/Login'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
