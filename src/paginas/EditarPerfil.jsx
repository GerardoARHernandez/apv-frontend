import AdminNav from "../components/AdminNav";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Alerta from '../components/Alerta';

const EditarPerfil = () => {

    const { auth, actualizarPerfil} = useAuth();
    const [perfil, setPerfil] = useState({});
    const [alerta, setAlerta] = useState({});

    useEffect(() => {
      setPerfil(auth);
    
    }, [auth])

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const {nombre, email} = perfil;

        if ([email, nombre].includes('')) {
            setAlerta({
                msg: 'Nombre y Email son requeridos',
                error: true
            })
            return;
        }
        const resultado = await actualizarPerfil(perfil);
        setAlerta(resultado)
    }
    
    const {msg} = alerta
    
    return (
        <>
            <AdminNav />

            <h2 className="font-black text-3xl text-center mt-10">Editar Perfil</h2>
            <p className="text-xl mt-5 mb-10 text-center">Modifica tu {''}
            <span className="text-indigo-600 font-bold">Información aquí</span></p>

            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">

                    {msg && <Alerta 
                        alerta={alerta}
                    />}

                    <form onSubmit={handleSubmit}>
                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-700">Nombre</label>
                            <input 
                                type="text"
                                name="nombre"
                                className="border bg-gray-300 w-full p-2 mt-5 rounded-lg"
                                value={perfil.nombre || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>

                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-700">Sitio Web</label>
                            <input 
                                type="text"
                                name="web"
                                className="border bg-gray-300 w-full p-2 mt-5 rounded-lg"
                                value={perfil.web || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>

                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-700">Teléfono</label>
                            <input 
                                type="text"
                                name="telefono"
                                className="border bg-gray-300 w-full p-2 mt-5 rounded-lg"
                                value={perfil.telefono || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>

                        <div className="my-3">
                            <label className="uppercase font-bold text-gray-700">Email</label>
                            <input 
                                type="text"
                                name="email"
                                className="border bg-gray-300 w-full p-2 mt-5 rounded-lg"
                                value={perfil.email || ''}
                                onChange={e => setPerfil({
                                    ...perfil,
                                    [e.target.name] : e.target.value
                                })}
                            />
                        </div>

                        <input
                            type="submit" value="Guardar Cambios" 
                            className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 hover:bg-indigo-800 hover:cursor-pointer"
                        />

                    </form>
                </div>
            </div>

        </>
    )
}

export default EditarPerfil