var contador_aluno = 0;

function cadastrar(){
    contador_aluno++;

    let novoAluno = document.createElement('li');

    let novoCdNome = document.getElementById('nomeAluno').value;
    let novoCdEmail = document.getElementById('emailAluno').value;
    let novoCdRA = document.getElementById('raAluno').value;
    let novoCdTel = document.getElementById('telefone').value;
    let novoCdTurma = document.getElementById('turma').value;

    novoAluno.textContent = contador_aluno + ' - ' + novoCdNome + ' | ' + novoCdEmail +' | ' + novoCdRA + ' | ' + novoCdTel + ' | ' + novoCdTurma + '  ';

    novoAluno.setAttribute('id',contador_aluno);


    let botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.setAttribute('onclick',`remover(${contador_aluno})`);

    novoAluno.appendChild(botaoRemover);//adiciona o botão ao novo item
    document.getElementById("lista_de_cadastro").appendChild(novoAluno);

}

function remover(itemListaAluno){
    var aluno = document.getElementById(itemListaAluno);
    document.getElementById("lista_de_cadastro").removeChild(aluno);
}