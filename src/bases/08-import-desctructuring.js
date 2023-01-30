//import {heroes} from './data/heores'
import {heroes} from '../data/heores'


//------------------------------------------

//FIND

//Funcion que recibe un parametro (integer), y que usa find
//dentro, se destructura un Obj y se extra la propiedad id
//en el callback recorre cada valor(OBJ) y se pone de condicion 
//la igualdad del parametro con el numero de id 
const getHeroeById = (idI)=>{
   return heroes.find(({id})=>id === idI)
}
//15, esta destructurando el Obj que retorna find y se extrae name
//en una variable, si se cambia el integer id, cambia el name
const {name} = getHeroeById(1); 
//console.log(name)

//------------------------------------------

//FILTER

//function recibe un parametro string, recorre cda valor del arr
//filter no muta, pero crea un new array
//extrae la propieda owner y el valor lo pasa a minusc con lower
//condicion de igual estricta con el param y el valor encontrado
//devuelve todos los obj con el string owner ingresado

const getHeroeByOwner = (creador)=>{
   return heroes.filter(({owner}) => owner.toLowerCase() === creador)
}

//console.log(getHeroeByOwner("dc"))


//----------------------------------
//ej para fetch

export const getHeroeById2 = (idI)=>{
   return heroes.find(({id})=>id === idI)
}
//const {name:name2} = getHeroeById2(1); 
//console.log(name2)

