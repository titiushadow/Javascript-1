const atacante = prompt("Qual é o nome do personagem atacante?")
const poder_ataque = prompt("Qual é o seu poder de ataque?")

const defensor = prompt("Qual é o nome do personagem defensor?")
let pontos_vida = prompt("Quantos pontos de vida ele possui?")
const poder_defesa = prompt("Qual é o seu poder de defesa?")
const escudo = prompt("Ele possui um escudo? (Sim/Não)")

let dano_causado = 0

if(poder_ataque > poder_defesa && escudo === "Não") {
    dano_causado = poder_ataque - poder_defesa
} 
else if (poder_ataque > poder_defesa && escudo === "Sim"){
    dano_causado = (poder_ataque - poder_defesa) / 2
}

pontos_vida -= dano_causado

alert(atacante + " causou " + dano_causado + " pontos de dano em " + defensor)
alert(
    atacante + "\nPoder de ataque: " + poder_ataque + "\n\n" +
    defensor + "\nPontos de vida: " + pontos_vida +
    "\nPoder de defesa: " + poder_defesa + "\nPossui escudo: " + escudo
)