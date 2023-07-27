import React from 'react'
import ReactDOM from 'react-dom/client'

/* import { AuthContextProvider } from './context/AuthContext.jsx'
 */import App from './App.jsx'
import { AuthProvider } from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
)
