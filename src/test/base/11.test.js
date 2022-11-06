import { getImagen } from "../../base-pruebas/11-async-await"

describe('pruebas con async y await ', () => { 

    test('debe retornar la url de la imagen ', async() => { 

        const url = await getImagen();
        console.log(url)
        expect( url.includes('https://')).toBe(true)

     })
 })  