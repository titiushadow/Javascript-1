const entrada1 =  prompt("Informe o primeiro numero: ")
const entrada2 = prompt("Informe o segundo numero: ")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const divisao = x / y
const multiplicacao = x * y 

alert(
    "Resultado: \n" + 
    "\n Soma: " + soma + 
    "\n subtracao: " + subtracao +  
    "\n divisao: " + divisao +
    "\n multiplicacao: " + multiplicacao
)