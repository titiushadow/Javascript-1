const palavra = prompt("Informe uma palavra:")
let palavra_invertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    palavra_invertida += palavra[i]
}

if (palavra === palavra_invertida) {
    alert(palavra + " é uma políndromo!")
} else {
    alert(
        palavra + " não é um políndromo!\n\n" +
        palavra + " !== " + palavra_invertida
    )
}