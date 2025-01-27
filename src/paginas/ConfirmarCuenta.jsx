import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import clienteAxios from '../config/axios';
import Alerta from "../components/Alerta";

const ConfirmarCuenta = () => {

  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const{id} = params;

  useEffect( () =>{
    const confirmarCuenta = async () =>{
      try {

        const URL = `/veterinarios/confirmar/${id}`;
        const {data} = await clienteAxios(URL);

        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg,
          error: false
        })
        
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        
        });
      }

      setCargando(false);
    }
    confirmarCuenta();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Confirma tu {""}<span className="text-black">Cuenta</span> & Comienza a administrar tus {""}
          <span className="text-black">Pacientes</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-xl px-5 py-10 rounded-xl bg-white">

        {!cargando && <Alerta 
          alerta={alerta}
        />}

        {cuentaConfirmada && (
          <Link to="/" className="block text-center my-5 text-gray-700">
          Iniciar Sesión
          </Link>
        )}

      </div>
    
    </>
  )
}

export default ConfirmarCuenta