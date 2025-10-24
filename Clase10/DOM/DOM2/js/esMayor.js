let numero= prompt("Ingrese un numero: ")
let num2= prompt("Ingrese otro numero: ")

if(numero > num2){
    document.querySelector(".respuesta").innerText= numero + " es mayor a " + num2
}
else{
document.querySelector(".respuesta").innerText= num2 + " es mayor a " + numero
}