let name = prompt("Ingresa tu nombre")
let age = prompt("Ingresa tu edad en número")
let country = prompt("Ingresa tu país").toLowerCase();
let city = prompt("Ingresa tu ciudad").toLowerCase();


if (age > 18  || country ==="Canada" || city === "toronto") {
    
    alert("Felicitaciones " + name +  " Eres apto/a para recibir una beca")
}

else {

alert ("No cumples los requisitos para obtener una beca")

}