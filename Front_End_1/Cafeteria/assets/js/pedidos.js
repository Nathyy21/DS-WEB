
var divResposta = document.getElementById("resposta")
var inputCliente = document.getElementById('cliente')

document.addEventListener('DOMContentLoaded', getPedidos)
var novoPedido = document.getElementById('botaoEnviar')
novoPedido.addEventListener('click', postPedidos)


async function getPedidos() {
    const requisicao = await fetch("http://localhost/cafeteria_api/pedidos")

    var resposta = await requisicao.json()


    let linhas = '';
    resposta.data.forEach(pedido =>{
        linhas += `            
            <tr>
                <td>${pedido.id}</td>
                <td>${pedido.cliente}</td>
                <td>${pedido.total}</td>
                <td>${pedido.criado_em}</td>
                <td><a href='pedidos_item.html?id=${pedido.id}' class='link_item'>Visualizar</a></td>
                <td><button class="botao" onclick ="deletePedido(${pedido.id})">Deletar</button></td>
            </tr>`;
    });

    divResposta.innerHTML =
        `<table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Total</th>
                    <th>Data de Criação</th>
                    <th colspan='2'>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>`;

    console.log('Resposta API: ', resposta)

}


async function  postPedidos() {
    var requisicao = await fetch("http://localhost/cafeteria_api/pedidos/",{
        method: "POST",
        body: JSON.stringify({
            cliente: inputCliente.value
        })
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    //limpa o campo
    inputCliente.value = ""

    getPedidos()

}

async function deletePedido(id) {
    var requisicao = await fetch("http://localhost/cafeteria_api/pedidos/" + id,{
        method: "DELETE"  
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    getPedidos()

}
