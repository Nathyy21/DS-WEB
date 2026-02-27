var botaoFundo = document.getElementById('botaoFundo')
var sol = document.getElementById('sol');
var lua = document.getElementById('lua');
var tituloFundo1 = document.getElementById('titulo1');
var tituloFundo2 = document.getElementById('titulo2');

var evee = document.getElementById('evee');

var bolinha = document.getElementById('bolinha');
var area = document.getElementById('area');
var desenhando = false;

sol.addEventListener('click', function(){
    document.body.style.backgroundColor = "white";
    tituloFundo1.style.color = "black";
    tituloFundo2.style.color = "black";

});

lua.addEventListener('click', function(){
    document.body.style.backgroundColor = "black";
    tituloFundo1.style.color = "white";
    tituloFundo2.style.color = "white";

});

evee.addEventListener('mouseenter', function(){
    this.src = 'eveeFinal.png';
});

evee.addEventListener('mouseleave', function(){
    this.src = 'eveeUM.png';
});

area.addEventListener('mousemove', function(event){
    y = event.clientY;
    x = event.clientX;
});
setInterval(function () {
    bolinha.style.marginTop = y + "px"
    bolinha.style.marginLeft = x + "px"
}, 60);

area.addEventListener("mousemove", function(event){
    bolinha.style.marginTop = event.offsetY + "px"
    bolinha.style.marginLeft = event.offsetX + "px"


});

area.addEventListener('mousedown', function(){
    desenhando = true;
});

area.addEventListener('mouseup', function(){
    desenhando = false;
});

area.addEventListener('mousemove',function(event){
    if(desenhando){
        event.preventDefault();
        let ponto = document.createElement("div"); //cria o ponto(rastro)
        ponto.classList.add('ponto');

        ponto.style.left = event.offsetX + 'px'; //posicionamento X Y
        ponto.style.top = event.offsetY +'px';

        area.appendChild(ponto);

    }
});
