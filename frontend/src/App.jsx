import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './App.css'

import Root from './routes/Root'
import Auth from './routes/Auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'landing'
      },
      {
        path: 'auth',
        element: <Auth />
      },
      {
        path: 'home'
      }
    ]
  }
])

export default function App () {
  return (
    <RouterProvider router={router} />
  )
}
