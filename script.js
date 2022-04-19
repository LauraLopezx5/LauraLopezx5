

let numero
let porcentaje
let resultado

do{
    numero = parseFloat(prompt("Ingrese un número"))
    porcentaje = parseFloat(prompt("Ingrese un porcentaje"))
    if(isNaN(numero)||isNaN(porcentaje)){
        alert("Ingrese números válidos")
    }
}while(isNaN(numero)||isNaN(porcentaje))

resultado = porcentaje*numero/100

console.log ("el", porcentaje, "% de", numero, "es =", resultado)