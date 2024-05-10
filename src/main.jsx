import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Formulario from './layouts/components/auth/Formulario.jsx'
import Vregistro from './layouts/components/pages/Vregistro.jsx'

let router = createBrowserRouter([
  {
    path: "/formulario",
    element: <Formulario />
},
  {
      path: "/Vregistro",
      element: <Vregistro />
  },
  {
      path: "/",
      element: <App />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  < RouterProvider router={router} />
)