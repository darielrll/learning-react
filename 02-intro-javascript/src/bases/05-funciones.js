
const saludar = function (nombre) {
  console.log(`Hola, ${nombre}`);
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar2('Naruto'));
console.log(saludar4());


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
};

const getUser_implicitReturn = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
    });

const user = getUser();
const user2 = getUser_implicitReturn();

console.log(user);
console.log(user2);

// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre
    });

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);