<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Solo acepta método POST
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
    exit;
}

// Leer y decodificar JSON
$json = file_get_contents("php://input");
$data = json_decode($json);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Datos inválidos"]);
    exit;
}

$nombre = $data->nombre ?? '';
$email = $data->email ?? '';
$password = $data->password ?? '';
$tipo = 'cliente';

// Validar datos
if (empty($nombre) || empty($email) || empty($password)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Todos los campos son obligatorios"]);
    exit;
}

// Conectar a la base de datos
$servername = "bc4us7dt4vmks4t5xw2m-mysql.services.clever-cloud.com";
$username = "uxkwajdlfqzm1ver";
$dbpassword = "Wb09iMlVy6RsjamLStrI";
$dbname = "bc4us7dt4vmks4t5xw2m";
$conn = new mysqli($servername, $username, $dbpassword, $dbname, 3306);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error en la conexión"]);
    exit;
}

// Verificar si el email ya existe
$stmt = $conn->prepare("SELECT id_usuario FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "El correo ya está registrado"]);
    $stmt->close();
    $conn->close();
    exit;
}

// Hash de la contraseña
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insertar usuario
$stmt = $conn->prepare("INSERT INTO usuarios (nombre, email, contraseña, tipo) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nombre, $email, $hashed_password, $tipo);

if ($stmt->execute()) {
    http_response_code(201);
    echo json_encode(["success" => true, "message" => "Usuario registrado con éxito"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error al registrar"]);
}

$stmt->close();
$conn->close();
?>
