
import getHeroeById, {getHeroesByOwner} from './bases/08-imp-exp.js';
import heroes from './data/heroes';

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         console.log('2 segundos después');
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         resolve(heroe);
//         reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('Then de la promesa con heroe:', heroe.name);
// } )
// .catch( err => {
//     console.warn(err);
// } );

const getHeroeByIdAsync = (id) => {
    const promesa = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log('2 segundos después');
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }
            else{
                reject(id);
            }
           
        }, 2000);
    });

    return promesa;
};

// getHeroeByIdAsync(42)
//     .then(heroe => console.log('Héroe:', heroe.name))
//     .catch(id => console.error('No se pudo encontrar el héroe con id:', id));


getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.error);