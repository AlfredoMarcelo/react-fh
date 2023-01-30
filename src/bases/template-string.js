const nombre = "alfredo"
const apellido = "supanta"

const nombreCompleto = `${nombre} ${apellido}`

console.log('nombreCompleto', nombreCompleto)

function getSaludo(nombre){
    return "Hola " + nombre
}

// dentro de templ string puede ir una funcion
console.log(`Este texto => ${getSaludo(apellido)}`)