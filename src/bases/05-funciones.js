function saludar(nombre){
    return `Hola, ${nombre}`
}

const saludar2 = function(nombre){
    return `Hola, ${nombre}`
}
//funciones flecha
const saludar3 = (nombre) =>`Hola => ${nombre}`
const saludar4 = () =>`Hola 4`

//funciones flecha con obj
//debe ir dentro de (-----)
const flechaObj = () => ({
    nombre: "alfredo",
    edad: 4,
})


//ej
const flechaEj = (nombre)=>({
    uid:"123abc",
    username: nombre
})


console.log(saludar("person1"))//devuelve funcion
console.log(saludar2("person2"))//devuelve funcion
console.log(saludar3("person3"))//devuelve funcion
console.log(saludar4())//devuelve funcion
console.log(flechaObj())
console.log(flechaEj("Diño"))