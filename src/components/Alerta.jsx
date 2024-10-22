

function Alerta({alerta}) {
  return (
    <div className={`${alerta.error ? 'from-red-500 to-red-600' : 'from-green-500 to-green-600'} bg-gradient-to-r text-center p-3 rounded-xl uppercase text-white text-sm font-bold`}>
        {alerta.msg}
    </div>
  )
}

export default Alerta