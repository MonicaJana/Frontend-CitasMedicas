import React from 'react'
import { Formulario } from '../components/Formulario'

const CrearPacientes = () => {
    return (
        <div>
            <h1 className='font-black text-4xl text-gray-500'>Registro de Pacientes</h1>
            <hr className='my-4' />
            <p className='mb-8'>Este módulo te permite registrar un nuevo paciente</p>
            <Formulario />
        </div>
    )
}

export default CrearPacientes