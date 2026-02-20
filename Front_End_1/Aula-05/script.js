/*var botao = document.getElementById('btn');
botao.addEventListener('click', function (){ //função nao nomeada
    alert('Botão clicado!');

});
*/
//==================EVENTOS DO MOUSE===================

var area = document.getElementById("area");
var mensagem = document.getElementById("mensagem");
var posicao = document.getElementById('posicao');

area.addEventListener("click", function(){
    mensagem.textContent = "Clique simples detectado!";
});

area.addEventListener("dblclick", function(){
    //area.style.background = "lightgreen";

    if(area.style.background == 'lightgreen'){
        area.style.background = 'white';
    }
    else{
        area.style.background = 'lightgreen';
    }
});

area.addEventListener('mouseenter', function(){
    mensagem.textContent = 'O mouse entrou na área';
});

area.addEventListener('mouseleave', function(){
    mensagem.textContent = 'O mouse saiu da área';
});

area.addEventListener('mousemove', function(event){
    posicao.textContent = 'X: ' + event.clientX + '  ---  Y: ' + event.clientY;
});

area.addEventListener('contextmenu', function(event){

    event.preventDefault();

    alert('Botão direito clicado!');
});



//==================EVENTOS DO TECLADO===================

document.addEventListener("keydown", function(event){
    //console.log("Tecla pressionada: " + event.key);
});

document.addEventListener("keyup", function(event){
    //console.log("Tecla liberada: " + event.key);
});

document.addEventListener("keypress", function(event){
    //console.log("Caractere digitado: " + event.key);
});


document.addEventListener("keydown", function(event){
// Exibe a tecla pressionada
var campo = document.getElementById("resultado");
campo.textContent = "Tecla pressionada: " + event.key;
// Também mostra no console
console.log("Tecla pressionada: " + event.key);
});



//==================EVENTOS DO FORMULÁRIO===================

var form = document.getElementById('meuFormulario');

form.addEventListener('submit', function(event){
    event.preventDefault(); //impede o comportamento padrão do navegdor
    console.log("Formulário Enviado!");
});

var selectCurso = document.getElementById("curso");

    selectCurso.addEventListener("change", function(){
    console.log("Curso selecionado: " + selectCurso.value);

});

var nome = document.getElementById('nome');

nome.addEventListener('input', function(){
    console.log('Digitando: ' + nome.value);
});

nome.addEventListener('focus', function(){
    nome.style.background  = '#249ec7'
});

nome.addEventListener('blur', function(){
    nome.style.background = "white";
});

//==================EVENTOS DA JANELA===================
