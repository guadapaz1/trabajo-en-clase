let misDatos= {
    nombre: "Guadalupe",
    apellido: "Paz",
    edad: 18,
    dni:  47787094,
    comidasfavoritas: ["sushi", "milanesa", "hamburguesa"],
    saludar: function(){
        return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primer comida favorita es " + this.comidasfavoritas[0]
    }
}
    console.log(misDatos.saludar());
    
let auto= {
    marca: "Peugeot",
    modelo: 208,
    año: 2024,
    color: "Negro",
    posicion: 0,
    avanzar: function(n){
        return this.posicion=this.posicion + n;
    },
    retroceder: function(n){
        return this.posicion=this.posicion - n;
    }
}
auto.avanzar(3)
auto.retroceder(1)
console.log(auto.posicion);

let nuevoAuto= {
    marca: "Peugeot",
    modelo: 208,
    año: 2024,
    color: "Negro",
    posicion: 0,
    moverse: function(n){
        return this.posicion=this.posicion + n; 
    }
}
nuevoAuto.moverse(5)
nuevoAuto.moverse(-2)
console.log(nuevoAuto.posicion);

let ironMan= {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes:  ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(n){
    this.energia= this.energia - 10
    return "Poder elegido de " + this.nombre + ":" + this.poderes[n] + ". Energia restante:" + this.energia
    }
}
let Hulk= {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes:  ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(n){
    this.energia= this.energia - 10
    return "Poder elegido de " + this.nombre + ":" + this.poderes[n] + ". Energia restante:" + this.energia
    }
}
ironMan.getPoder(0)
Hulk.getPoder(1)
ironMan.getPoder(2)
Hulk.getPoder(1)
console.log((ironMan.getPoder(2)));
console.log((Hulk.getPoder(1)));
console.log((ironMan.getPoder(0)));
console.log((Hulk.getPoder(2)));



