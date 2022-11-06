import '@testing-library/jest-dom'

import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('pruebas de 05', () => {

    test('agetUser debe retornar un obj', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()



        expect(user).toEqual(userTest)

    })

    test('user activo', () => {

        const nombre = 'juan'
        const userActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        const userAct = getUsuarioActivo(nombre);

        expect(userAct).toEqual(userActivoTest)
    })
})