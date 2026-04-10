<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

$method = $_SERVER['REQUEST_METHOD'];
$path   = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path   = trim($path, '/');
$segments = explode('/', $path);

$log = date('Y-m-d H:i:s') . " | $method | $path\n";
file_put_contents('log.txt', $log, FILE_APPEND);

if ($method === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$endpoint = $segments[1] ?? '';

switch ($endpoint) {
    case 'categorias':
        require_once 'controllers/categorias.php';
        break;

    case 'itens':
        require_once 'controllers/itens.php';
        break;

    default:
        http_response_code(404);
        echo json_encode([
            'status'  => 'error',
            'message' => 'Endpoint não encontrado.'
        ]);
}
