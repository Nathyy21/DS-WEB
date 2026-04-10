
var divResposta = document.getElementById("resposta")
var inputCliente = document.getElementById('cliente')

document.addEventListener('DOMContentLoaded', getItensPedidos)
var novoPedido = document.getElementById('botaoEnviar')
novoPedido.addEventListener('click', postPedidos)

//Pegando a variavel ID da URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id")


//======= COLOCA O NOME NA COMANDA BASEADO NO ID E NOME ===========
/*async function getNomePedido() {
    //acessa a rota para pegar os nomes das categorias
    const requisicao = await fetch("http://localhost/cafeteria_api/pedidos")  
    var resposta = await requisicao.json()

    console.log('Dados recebidos: ', resposta)

    let pedidoNome = document.getElementById('pedido_nome')
    const pedidos = resposta.data || resposta

    let comanda = pedidos
        .map(pedido => `<p>Pedido#${pedido.id} - ${pedido.cliente}</p>`)
        .join('')

    pedidoNome.innerHTML = comanda //cria o nome do pedido

}
getNomePedido()*/


//============ PEGA OS ITENS DO PEDIDO ======================
async function getItensPedidos(id_pedido) {
    const requisicao = await fetch(`http://localhost/cafeteria_api/pedidoItem/` + id_pedido, )

    var resposta = await requisicao.json()

    console.log('Resposta API: ', resposta)


    // garante que data seja sempre um array

    // gera as linhas da tabela com os itens
    const linhas = resposta.data.map(pedido_item =>`            
        <tr>
            <td>${pedido_item.id}</td>
            <td>${pedido_item.produto_id}</td>
            <td>${pedido_item.quantidade}</td>
            <td>${pedido_item.preco}</td>
            <td><button class="botao" onclick ="deletePedido(${pedido_item.id})">Deletar</button></td>
        </tr>
    `).join("");
    
    console.log("Dados das linhas: ",linhas)
    divResposta.innerHTML =
        `<table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody>
                ${linhas}
            </tbody>
        </table>`;

}


async function  postPedidos() {
    var requisicao = await fetch("http://localhost/cafeteria_api/pedidoItem/",{
        method: "POST",
        body: JSON.stringify({
            cliente: inputCliente.value
        })
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    //limpa o campo
    inputCliente.value = ""

    getItensPedidos()

}

async function deletePedido(id) {
    var requisicao = await fetch("http://localhost/cafeteria_api/pedidoItem/" + id,{
        method: "DELETE"  
    })

    var resposta = await requisicao.json()
    console.log(resposta)

    getItensPedidos()

}
