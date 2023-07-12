import React from 'react'
import ReactDOM from 'react-dom/client'

import { AuthContextProvider } from './context/AuthContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>
)
