import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registro from './pages/Registro.jsx'
import Login from './pages/Login.jsx'
import RecuperarP from './pages/RecuperarPass.jsx'
import CambiarP from './pages/CambiarPass.jsx'
import Usuario from './pages/Usuario.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Registro />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/RecuperarPass' element={<RecuperarP />} />
      <Route path='/CambiarPass' element={<CambiarP />} />
      <Route path='/Usuarios' element={<Usuario />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
