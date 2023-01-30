 const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "biorn",
    equipo:{
        nombre: "chelsea",
        posicion:"delantero"
    }
 }

 /* const {nombre, equipo} = persona;
 console.log(nombre)
 console.log(equipo) */

 const retornaPersona = (usu) =>{
    const {edad,clave,nombre} = usu
    //console.log(edad,clave,nombre)
 }

 retornaPersona(persona)

 //Se destructura altiro, solo se envia
 //el obj y se dest en los param
 const retornaPersona3 = ({edad = 10,clave,nombre}) =>{
    //console.log(edad,clave,nombre)
 }

 retornaPersona3(persona)

 //3 era forma
 const us2 = ({rango, edad,clave,nombre}) =>{
    return{
        nombreClave: clave,
        anios: edad,
        direccion:{
            calle: "hornos",
            numero:2343,
        }
    }
 }

 const avenger = us2(persona);
 console.log(avenger)//contien obj entero
 //Destructuring de OBJ retornado de funcion
 const {nombreClave, anios} = us2(persona);
 console.log(nombreClave, anios)//destructura en varia
 
 //Destructuring de obj dentro de otro Obj
 const {direccion:{calle,numero}} = us2(persona);
 console.log(calle, numero)