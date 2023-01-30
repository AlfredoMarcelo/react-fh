const personajes = ["goku", "bulma", "vegeta"]
 
//Los arrays se ordenan por posiciones
//vegeta esta en la posicion 2, por eso se usa dos comas como salto
const [ , ,vegeta] = personajes;

console.log(vegeta)
//------------------------------------------------------

const retArreglo = () =>{
   return ['ABC', 123]
}
//Se extraen en variables independientes desde la funcion
const [letras, numeros] = retArreglo();
console.log(letras, numeros)

//-----------------------------------------------------
//Tarea

const funUseState = (val) =>{
   //22 es un arreglo con una valor parametro y una funcion
   //son dos valores dentro del array
   return [val, () =>{console.log("hola broo")}]
}
//retorna el arreglo
const arr2 = funUseState("Goku");
console.log(arr2)
//De esta manera se llama a una funcion dentro de un arreglo
arr2[1]();//----------1,
//Destructurando ambos
const [nombre1, saludo] = [...arr2];
console.log(nombre1)
saludo()//----------2, de esta manera es mas ordenada 