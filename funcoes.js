//Funções usadas nos exercicios

//Função para pular linha
var pulaLinha = function() {
    document.write('<br>')
}

//Função de calculo de IMC
var calculoIMC = function(peso, altura) {
    var imc2 = peso / (altura * altura)
    document.write(`Seu IMC é : ${imc2.toFixed(2)}`)
}

//Função para contar os dias que a pessoa viveu com base em quantos anos ela tem
var dias = function(idade){
    document.write(idade * 365)
}
//Calculo de batimentos dessa pessoa
var batimentos = function(quantia) {
    document.write(quantia * 24 * 60 * 80)    
}

//Função para pular linha após a frase
var mostra = function(frase) {
    document.write(frase)
    pulaLinha()
} 

//Função para substituir o document.write
var mostrar = function(frase) {
    document.write(frase + '<br>')
}

//Funções de teste
var primeira = function() {
    console.log("1 - antes")
    segunda()
    console.log("1 - depois")
}

var segunda = function() {
    console.log("2 - antes")
    terceira()
    console.log("2 - depois")
}

var teceira = function() {
    console.log("3")
}

primeira

//Função para calcular pontos de um time de futebol considerando cada vitoria com 3 pontos e empate como 1 ponto
var calculoPontos = function(vitorias, empates) {
    return (vitorias * 3) + empates
}