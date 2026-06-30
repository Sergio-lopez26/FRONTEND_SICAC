import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registro from './pages/Registro.jsx'
import Login from './pages/Login.jsx'
import RecuperarP from './pages/RecuperarPass.jsx'
import CambiarP from './pages/CambiarPass.jsx'
import Usuario from './pages/Usuario.jsx'
import RegistroOdontologo from './pages/RegistroOdon.jsx'
import EditarOdontologo from './pages/EditarOdon.jsx'


function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Login />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/RecuperarPass' element={<RecuperarP />} />
      <Route path='/CambiarPass' element={<CambiarP />} />
      <Route path='/Usuarios' element={<Usuario />} />
      <Route path='/RegistroOdon'element={<RegistroOdontologo/>}/>
      <Route path='/Registro' element={<Registro/>}/>
      <Route path='/EditarOdon' element={<EditarOdontologo />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
