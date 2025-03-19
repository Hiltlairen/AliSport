<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

// Conectar a la base de datos
$servername = "localhost";
$username = "root"; // Cambia esto por tu usuario de MySQL
$dbpassword = ""; // Cambia esto por tu contraseña de MySQL
$dbname = "nombre_de_tu_base_de_datos"; // Cambia esto por el nombre de tu base de datos

$conn = new mysqli($servername, $username, $dbpassword, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Verificar si el usuario existe
$stmt = $conn->prepare("SELECT id_usuario, nombre, contraseña, tipo FROM usuarios WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id_usuario, $nombre, $hashed_password, $tipo);

if ($stmt->fetch() && password_verify($password, $hashed_password)) {
    // Usuario autenticado
    echo json_encode([
        "success" => true,
        "message" => "Inicio de sesión exitoso",
        "user" => [
            "id_usuario" => $id_usuario,
            "nombre" => $nombre,
            "tipo" => $tipo
        ]
    ]);
} else {
    // Credenciales incorrectas
    echo json_encode([
        "success" => false,
        "message" => "Correo electrónico o contraseña incorrectos"
    ]);
}

$stmt->close();
$conn->close();
?>