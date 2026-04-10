
var divResposta = document.getElementById("resposta") //onde aparece a tabela
var inputNome = document.getElementById('nomeMeta') //nome da meta

document.addEventListener('DOMContentLoaded', getItens)
var novoItem = document.getElementById('botaoEnviar')
novoItem.addEventListener('click', postItens)


// =================== APARECER CATEGORIAS NO SELECT ============================
async function pegarCategorias() {
    //acessa a rota para pegar os nomes das categorias
    const requisicao = await fetch("http://localhost/meus-planos-api/categorias")  
    var resposta = await requisicao.json()

    console.log('Dados recebidos: ', resposta)

    const selectCat = document.getElementById('selectCat')//tag select
    const categorias = resposta.data //garante que pegou os dados

    let lista = categorias.map(categoria =>`
            <option value="${categoria.id}">${categoria.id} - ${categoria.nome}</option>
        `).join("");

    selectCat.innerHTML = `<option value="">Selecione uma categoria</option>${lista}`; //cria uma nova option
}

pegarCategorias();

async function getItens() {
    const requisicao = await fetch("http://localhost/meus-planos-api/itens")

    var resposta = await requisicao.json()


    let linhas = '';
    resposta.data.forEach(item =>{ //lista item por item
        linhas += `            
            <tr>
                <td><input type="checkbox" class='checkbox' onclick="alterarStatus(${item.id},this)" ></td>
                <td>${item.id}</td>
                <td id='item-${item.id}'>${item.nome}</td>
                <td>${item.categoria_nome}
                <td><button class="botao" onclick ="deleteItem(${item.id})">Deletar</button></td>
            </tr>`;
    });

    //==================== CRIA A TABELA ========================
    divResposta.innerHTML =
        `<table class='table_item'>
            <thead>
                <tr>
                    <th class="status" id='status'>Status</th>
                    <th>ID</th>
                    <th id='nomeItem'>Nome</th>
                    <th>Categoria ID</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>`;

    console.log('Resposta API: ', resposta)

}


async function  postItens() {
    const selectCat = document.getElementById('selectCat')

    var requisicao = await fetch("http://localhost/meus-planos-api/itens/",{
        method: "POST",
        body: JSON.stringify({
            nome : inputNome.value,
            categoria_id : selectCat.value //valores que colocou no select
        })
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    //limpa o campo
    inputNome.value = ""
    selectCat.value = ""

    getItens()

}

async function deleteItem(id) {
    var requisicao = await fetch("http://localhost/meus-planos-api/itens/" + id,{
        method: "DELETE"  
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    alert("Certeza que irá apagar esta meta?");
    getItens()

}

async function alterarStatus(id,checkbox) {

    // Ss tiver marcado = 1, se não = 0
    if (checkbox.checked == true) {
        valorStatus = 1;
    } else {
        valorStatus = 0;
    }
    var requisicao  = await fetch("http://localhost/meus-planos-api/itens/" + id,{
        method:"PUT",
        body: JSON.stringify({
            feito : valorStatus //valores que colocou no checkbox
        })
    })

    var resposta = await requisicao.json()

    nomeItem = document.getElementById("item-" + id)

    if(valorStatus == 1){
        nomeItem.style.color = "grey";
        nomeItem.style.textDecoration = "line-through";
    }else{
        nomeItem.style.color = "black";
        nomeItem.style.textDecoration = "none";
    }

    console.log(resposta)

}





//this = vai pegar as coisas daquele id em específico
//checked = forma de verificar no javascript se a checkbox esta marcada ou não, e manipular isso
