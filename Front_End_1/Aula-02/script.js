//funções em Javascript:

function somarNum(num1,num2){
    return num1+num2;
}

let resultado = somarNum(5,10)
console.log(resultado);

resultado = somarNum(50,100);
console.log(resultado);

//trabalhando com data e hora:
let dataAtual = new Date()
console.log('Data do sistema: ' + dataAtual.toISOString());

let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let min = dataAtual.getMinutes();
let seg = dataAtual.getSeconds();
console.log('Data do cotidiano: ' + `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`);

//====================================================================================
//Outro exemplo de Date
let hoje = new Date();
let diasParaAdicionar = 7;

//Cria uma nova data a partir da data artual:
let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasParaAdicionar);

console.log('Data depois de uma semana (sete dias): ' + novaData.toLocaleDateString()); //exibe a data local(Brasil), ou seja dia/mes/ano
//============================================
//subtrair datas:

let data1 = new Date('2026-02-06');
let data2 = new Date('2026-02-12');

let diferencaData = data2 - data1; //da resultado em milisegundos

let diferencaDias = diferencaData /(1000*60*60*24); //conversao
console.log(`Diferença de: ${diferencaDias} dias`);
//=======================================================================

//manipilando o DOM

document.getElementById("conteudo").innerHTML = '<p>Olá mundo!</p>';

var valor = document.getElementById("conteudo").innerHTML;
console.log(valor);


//usando o setAttribute e o getAttribute:
document.getElementById("foto").setAttribute("src","guaxinim.jpg");//coloco o atributo src e qual imagem fica no src

console.log(document.getElementById("foto").getAttribute("src")); //pego o nome que está dentro do atributo src

//Alterando propriedades CSS:
document.getElementById("conteudo").style.backgroundColor = "lightblue";
document.getElementById('conteudo').style.width = "200px";
document.getElementById('conteudo').style.height = '35px';

//document.getElementById("foto").style.width = "680px";

//===================================================================

//criando uma funcao em um botao:
function mudaTam(){
    document.getElementById("foto").style.width = "1000px";
}