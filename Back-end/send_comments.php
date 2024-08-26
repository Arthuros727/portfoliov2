<?php
include 'db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Content-Type: application/json; charset=UTF-8");
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); 
    echo json_encode(["message" => "Méthode non autorisée"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['comment']) || empty(trim($data['comment']))) {
    http_response_code(400); 
    echo json_encode(["message" => "Commentaire manquant ou vide"]);
    exit;
}

$comment = trim($data['comment']);

try {
    $stmt = $conn->prepare("INSERT INTO comments (data) VALUES (?)");
    $stmt->bind_param("s", $comment);

    if ($stmt->execute()) {
        http_response_code(201); 
        echo json_encode(["message" => "Commentaire enregistré avec succès !"]);
    } else {
        http_response_code(500); 
        echo json_encode(["message" => "Erreur lors de l'enregistrement du commentaire"]);
    }

    $stmt->close();
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["message" => "Erreur serveur: " . $e->getMessage()]);
}

$conn->close();
?>
