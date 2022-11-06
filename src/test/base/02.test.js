import '@testing-library/jest-dom';

import { getSaludo } from "../../base-pruebas/02-template-string";

describe('pruebas en 02', () => { 

    test('prueba en el metodo getSaludo', () => { 

        const nombre = 'fernando'

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola' + nombre )
     })

     test('funcion sin argumento ', () => { 

        const saludo = getSaludo();

        expect(saludo).toBe('Hola' + 'carlos')

      })
 })