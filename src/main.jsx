import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Home from './pages/Home'

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import RegisterPage from './pages/RegisterPage'
import DetailsCards from './pages/DetailsCards'
import Publications from './pages/Publications'


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
        path: "/posts/:id",
        element: <DetailsCards/>
      },
      {
        path: "/publication",
        element: <Publications/>
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
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router} />
  </React.StrictMode>,
)
