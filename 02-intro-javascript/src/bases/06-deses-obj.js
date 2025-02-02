

// Desestructuracion
// Asignacion desestructurante
// doc: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

// se puede renombrar el campo a extraer
const { nombre:nombre2, edad, clave } = persona;

console.log(nombre2);
console.log(edad);
console.log(clave);

const retornaPersona = (usuario) => {
    const { nombre, edad, clave } = usuario;
    console.log(nombre, edad, clave);
}

const retornaPersona2 = ({ nombre} ) => {
    console.log(nombre);
}

// asignar valores por defecto
const retornaPersona3 = ({ nombre, rango = 'Capitan'} ) => {
    console.log(nombre, rango);
}

const usecontext = ({ nombre, clave, edad, rango} ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

retornaPersona(persona);
retornaPersona2(persona);
retornaPersona3(persona);

const {nombreClave, anios, latlng: {lat, lng}} = usecontext(persona);
console.log(nombreClave, anios, lat, lng);