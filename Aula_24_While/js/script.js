let velocidade = 80

while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h")
    velocidade -= 20
    alert("Diminuido 20 km/h")

    if (velocidade === 0){
        break
    }
}

alert("O carro parou.")