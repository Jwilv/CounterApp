import React, { useState } from "react";
import PropTypes from 'prop-types'

const CounterApp = ({ value  = 0}) => {


    const [valor, setNombre] = useState(value);

    const sumar = () => setNombre(valor + 1)

    const reset = () => setNombre(value)

    const restar = () => setNombre(valor - 1)

    return (
        <>
            <h1>hola mundo</h1>
            <p>{valor}</p>
            <button onClick={sumar}>+1</button>
            <button onClick={reset}>reset</button>
            <button onClick={restar}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp