let nacionalidad= prompt("Ingrese su nacionalidad")
let profesion= prompt("Ingrese su profesion")
let kms= prompt("Cuantos kms camina por dia?")

function filosofoHipster(n,p,k){
    if((n === "Argentina") && (p === "musico") && (k >= 2)){
        return "Soy un filósofo hipster"
    }
    else{
        return "Aún no soy filósofo hipster"
    }
}

console.log(filosofoHipster(nacionalidad,profesion,kms));
