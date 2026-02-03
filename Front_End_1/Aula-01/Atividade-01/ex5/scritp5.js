var capital = Number(prompt("Digite o capital inicial:"));
var taxa = Number(prompt("Digite o a taxa de juros mensal:"));
var tempo = Number(prompt("Digite o tempo (em meses):"));

var montante = capital * ((1+(taxa/100)) ** tempo);

alert("O montante será: " + montante.toFixed(2));