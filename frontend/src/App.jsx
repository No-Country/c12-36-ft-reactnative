import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Header from './components/Header/Header'
import { ThemeProvider } from '@mui/material/styles'
import theme from './config/temeConfig'
import './App.css'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
