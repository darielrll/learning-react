
describe('Prueba en <Demo Component>', () => { 
   
   test('Esta prueba debe de ser true', () => {
      const message1 = 'Hola Mundo';
      
      const message2 = message1.trim();
      
      expect( message1 ).toBe( message2 );
   });

})