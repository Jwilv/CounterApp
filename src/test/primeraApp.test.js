import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PrimeraApp from "../PrimerApp"

describe('pruebas en primera app ', () => {


    /*

 test('se debe mostrar el mensaje hola mundo', () => { 

        const mensaje = 'Hola mundo';

        const { getByText } = render(<PrimeraApp saludo={ mensaje } />)

       expect( getByText(mensaje) ).toBeInTheDocument();
     })

    */

    test('debe  mostrar <primeraApp /> correctamente ', () => {
        const saludo = 'anachichi'
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'anachichi'
        const subTitulo = 'hola buenas'
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subTitulo}

            />
        );

        const textoParrafo = wrapper.find('p').text()
        console.log(textoParrafo)
        expect(textoParrafo).toBe(subTitulo)
    })


})