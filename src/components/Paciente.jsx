import usePacientes from "../hooks/usePacientes";

const Paciente = ({paciente}) => {

    const {setEdicion, eliminarPaciente} = usePacientes();

    const {email, fecha, nombre, propietario, sintomas, _id} = paciente

    const formatearFecha = (fecha) =>{
        const nuevaFecha = new Date(fecha);
        nuevaFecha.setMinutes(nuevaFecha.getMinutes() + nuevaFecha.getTimezoneOffset())
        return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(nuevaFecha)
    }


    return (
        <>
            <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl pb-0.5">
                <p className="font-bold uppercase text-indigo-800 my-3">Nombre: {''}
                    <span className="font-normal normal-case text-black">{nombre}</span>
                </p>
            
                <p className="font-bold uppercase text-indigo-800 my-3">Propietario: {''}
                    <span className="font-normal normal-case text-black">{propietario}</span>
                </p>

                <p className="font-bold uppercase text-indigo-800 my-3">Email Contacto: {''}
                    <span className="font-normal normal-case text-black">{email}</span>
                </p>

                <p className="font-bold uppercase text-indigo-800 my-3">Fecha de Alta: {''}
                    <span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
                </p>

                <p className="font-bold uppercase text-indigo-800 my-3">Síntomas: {''}
                    <span className="font-normal normal-case text-black">{sintomas}</span>
                </p>

                <div className="flex justify-between my-10">
                    <button
                        type="button"
                        className="py-2 px-10 bg-blue-600 hover:bg-blue-700 text-white uppercase font-bold rounded-lg"
                        onClick={() => setEdicion(paciente)}
                    >Editar</button>

                    <button 
                        type="button"
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                        onClick={() => eliminarPaciente(_id)}
                    >Eliminar</button>

                </div>

            </div>
        </>
    )
}

export default Paciente;