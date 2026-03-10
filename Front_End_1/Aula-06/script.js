var formulario = document.querySelector('form');
var nome = document.getElementById('nome');
var email = document.getElementById('email');

var senha = document.getElementById('senha');
var confirma_senha = document.getElementById('confirma-senha');

var cpf = document.getElementById('cpf');
var telefone = document.getElementById('telefone');
var cep = document.getElementById('cep');
var data_nasc = document.getElementById('data-nascimento');

var valor = document.getElementById('valor');
var url = document.getElementById('url');
var cartao = document.getElementById('cartao');

var resultado = document.getElementById('resultado');

var erro_nome = document.getElementById('erro-nome');
var erro_email = document.getElementById('erro-email');
var erro_senha = document.getElementById('erro-senha');
var erro_conf_senha = document.getElementById('erro-confirme-senha');
var erro_cpf = document.getElementById('erro-cpf');
var erro_tel = document.getElementById('erro-telefone');
var erro_cep = document.getElementById('erro-cep');
var erro_data_nasc = document.getElementById('erro-data-nascimento');
var erro_valor = document.getElementById('erro-valor');
var erro_url = document.getElementById('erro-url');
var erro_cartao = document.getElementById('erro-cartao');


formulario.addEventListener('submit', function(event){

    const letras = /^[a-zA-Z]+$/; //^ -> inicio de linha $ -> fim da string
    if(!nome.value){
        erro_nome.textContent = 'Preencha este campo!';
    }
    
    else if(nome.value.length < 3 || nome.value.length > 80){
        erro_nome.textContent ='O nome deve ter de 3 a 80 caracteres!';
    }
    else if(!letras.test(nome.value)){
        erro_nome.textContent ='O nome deve ter apenas letras!';
    }
    
    else{
        erro_nome.textContent = '';
    };
    event.preventDefault(); //impede o padrão (enviar o formulario, quero tratar info primeiro)
});

formulario.addEventListener('submit', function(event){

    //---------------TEXTO@TEXTO.TEXTO
    const regexEmail = /\S+@\S+\.\S+/;  //ve se tem @, ponto(.) texto após o ponto (dominio)
    if(!email.value){
        erro_email.textContent = 'Preencha este campo!';
    }
    else if(!regexEmail.test(email.value)){
        erro_email.textContent = 'E-mail inválido';
    }
    else{
        erro_email.textContent = '';
    };
    event.preventDefault();
});

formulario.addEventListener('submit',function(event){

    const temMaiusc = /[A-Z]/;
    const temNum = /[0-9]/;
    const temCaracE = /[^\w]/;
    if(senha.value.length < 8){
        erro_senha.textContent = 'Mínimo de 8 caracteres';
    }

    else if(!temMaiusc.test(senha.value)){
        erro_senha.textContent= 'Deve ter pelo menos uma letra maiúscula!';
    }
    else if (!temNum.test(senha.value)){
        erro_senha.textContent = 'Deve ter pelo menos um número!';
    }
    else if(!temCaracE.test(senha.value)){
        erro_senha.textContent = 'Deve ter pelo menos um caracter especial!';
    }

    else{
        erro_senha.textContent = '';
    }

    event.preventDefault();
});

formulario.addEventListener('submit',function(event){
    if(senha.value == confirma_senha.value){
        erro_conf_senha.textContent = '';
    }
    else{
        erro_conf_senha.textContent = 'As senhas não estão iguais!';
    }
        event.preventDefault();
});

formulario.addEventListener('submit',function(event){
    const validaCpf = /(\d{3})[.]?(\d{3})[.]?(\d{3})[-]?(\d{2})/;
    //----------- num de 0-9; o ponto deve aparecer 0 ou uma vez

    if(!cpf.value){
        erro_cpf.textContent = 'Preencha este campo!';
    }
    else if(!validaCpf.test(cpf.value)){
        erro_cpf.textContent = 'CPF inválido!';
    }
    else{
        erro_cpf.textContent = '';
    }

    event.preventDefault();
});

formulario.addEventListener('submit', function(event){
    const validaTel = /\([0-9]{2}\) 9?[0-9]{4}\-[0-9]{4}/
    //-------------------(99)      9    9999   - 9999
    if(!telefone.value){
        erro_tel.textContent = 'Preencha este campo!';
    }
    else if(!validaTel.test(telefone.value)){
        erro_tel.textContent = 'Telefone inválido!';
    }
    else{
        erro_tel.textContent = '';
    }

    event.preventDefault();

});

formulario.addEventListener('submit', function(event){
    const validaCep = /[0-9]{5}\-[0-9]{3}/
    //----------------   00000 - 000
    if(!cep.value){
        erro_cep.textContent = 'Preencha este campo!';
    }
    else if(!validaCep.test(cep.value)){
        erro_cep.textContent = 'CEP inválido!';
    }
    else{
        erro_cep.textContent = '';
    }

    event.preventDefault();

});

formulario.addEventListener('submit', function(event){

    const validaData = /[0-9]{2}\/ [0-9]{2}\/ [0-9]{4}/;

    const [dia, mes, ano] = campo_data.value.split('/') // divide por barra a data
    const dataReal = new Date(ano, mes - 1, dia);

    if(!data_nasc.value){
        erro_data_nasc.textContent = 'Preencha este campo!';
    }

    else if(!validaData.test(data_nasc.value)){
        erro_data_nasc.textContent = 'Formato de data inválido';
    }

    else if(dataReal.getFullYear() != ano || (dataReal.getMonth() + 1) != mes || dataReal.getDate() != dia){
        erro_data_nasc.textContent = 'Data inexistente!';
    }
    
    else{
        erro_data_nasc.textContent = '';
    }

    event.preventDefault();

});

formulario.addEventListener('submit',function(event){
    const validaUrl = /^(http:\/\/|https:\/\/).+/; //^ -> nada vem antes

    if(!url.value){
        erro_url.textContent = 'Preencha este campo!';
    }
    else if(!validaUrl.test(url.value)){
        erro_url.textContent = 'Url inválida';
    }
    else{
        erro_url.textContent='';
    }

    event.preventDefault();
});

formulario.addEventListener('submit', function(event){
    const validaValor = /^\d+([.]\d{2})?$/;
    
    // 1. Você precisa criar a variável antes de testar no 'else if'
    const valorNumerico = parseFloat(valor.value);

    if(!valor.value){
        erro_valor.textContent = 'Preencha este campo!';
    }
    // 2. Agora o valorNumerico existe e pode ser comparado
    else if(isNaN(valorNumerico) || valorNumerico <= 0 || valorNumerico > 15000){
        erro_valor.textContent = 'Valor deve ser entre 0.01 e 15000';
    }
    // 3. Testa o formato visual (se tem apenas números e ponto)
    else if(!validaValor.test(valor.value)){
        erro_valor.textContent = 'Use o formato 00.00';
    }
    else{
        erro_valor.textContent = ''; 
    }

    event.preventDefault();
});

formulario.addEventListener('submit', function(event){

    const validaCartao = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;


    if(!cartao.value){
        erro_cartao.textContent = 'Preencha este campo!';
    }

    else if(!validaCartao.test(cartao.value)){
        erro_cartao.textContent = 'Formato de cartão inválido';
    }
    
    else{
        erro_cartao.textContent = '';
    }

    event.preventDefault();

});

function exibirDados() {
    // Limpa o resultado anterior antes de mostrar o novo
    resultado.innerHTML = ''; 

    let lista = document.createElement("ul");
    let dados = document.createElement("li");

    // IMPORTANTE: Use .value em todos para pegar o texto, não o elemento HTML
    dados.innerHTML = `
        Nome: ${nome.value} <br>
        Email: ${email.value} <br>
        Senha: ${senha.value} <br>
        CPF: ${cpf.value} <br>
        Telefone: ${telefone.value} <br>
        CEP: ${cep.value} <br>
        Data de Nascimento: ${data_nasc.value} <br>
        Valor: ${valor.value} <br>
        URL: ${url.value} <br>
        Cartão: ${cartao.value}
    `;

    lista.appendChild(dados);
    resultado.appendChild(lista);
}