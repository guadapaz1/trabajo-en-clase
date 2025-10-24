let mensaje = "Cual es su nombre?"
let nombre= prompt(mensaje)
console.log(nombre);

let edad= prompt("Cual es su edad?")
console.log(edad);

let fanDeportes= confirm("Le gustan los deportes?")
console.log(fanDeportes);

alert("Muchas gracias " + nombre + " por responder nuestras preguntas ")

let usuario = {
    nombre: nombre,
    edad: edad,
    fanDeportes: fanDeportes,
    profesional: function(){
        if(fanDeportes){
            return "Si, soy fan de los deportes"
        }
        else{
            return "No soy tan fan aun de los deportes"
        }
    }
}
console.log(usuario.profesional());



