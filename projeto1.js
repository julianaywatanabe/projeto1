//nome do herói
console.log("Digite o nome do seu jogador:")
let nomeHeroi = "Camille"

//xp no herói
let xpHeroi = 7000

//nível do herói
let nivelHeroi = ""
if(xpHeroi < 1000){nivelHeroi = "Bronze"}
    else if((xpHeroi >= 1000) && (xpHeroi < 2000)) {nivelHeroi = "Bronze"}
    else if((xpHeroi >= 2000) && (xpHeroi < 5000)) {nivelHeroi = "Prata"}
    else if((xpHeroi >= 5000) && (xpHeroi < 7000)){nivelHeroi = "Ouro"}
    else if((xpHeroi >= 7000) && (xpHeroi < 8000)) {nivelHeroi = "Platina"}
    else if((xpHeroi >= 8000) && (xpHeroi < 9000)) {nivelHeroi = "Ascendente"}
    else if((xpHeroi >= 9000) && (xpHeroi < 10000)) {nivelHeroi = "Imortal"}
    else{nivelHeroi = "Radiante"}

//output
console.log("O herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + "!! <3")
