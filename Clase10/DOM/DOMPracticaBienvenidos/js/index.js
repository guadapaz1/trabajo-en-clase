alert("Bienvenidos a mi sitio")
let confirma= confirm("¿Esta seguro que quiere avanzar?")
if (confirma){
    document.querySelector(".saludo").innerText= "Qué alegría que quieras continuar tu visita"
    let nombre= prompt("Ingrese su nombre")
    document.querySelector("h1").innerText= "Bienvenido " + nombre
    let edad= prompt("¿Cuantos años tenes?")
    if (edad>17){
        let programacion= confirm("Te gusta la programacion?")
        if (programacion){
            document.querySelector(".background-img").innerHTML= "<img src='./img/programmer.jpeg' alt=''>"
        }
        else{
            document.querySelector(".background-img").innerHTML= "<img src='./img/gatito.jpeg' alt=''>"
        }
        nuevaImg= prompt("Ruta de la nueva imagen:")
        let avatar= document.querySelector(".avatar");
        avatar.src= nuevaImg

        let pelicula = {
            nombre: "",
            director: "",
            duracion: 0,
            actor: ""
        }
        pelicula.nombre= prompt("Nombre de la pelicula:")
        pelicula.director= prompt("Director de la pelicula:")
        pelicula.duracion= prompt("Duracion de la pelicula:")
        pelicula.actor= prompt("Actor de la pelicula:")

        document.querySelector("#nombre").innerText= "Nombre: " + pelicula.nombre
        document.querySelector("#director").innerText= "Director: " + pelicula.director
        document.querySelector("#duracion").innerText= "Duracion: " + pelicula.duracion
        document.querySelector("#actor").innerText= "Actor: " + pelicula.actor

         let lista= document.querySelector("#pelicula");
        lista.style.display= "block"
    }
    else if (edad < 18){
    let doc= document.querySelector(".container-general");
    doc.style.display= "none";
    let acceso= document.querySelector("#accesoDenegado");
    acceso.style.display= "block";
    }
}
else{
    document.querySelector(".saludo").innerText= "Lamentamos que no quieras continuar tu visita"
}