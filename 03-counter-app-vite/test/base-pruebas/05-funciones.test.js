import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 

    test('getUser debe de retornar un objeto', () => { 
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual( testUser );
    })

    test('getUsuarioACtivo debe de retornar un objeto', () => { 
        
        const usuarioActivo = 'Goku';

        const user = getUsuarioActivo( usuarioActivo );

        expect( user ).toBeDefined();
        expect( user.uid ).toEqual( 'ABC567' );
        expect( user.username ).toEqual( usuarioActivo );
        expect( user ).toEqual({
            uid: 'ABC567',
            username: usuarioActivo
        });
    })

})