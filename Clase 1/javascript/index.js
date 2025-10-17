function rectangulo(altura,ancho){
return altura * ancho;
}
function triangulo(base, h){
return (base*h)/2;
}
function dolarHoy(precioPesos){
return precioPesos * 13000;
}
function precioFinal  (precio){
return precio + (precio*0.21);
}
function mitad (numero){
return numero/2;
}
function calculadoraBasica (num1, num2, operacion){
return operacion(num1,num2);
}
function sumar(num1,num2){
return num1 + num2;
}
function multiplicar(num1,num2){
    return  num1 * num2;
}
function restar(num1,num2){
    return num1 * num2;
}
function dividir(num1,num2){
    return num1/num2;
}
console.log(rectangulo(5,2));
console.log(triangulo(3,6));
console.log(dolarHoy(10));
console.log(precioFinal(20));
console.log(mitad(2));
console.log(calculadoraBasica(2,8,sumar));

function siguiente(numero) {
  return numero + 1;
}
function doble(numero) {
  return 2 * numero;
}
function siguienteDelDoble(numero) {
   return siguiente(doble(numero));
}
console.log(siguiente(3));
console.log(doble(4));
console.log(siguienteDelDoble(6));

function anterior(numero){
    return numero-1;
}
function triple(numero){
    return numero*3
}
function anteriorDelTriple(numero){
    return anterior(triple(numero));
}
console.log(anterior(5));
console.log(triple(3));
console.log(anteriorDelTriple(4));





