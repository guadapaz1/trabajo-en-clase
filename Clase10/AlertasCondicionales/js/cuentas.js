let num= prompt("Ingrese un numero")
let num2= prompt("Ingresa otro numero")

function multiplicar(num,num2){
    let resultado= num * num2
    return ("El resultado de multiplicar " + num + " y " + num2  + " es: " + resultado)
}

console.log(multiplicar(num,num2));
