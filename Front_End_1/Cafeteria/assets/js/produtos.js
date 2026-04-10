
var divResposta = document.getElementById("resposta")

var inputNome = document.getElementById('nome')
var inputPreco = document.getElementById('preco')
var input_id_cat = document.getElementById('id_cat')
var inputDisp = document.getElementById('dispon')

document.addEventListener('DOMContentLoaded', getProdutos)

var novaCategoria = document.getElementById('botaoEnviar')
novaCategoria.addEventListener('click', postProdutos)


async function getProdutos() {
    const requisicao = await fetch("http://localhost/cafeteria_api/produtos")

    var resposta = await requisicao.json()


    let linhas = '';
    resposta.data.forEach(produto =>{
        linhas += `            
            <tr>
                <td>${produto.id}</td>
                <td>${produto.nome}</td>
                <td>${produto.preco}</td>
                <td>${produto.categoria_id}</td>
                <td>${produto.disponivel}</td>
                <td><button class="botao" onclick ="deleteProduto(${produto.id})">Deletar</button></td>
            </tr>`;
    });

    divResposta.innerHTML =
        `<table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Categoria (ID)</th>
                    <th>Disponível</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>`;

    console.log('Resposta API: ', resposta)

}


async function  postProdutos() {
    var requisicao = await fetch("http://localhost/cafeteria_api/produtos/",{
        method: "POST",
        body: JSON.stringify(
            {
                nome: inputNome.value,
                preco: inputPreco.value,
                categoria_id: input_id_cat.value,
                disponivel: inputDisp.value
            })
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    //limpa o campo
    inputNome.value = ""
    inputPreco.value = ""
    input_id_cat.value = ""
    inputDisp.value = ""

    getProdutos()

}

async function deleteProduto(id) {
    var requisicao = await fetch("http://localhost/cafeteria_api/produtos/" + id,{
        method: "DELETE"  
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    getProdutos()

}
