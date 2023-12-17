
    // Função para determinar o herói com base nos pontos de experiência
function obterHeroi(pontosDeExperiencia) {
    // Definindo as faixas de pontos de experiência e seus respectivos heróis
    if (pontosDeExperiencia >= 0 && pontosDeExperiencia < 1000) {
        return "Barro";
    } else if (pontosDeExperiencia >= 1000 && pontosDeExperiencia < 5000) {
        return "Bronze";
    } else if (pontosDeExperiencia >= 5000 && pontosDeExperiencia < 10000) {
        return "Ouro";
    } else {
        return "Platina";
    }
}

// Exemplo de uso da função com diferentes pontuações
var pontosExperienciaJogador1 = 1000;
var pontosExperienciaJogador2 = 3000;
var pontosExperienciaJogador3 = 7500;

// Exibir os resultados
console.log("O Paladino é um Heroi nivel  :", obterHeroi(pontosExperienciaJogador1));
console.log("A Dama é um Heroi nivel   :", obterHeroi(pontosExperienciaJogador2));
console.log("Guardião  é um Heroi nivel :", obterHeroi(pontosExperienciaJogador3));
