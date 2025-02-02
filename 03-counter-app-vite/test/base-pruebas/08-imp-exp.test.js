import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 

    test('getHeroesById debe de retornar un heroe por ID', () => { 

        const id = 1;
        const heroe = getHeroeById( id );

        expect( heroe ).toEqual( {id: 1, name: 'Batman', owner: 'DC'} );
     })

     test('getHeroesById debe de retornar undefined si no existe ID', () => { 

        const id = 100;
        const heroe = getHeroeById( id );

        expect( heroe ).toBeUndefined();
        expect( heroe ).toBeFalsy();
     })

     test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => { 

        const owner = 'DC';
        const heroesDC = getHeroesByOwner( owner );

        expect( heroesDC.length ).toEqual( 3 );
     })  

     test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => { 

        const owner = 'Marvel';
        const heroesDC = getHeroesByOwner( owner );

        expect( heroesDC.length ).toEqual( 2 );
     })  
 })