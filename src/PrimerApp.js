//fc funtional componente 
import React from "react";
import PropTypes from "prop-types"

const PrimeraApp = ({saludo, subtitulo })=>{

return (
    <>
        <h1>{saludo}</h1>
        <p>{subtitulo}</p>
    </>
);
}

PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitulo'
}

export default PrimeraApp

//tambien se puede usar <fragment> </fragment> en lugar de <> </>
//pero de esta forma <> </> no usamos el import 
//para imprimir una const se unsa {} dentro de la etiqueta 