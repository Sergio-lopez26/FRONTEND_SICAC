import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registro from './pages/Registro.jsx'
import Login from './pages/Login.jsx'
import RecuperarP from './pages/RecuperarPass.jsx'
import CambiarP from './pages/CambiarPass.jsx'
import Usuario from './pages/Usuario.jsx'
import AgregarP from './pages/pacientes/AgregarPaciente.jsx'
import ConsultarOdontologo from './pages/ConsultarOdontologo/ConsultarOd.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Registro />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/RecuperarPass' element={<RecuperarP />} />
      <Route path='/CambiarPass' element={<CambiarP />} />
      <Route path='/AgregarPaciente' element={<AgregarP />} />
      <Route path='/ConsultarOdontologo' element={<ConsultarOdontologo />} />
      <Route path='/Usuarios' element={<Usuario />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
 