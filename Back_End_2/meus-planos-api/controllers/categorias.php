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
        $resultado = $database->executeQuery('SELECT * FROM categorias ORDER BY nome ASC');
        echo json_encode(['status' => 'success', 'data' => $resultado->fetchAll()]);
        break;

    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        $nome = trim($body['nome'] ?? '');

        if (!$nome) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'Nome da categoria é obrigatório.']);
            break;
        }

        $database->executeQuery('INSERT INTO categorias (nome) VALUES (:nome)', [':nome' => $nome]);
        http_response_code(201);
        echo json_encode(['status' => 'success', 'message' => 'Categoria criada.', 'id' => $database->lastInsertId()]);
        break;

    case 'DELETE':
        if (!$id) {
            http_response_code(400);
            echo json_encode(['status' => 'error', 'message' => 'ID não informado.']);
            break;
        }

        $database->executeQuery('DELETE FROM categorias WHERE id = :id', [':id' => $id]);
        echo json_encode(['status' => 'success', 'message' => 'Categoria removida.']);
        break;

    default:
        http_response_code(405);
        echo json_encode(['status' => 'error', 'message' => 'Método não permitido.']);
}
