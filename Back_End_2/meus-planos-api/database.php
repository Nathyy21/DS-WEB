<?php

class Database extends PDO
{
    private $DB_NAME     = 'meus_planos';
    private $DB_USER     = 'root';
    private $DB_PASSWORD = '';
    private $DB_HOST     = '127.0.0.1';
    private $DB_PORT     = 3306;

    public function __construct()
    {
        try {
            parent::__construct(
                "mysql:host=$this->DB_HOST;port=$this->DB_PORT;dbname=$this->DB_NAME;charset=utf8",
                $this->DB_USER,
                $this->DB_PASSWORD,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]
            );
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode([
                'status'  => 'error',
                'message' => 'Falha na conexão com o banco.',
                'detalhe' => $e->getMessage()
            ]);
            exit;
        }
    }

    public function executeQuery(string $query, array $parameters = [])
    {
        $stmt = $this->prepare($query);
        foreach ($parameters as $key => $value) {
            $stmt->bindValue($key, $value);
        }
        $stmt->execute();
        return $stmt;
    }
}
