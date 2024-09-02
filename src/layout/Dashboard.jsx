import React, {useContext} from 'react';
import { Link, Navigate, Outlet, useLocation} from 'react-router-dom'
import LogoPrincipal from '../../public/logoPrincipal.png'
import Citas from '../../public/citas.png'
import Especialidades from '../../public/especialidades.png'
import Pacientes from '../../public/pacientes.png'
import AuthContext from '../context/AuthProvider'


const Dashboard =() => {

  const {auth}=useContext(AuthContext)
  const autenticado=localStorage.getItem('token')
  return (
  <>
    <div className="flex flex-col md:flex-row h-screen bg-blue-400">
  {/* Sidebar */}
  <div className="w-full md:w-1/5 bg-blue-900 text-white flex flex-col items-center p-4 md:p-8">
    <div className="my-4 md:my-8">
      <h1 className="text-xl md:text-2xl font-bold text-white">APP - CITAS MÉDICAS</h1>
    </div>

    <div className="mb-4 md:mb-8 flex flex-col items-center">
      <img src={LogoPrincipal} alt="Logo" className="w-24 h-24" />
      <h2 className="text-center text-sm md:text-lg">BIENVENIDO - {auth?.nombre}</h2>
      <hr className="border-white w-full mt-2" />
    </div>
  </div>

  {/* Main Content */}
  <div className="flex-1 flex flex-col">
    <div className="flex justify-end bg-blue-900 p-4 md:p-8">
      <div className="flex items-center">
        <span className="text-white mr-4 text-sm md:text-base">BIENVENIDO - {auth?.nombre}</span>
        <Link to='/' className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => { localStorage.removeItem('token', '_id') }}>Salir</Link>
      </div>
    </div>

    <div className="flex-1 p-4 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center bg-gray-200 p-6 md:p-8 rounded-lg text-center shadow-sm max-w-sm">
          <img src={Pacientes} alt="Pacientes" className="w-16 h-16 mx-auto mb-4" />
          <Link to='/pacientesdashboard' className="w-full py-3 text-center hover:bg-blue-400">PACIENTES</Link>
        </div>
        <div className="flex flex-col items-center bg-gray-200 p-6 md:p-8 rounded-lg text-center shadow-sm max-w-sm">
          <img src={Especialidades} alt="Especialidades" className="w-16 h-16 mx-auto mb-4" />
          <Link to='/especialidadeshboard' className="w-full py-3 text-center hover:bg-blue-400">ESPECIALIDADES</Link>
        </div>
        <div className="flex flex-col items-center bg-gray-200 p-6 md:p-8 rounded-lg text-center shadow-sm max-w-sm">
          <img src={Citas} alt="Citas" className="w-16 h-16 mx-auto mb-4" />
          <Link to='/citashboard' className="w-full py-3 text-center hover:bg-blue-400">CITAS</Link>
        </div>
      </div>
    </div>

    <div className='overflow-y-auto p-4 md:p-8 flex-1'>
      {autenticado ? <Outlet /> : <Navigate to="/" />}
    </div>

    <div className="bg-blue-900 h-12">
      <p className='text-center text-slate-100 leading-[3rem] underline'>
        Todos los derechos reservados
      </p>
    </div>
  </div>
</div>
</>
  );
}

export default Dashboard;
