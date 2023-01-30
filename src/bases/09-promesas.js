import {getHeroeById2} from './bases/08-import-desctructuring'

//------------------------------------

//Promesa sincrona
const promesa = new Promise((resolve, reject)=>{
   setTimeout(()=>{
      const heroe = getHeroeById2(1);
      resolve(heroe)
      //reject("no se pudo encontrar heroe")
   }, 2000)
});

promesa.then(({name})=>{
   //console.log(`Heroe buscado es ${name}`)
})
.catch(err=>console.warn(err));


//------------------------------------

//Promesa Asincrona

const getHeroeByIdAsync = (id) => {
   return new Promise((resolve, reject)=>{
      setTimeout(()=>{
         const heroe = getHeroeById2(id);
         if(heroe){
            resolve(heroe)
         }else{
            reject("no se pudo encontrar heroe")
         }
      }, 2000)
   });
}

getHeroeByIdAsync(0)
   .then((heroe)=>console.log('heroe', heroe))
   .catch(err=>console.log(err))

/* 
Esta es otra manera de imprimir los valores del resolve y reject--   

getHeroeByIdAsync(0)
   .then(console.log)
   .catch(console.warn) */