
import React from 'react';
import  ReactDOM from 'react-dom';
//import PrimeraApp from './PrimerApp';
import CounterApp from './counterApp';

import './index.css'

const divRoot = document.querySelector('#root')

console.log(divRoot)

//ReactDOM.render(<PrimeraApp saludo = "que grande " subtitulo='dale vamo el rojo'/>,divRoot)

ReactDOM.render(<CounterApp value = {0}/>,divRoot)