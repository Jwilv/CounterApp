import { shallow } from 'enzyme'
import React from 'react'
import CounterApp from '../counterApp';


describe('pruebas en counter app', () => {

  let wrapper = shallow(<CounterApp />)
  beforeEach( ()=>{
    wrapper = shallow(<CounterApp />)
  })

  test('pruebas de render en primera app', () => {

    const valor = 8;
    const wrapper = shallow(<CounterApp value={valor} />)
    expect(wrapper).toMatchSnapshot();
  });

  test('si no recibe argumento debe mostrar el valor por defecto', () => {
    const valorDefault = '0';

    const valor = wrapper.find('p').text()
    expect(valor).toBe(valorDefault);

  })

  test('simulacion btn1 (+1)', () => { 

    wrapper.find('button').at(0).simulate('click')
    const valorDefault = wrapper.find('p').text()
    expect(valorDefault).toBe('1')
   })
   test('simulacion btn3 (-1)', () => { 

    wrapper.find('button').at(2).simulate('click')
    const valorDefault = wrapper.find('p').text()
    expect(valorDefault).toBe('-1')

   })

   test('pruebas en el boton 2 (reset)', () => { 
    const reset = '10'
    const valor = 10;
    const wrapper = shallow(<CounterApp value={valor} />)
    wrapper.find('button').at(0).simulate('click')
 
    wrapper.find('button').at(1).simulate('click')
    const valorDefault = wrapper.find('p').text()

    expect(valorDefault).toBe(reset)

    })
});