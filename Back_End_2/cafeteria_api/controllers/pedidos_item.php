<?php

require_once 'database.php';
$database = new Database();

$method   = $_SERVER['REQUEST_METHOD'];
$path     = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path     = trim($path, '/');
$segments = explode('/', $path);

if (isset($segments[2])) {
    $id = $segments[2];
} else {
    $id = null;
}

switch($method){
    // -------------------------------------------------------
    // GET /produtos 
    // GET /produtos/1
    // -------------------------------------------------------
    case 'GET':
        //pega todos os dados da tabela Pedido por Id
        $resultado = $database->executeQuery(
            'SELECT * FROM pedido_itens WHERE pedido_id = :id',[':id' => $id]);
        $pedido_item = $resultado->fetchAll();//pega por associação
        
        //"converte" para formato JSON
        echo json_encode([
            'status' => 'success',
            'data' => $pedido_item
        ]);

        break;
    // -------------------------------------------------------
    // POST /pedidos_item
    // Body: { "nome": "Café Expresso" }
    // -------------------------------------------------------
    /*case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $pedido_id = trim($body['pedido_id']);
        $produto_id = trim($body['produto_id']);
        $quant = trim($body['quantidade']);
        $preco = trim($body['preco']);

        if(!$produto_id){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo ID do Produto não informado'
            ]);
            break;
            
        }
        if(!$quant){
            echo json_encode([
                'status' => 'error',
                'message' => 'Campo PREÇO não informado'
            ]);
            break;
            
        }

        $database->executeQuery(
            'INSERT INTO pedidos (cliente) VALUES (:cliente)',
            [':cliente' => $cliente]
            
        );

        http_response_code(201);
        echo json_encode([
            'status' => 'success',
            'message' => 'Pedido cadastrado com sucesso',
            'idPedido' => $database->lastInsertId()
        ]);

        break;
    // -------------------------------------------------------
    // PUT /categorias/1
    // Body: { "nome": "Salgados" }
    // -------------------------------------------------------
    case 'PUT':
        
        break;
    // -------------------------------------------------------
    // DELETE /categorias/1
    // -------------------------------------------------------
    case 'DELETE':

        if(!$id){
            http_response_code(400);
            echo json_encode([
                'status' => 'error',
                'message' => 'Informe o ID do Pedido na URL'
            ]);
            break;
        }
        $pedidos = $database->executeQuery(
            'DELETE FROM pedidos WHERE id = :id',
            [':id' => $id]
        );

        if($pedidos->rowCount() === 0){
            http_response_code(404);
            echo json_encode([
                'status' => 'error',
                'message' => 'Pedido não encontrado!'
            ]);
            break;
        }

        echo json_encode([
            'status' => 'success',
            'message' => 'Pedido removido com sucesso!'
        ]);
        break;*/
    // -------------------------------------------------------
    // Método não permitido
    // -------------------------------------------------------
    default:
        http_response_code(405);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Método não permitido.'
        ]);
}


?>