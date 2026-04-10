
var divResposta = document.getElementById("resposta")
var inputNome = document.getElementById('nome')

document.addEventListener('DOMContentLoaded', getCategorias)
var novaCategoria = document.getElementById('botaoEnviar')
novaCategoria.addEventListener('click', postCategorias)


async function getCategorias() {
    const requisicao = await fetch("http://localhost/meus-planos-api/categorias")

    var resposta = await requisicao.json()


    let linhas = '';
    resposta.data.forEach(categoria =>{
        linhas += `            
            <tr>
                <td>${categoria.id}</td>
                <td>${categoria.nome}</td>
                <td><button class="botao" onclick ="deleteCategoria(${categoria.id})">Deletar</button></td>
            </tr>`;
    });

    divResposta.innerHTML =
        `<table class='table_cat'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>`;

    console.log('Resposta API: ', resposta)

}


async function  postCategorias() {
    var requisicao = await fetch("http://localhost/meus-planos-api/categorias/",{
        method: "POST",
        body: JSON.stringify({nome: inputNome.value})
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    //limpa o campo
    inputNome.value = ""

    getCategorias()

}

async function deleteCategoria(id) {
    var requisicao = await fetch("http://localhost/meus-planos-api/categorias/" + id,{
        method: "DELETE"  
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    alert("Certeza que irá apagar esta categoria?");
    getCategorias()

}
