import React, {useContext} from 'react'
import { Link, Navigate, Outlet, useLocation} from 'react-router-dom'
import Especilaidades from '../../public/especialidades.png'
import AuthContext from '../context/AuthProvider'

const EspecialidadesDashboard=()=> {

    const {auth}=useContext(AuthContext)
    const urlActual = location.pathname
    const autenticado=localStorage.getItem('token')

  return (
    <div className="flex flex-col md:flex-row h-screen bg-blue-400 overflow-hidden">
  {/* Sidebar */}
  <div className="w-full md:w-1/5 bg-blue-900 text-white flex flex-col items-center">
    <div className="my-8">
      <h1 className="text-xl font-bold text-white text-center">APP - CITAS MÉDICAS</h1>
    </div>

    <div className="mb-8 flex flex-col items-center flex-1">
      <img src={Especilaidades} alt="Logo" className="w-24 h-24" />
      <h2 className="text-center text-lg">MÓDULO - ESPECIALIDADES</h2>
      <hr className="border-white w-full mt-2" />
      <ul className="mt-5">
        <li className="text-center">
          <Link to='/especialidadeshboard' className={`${urlActual === '/especialidadeshboard' ? 'text-slate-200 bg-gray-900 px-3 py-2 rounded-md text-center' : 'text-slate-100'} text-xl block mt-2 hover:text-slate-600`}>Listar</Link>
        </li>
        <li className="text-center">
          <Link to='/especialidadeshboard/registrar' className={`${urlActual === '/especialidadeshboard/registrar' ? 'text-slate-100 bg-gray-900 px-3 py-2 rounded-md text-center' : 'text-slate-100'} text-xl block mt-2 hover:text-slate-600`}>Registrar</Link>
        </li>
      </ul>
      <Link to='/dashboard' className="mt-auto bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-700">Página Principal</Link>
    </div>
  </div>

  {/* Main Content */}
  <div className="flex-1 flex flex-col">
    <div className="flex justify-end bg-blue-900 p-8">
      <div className="flex items-center">
        <span className="text-white mr-4">BIENVENIDO - {auth?.nombre}</span>
        <Link to='/' className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => { localStorage.removeItem('token') }}>Salir</Link>
      </div>
    </div>
    <div className="flex-1 overflow-y-scroll p-8">
      {autenticado ? <Outlet /> : <Navigate to="/" />}
    </div>
    <div className="bg-blue-900 h-12">
      <p className="text-center text-slate-100 leading-[2.9rem] underline">
        Todos los derechos reservados
      </p>
    </div>
  </div>
</div>

  )
}

export default EspecialidadesDashboard
