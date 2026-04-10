<?php

require_once 'database.php';
$database = new Database();

$method = $_SERVER['REQUEST_METHOD'];
$path   = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path   = trim($path, '/');
$segments = explode('/', $path);
$id = $segments[2] ?? null;

switch ($method) {
    case 'GET':
        $query = "SELECT i.*, c.nome as categoria_nome 
                  FROM itens i 
                  JOIN categorias c ON i.categoria_id = c.id 
                  ORDER BY i.id DESC";
        $resultado = $database->executeQuery($query);
        echo json_encode(['status' => 'success', 'data' => $resultado->fetchAll()]);
        break;

    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $nome = trim($body['nome'] ?? '');
        $categoria_id = $body['categoria_id'] ?? null;

        if (!$nome || !$categoria_id) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Nome e Categoria são obrigatórios.']);
            break;
        }

        $database->executeQuery(
            'INSERT INTO itens (nome, categoria_id) VALUES (:nome, :categoria_id)',
            [':nome' => $nome, ':categoria_id' => $categoria_id]
        );
        http_response_code(201);
        echo json_encode(['status' => 'success', 'message' => 'Item criado.', 'id' => $database->lastInsertId()]);
        break;

    case 'PUT':
        if (!$id) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'ID não informado.']);
            break;
        }

        $body = json_decode(file_get_contents('php://input'), true);
        $feito = isset($body['feito']) ? (int)$body['feito'] : null;

        if ($feito === null) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Status "feito" não informado.']);
            break;
        }

        $database->executeQuery('UPDATE itens SET feito = :feito WHERE id = :id', [':feito' => $feito, ':id' => $id]);
        echo json_encode(['status' => 'success', 'message' => 'Item atualizado.']);
        break;

    case 'DELETE':
        if (!$id) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'ID não informado.']);
            break;
        }

        $database->executeQuery('DELETE FROM itens WHERE id = :id', [':id' => $id]);
        echo json_encode(['status' => 'success', 'message' => 'Item removido.']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['status' => 'error', 'message' => 'Método não permitido.']);
}
