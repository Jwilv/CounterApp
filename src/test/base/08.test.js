import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('pruebas en 08, funciones de heroes', () => {

    test('debe retornar un heroe por id', () => {

        const id = 2;
        const heroe = getHeroeById(id);

     

        const heroesData = heroes.find( hero => hero.id === id)

        expect(heroe).toBe(heroesData)
    })

    
    test('debe retornar un undefined si no existe la id', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        

        const heroesData = heroes.find( hero => hero.id === id)

        expect(heroe).toBe(undefined)
    })

    test('debe retornar un arreglo con los heroes de dc ', () => {

        const owner = 'DC'

        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter( h => h.owner === owner)

        expect(heroes).toEqual(heroesData)
    })

    test('debe retornar un arreglo con los heroes de marvel ', () => {

        const owner = 'Marvel'

        const heroes = getHeroesByOwner(owner);


        expect(heroes.length).toBe(2)
    })

    test('debe retornarun arr vacio si no tiene owner', () => {

        const owner = 'MArv'

        const heroes = getHeroesByOwner(owner);


        expect(heroes).toEqual([])
    })
})