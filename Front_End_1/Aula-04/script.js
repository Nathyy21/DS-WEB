//criando contador de itens

var contador_item = 0;


function adicionar(){
    //incrementando contador de itens
    contador_item ++;                    //opercação de incremento
    //crio o item
    let  novoItem = document.createElement("li");
    let novaTarefa = document.getElementById('novaTarefa').value;

    //adiciono texto ao meu item
    novoItem.textContent = contador_item + ' - ' + novaTarefa + ' ';

    //atribuo um ID
    novoItem.setAttribute('id', contador_item);
     
    //cria o botão de remover
    let botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover'; //adiciona texto ao botão
    botaoRemover.setAttribute('onclick', `remover(${contador_item})`); //adiciona uma função ao botão
    
    novoItem.appendChild(botaoRemover);//adiciona o botão ao novo item
    document.getElementById("lista").appendChild(novoItem);
}


function remover(itemLista){

    var item = document.getElementById(itemLista);
    document.getElementById("lista").removeChild(item);
}
