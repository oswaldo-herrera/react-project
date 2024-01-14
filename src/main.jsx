import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Home from './pages/Home'
import DetallePublicacion from './pages/DetallePublicacion'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import RegisterPage from './pages/RegisterPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Dashboard/>,
      },
      {
        path: 'detalle',
        element:<DetallePublicacion/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router} />
  </React.StrictMode>,
)
