import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('pruebas de 07 clase', () => { 

    test('debe retornar un String y un arreglo ', () => { 

        const [letras, numeros] = retornaArreglo() // return de ['ABC', 123]

        //expect(arr).toEqual(['ABC', 123])

        //expect(letras).toBe('ABC')

        expect(numeros).toBe(123)

        //tambien con tipeof puedo comparar por los tipos de datos 
     })
 })