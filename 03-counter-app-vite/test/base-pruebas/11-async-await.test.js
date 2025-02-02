import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-asyn-await', () => { 
    
    test('getImage debe retornar un URL de l aimagen', async () => { 

        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
     })

 })