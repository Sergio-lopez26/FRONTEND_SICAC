import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registro from './pages/Registro.jsx'
import Login from './pages/Login.jsx'
import RecuperarP from './pages/RecuperarPass.jsx'
import CambiarP from './pages/CambiarPass.jsx'
import Usuario from './pages/Usuario.jsx'
import ConsultaPacientes from './pages/ConsultaPacientes.jsx'
import EditarPaciente from './pages/EditarPaciente.jsx'
import GestionarAcceso from './pages/gestionarAcceso.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Registro />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/RecuperarPass' element={<RecuperarP />} />
      <Route path='/CambiarPass' element={<CambiarP />} />
      <Route path='/Usuarios' element={<Usuario />} />
      <Route path='/ConsultaPacientes' element={<ConsultaPacientes />} />
      <Route path='/EditarPaciente' element={<EditarPaciente />} />
      <Route path='/GestionarAcceso' element={<GestionarAcceso />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
