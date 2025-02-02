import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06-deses-obj', () => { 

    test('should first', () => {

        const userContext = usContext({ 
            clave: 'Ironman', 
            nombre: 'Tony', 
            rango: 'Capitán' ,
            edad: 30
        });

        expect( userContext ).toEqual({
            nombreClave: 'Ironman',
            anios: 30,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
     })
    
})