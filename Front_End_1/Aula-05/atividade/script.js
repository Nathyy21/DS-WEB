var botaoFundo = document.getElementById('botaoFundo')
var sol = document.getElementById('sol');
var lua = document.getElementById('lua');
var tituloFundo = document.getElementById('titulo1');
var evee = document.getElementById('evee');

sol.addEventListener('click', function(){
    document.body.style.backgroundColor = "white";
    tituloFundo.style.color = "black";
});

lua.addEventListener('click', function(){
    document.body.style.backgroundColor = "black";
    tituloFundo.style.color = "white";

});

evee.addEventListener('mouseenter', function(){
    this.src = 'eveeFinal.png';
});

evee.addEventListener('mouseleave', function(){
    this.src = 'eveeUM.png';
});