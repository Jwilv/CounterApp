import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('pruebas con promesas ', () => {

    test('debe de retornar un heroe asyng ', ( done ) => {

        const id = 1

        getHeroeByIdAsync(id)
            .then( heroe =>{
                expect(heroe).toBe(heroes[0])
                done();
            })

    });

    test('debe dar un error si el heroe por id no existe', (done) => { 

        const id = 10 
        getHeroeByIdAsync(id)
            .catch( err => {
                expect(err).toBe('No se pudo encontrar el héroe')
                done()
            });
     });
});