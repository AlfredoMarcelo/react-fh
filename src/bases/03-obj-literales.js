const persona = {
    nombre : "Tony",
    apellido: "Stark",
    edad: 45,
    direccion:{
        ciudad: "Arica",
        zip: 1000000,
        lat:50,
        lng: 64,
    }
}
//Se usa spread operator para hacer copia de obj o arr
const persona2 = {...persona};
persona2.nombre = "Peter";

console.log('persona', persona)
console.log('persona2', persona2)