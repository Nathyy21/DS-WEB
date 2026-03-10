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

    let formValido = true;
    event.preventDefault(); //impede o padrão (enviar o formulario, quero tratar info primeiro)


    //=========VALIDA NOME============
    const letras = /^[a-zA-Z]+$/; //^ -> inicio de linha $ -> fim da string
    if(!nome.value){
        erro_nome.textContent = 'Preencha este campo!';
        formValido = false;
    }
    
    else if(nome.value.length < 3 || nome.value.length > 80){
        erro_nome.textContent ='O nome deve ter de 3 a 80 caracteres!';
        formValido = false;
    }
    else if(!letras.test(nome.value)){
        erro_nome.textContent ='O nome deve ter apenas letras!';
        formValido = false;
    }
    
    else{
        erro_nome.textContent = '';
    };
    



    //=============VALIDA E-MAIL===============    
    //---------------TEXTO@TEXTO.TEXTO
    const regexEmail = /\S+@\S+\.\S+/;  //ve se tem @, ponto(.) texto após o ponto (dominio)
    if(!email.value){
        erro_email.textContent = 'Preencha este campo!';
        formValido = false;
    }
    else if(!regexEmail.test(email.value)){
        erro_email.textContent = 'E-mail inválido';
        formValido = false;
    }
    else{
        erro_email.textContent = '';
    };



    //=============VALIDA SENHA===============
    const temMaiusc = /[A-Z]/;
    const temNum = /[0-9]/;
    const temCaracE = /[^\w]/;
    if(senha.value.length < 8){
        erro_senha.textContent = 'Mínimo de 8 caracteres';
        formValido = false;
    }

    else if(!temMaiusc.test(senha.value)){
        erro_senha.textContent= 'Deve ter pelo menos uma letra maiúscula!';
        formValido = false;
    }
    else if (!temNum.test(senha.value)){
        erro_senha.textContent = 'Deve ter pelo menos um número!';
        formValido = false;
    }
    else if(!temCaracE.test(senha.value)){
        erro_senha.textContent = 'Deve ter pelo menos um caracter especial!';
        formValido = false;
    }

    else{
        erro_senha.textContent = '';
    }



    //=============VALIDA CONFIRMA SENHA ===============
    if(senha.value == confirma_senha.value){
        erro_conf_senha.textContent = '';
    }
    else{
        erro_conf_senha.textContent = 'As senhas não estão iguais!';
        formValido = false;
    }



    //=============VALIDA CPF===============
    const validaCpf = /(\d{3})[.]?(\d{3})[.]?(\d{3})[-]?(\d{2})/;
    //----------- num de 0-9; o ponto deve aparecer 0 ou uma vez

    if(!cpf.value){
        erro_cpf.textContent = 'Preencha este campo!';
        formValido = false;
    }
    else if(!validaCpf.test(cpf.value)){
        erro_cpf.textContent = 'CPF inválido!';
        formValido = false;
    }
    else{
        erro_cpf.textContent = '';
    }



    //=============VALIDA TELEFONE===============
    const validaTel = /\([0-9]{2}\) 9?[0-9]{4}\-[0-9]{4}/
    //-------------------(99)      9    9999   - 9999
    if(!telefone.value){
        erro_tel.textContent = 'Preencha este campo!';
        formValido = false;
    }
    else if(!validaTel.test(telefone.value)){
        erro_tel.textContent = 'Telefone inválido!';
        formValido = false;
    }
    else{
        erro_tel.textContent = '';
    }




    //=============VALIDA CEP===============
    const validaCep = /[0-9]{5}\-[0-9]{3}/
    //----------------   00000 - 000
    if(!cep.value){
        erro_cep.textContent = 'Preencha este campo!';
        formValido = false;
    }
    else if(!validaCep.test(cep.value)){
        erro_cep.textContent = 'CEP inválido!';
        formValido = false;
    }
    else{
        erro_cep.textContent = '';
    }



    //=============VALIDA DATA===============
    const validaData = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;

    const [dia, mes, ano] = data_nasc.value.split('/') // divide por barra a data
    const dataReal = new Date(ano, mes - 1, dia);

    if(!data_nasc.value){
        erro_data_nasc.textContent = 'Preencha este campo!';
        formValido = false;
    }

    else if(!validaData.test(data_nasc.value)){
        erro_data_nasc.textContent = 'Formato de data inválido';
        formValido = false;
    }

    else if(dataReal.getFullYear() != ano || (dataReal.getMonth() + 1) != mes || dataReal.getDate() != dia){
        erro_data_nasc.textContent = 'Data inexistente!';
        formValido = false;
    }
    
    else{
        erro_data_nasc.textContent = '';
    }




    //=============VALIDA URL===============
    const validaUrl = /^(http:\/\/|https:\/\/).+/; //^ -> nada vem antes

    if(!url.value){
        erro_url.textContent = 'Preencha este campo!';
        formValido = false;
    }
    else if(!validaUrl.test(url.value)){
        erro_url.textContent = 'Url inválida';
        formValido = false;
    }
    else{
        erro_url.textContent='';
    }



    //=============VALIDA VALOR===============
    const validaValor = /^\d+([.]\d{2})?$/;
    
    // 1. Você precisa criar a variável antes de testar no 'else if'
    const valorNumerico = parseFloat(valor.value);

    if(!valor.value){
        erro_valor.textContent = 'Preencha este campo!';
        formValido = false;
    }
    // 2. Agora o valorNumerico existe e pode ser comparado
    else if(isNaN(valorNumerico) || valorNumerico <= 0 || valorNumerico > 15000){
        erro_valor.textContent = 'Valor deve ser entre 0.01 e 15000';
        formValido = false;
    }
    // 3. Testa o formato visual (se tem apenas números e ponto)
    else if(!validaValor.test(valor.value)){
        erro_valor.textContent = 'Use o formato 00.00';
        formValido = false;
    }
    else{
        erro_valor.textContent = ''; 
    }



    //=============VALIDA CARTÃO===============
    const validaCartao = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;


    if(!cartao.value){
        erro_cartao.textContent = 'Preencha este campo!';
        formValido = false;
    }

    else if(!validaCartao.test(cartao.value)){
        erro_cartao.textContent = 'Formato de cartão inválido';
        formValido = false;
    }
    
    else{
        erro_cartao.textContent = '';
    }



    //==============ANÁLISE FINAL==============
    if(formValido){
        exibirDados();
    }else{
        resultado.innerHTML = 'Corriga os dados acima!!!'; 
    }

});

function exibirDados() {
    // Limpa o resultado anterior antes de mostrar o novo
    resultado.innerHTML = ''; 

    let lista = document.createElement("ul");
    let dados = document.createElement("li");

    
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
        Cartão: ${cartao.value} <br><br>
    `;

    lista.appendChild(dados);
    resultado.appendChild(lista);
}