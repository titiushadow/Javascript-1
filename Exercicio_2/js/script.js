const carro1 = prompt("Insira a velocidade do primeiro carro:");
const carro2 = prompt("Insira a velocidade do segundo carro:");

if(carro1 > carro2) {
    alert("O primeiro carro é mais rapido")
}
else if (carro2 > carro1) {
    alert("O segundo carro é mais rapido")
} 
else {
    alert("As velocidades são iguais!")
}