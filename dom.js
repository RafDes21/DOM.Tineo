let nombre = prompt("Ingrese su nombre")
let sub = prompt("que actividad desea realizar")
const array = [`Español: hola ${nombre.toUpperCase() }`, `Ingles: hello ${nombre.toUpperCase() }`, `Frances: salut ${nombre.toUpperCase() }`, `Alemán: Hallo ${nombre.toUpperCase() }`, `Italiano: Ciao ${nombre.toUpperCase() }`, `Portugués: Olá ${nombre.toUpperCase() }`]
const receta = []

//modoficación en h1
const titulo = document.getElementById(`titulo`)
titulo.innerText = array[Math.round(Math.random() * 5)]
//modoficación en h2
const subTitulo = document.getElementById(`sub_titulo`)
subTitulo.innerText = `Armemos una lista antes de empezar a ${sub}`

//modoficación en button y imput
const boton = document.getElementById(`boton`)

boton.addEventListener(`click`, () => {

    const input = document.getElementById(`entrada`)
    const nombreProducto = input.value

    const root = document.getElementById(`root`)
    const nuevoProducto = document.createElement(`li`)
    nuevoProducto.innerText = nombreProducto
    root.appendChild(nuevoProducto)
    receta.push(nombreProducto)
    console.log(receta)
    receta.forEach(elemento => console.log(elemento))
})