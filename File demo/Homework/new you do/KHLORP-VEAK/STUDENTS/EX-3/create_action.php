<?php
// Get current date
// date_default_timezone_set('Asia/Phnom_Penh');
require_once "database.php";

$title = $_POST['title'];
$description = $_post['description'];

$statement = $db->prepare("INSERT INTO posts (title,description) VALUES(:title, :description)");
$statement->execute([
    ":title" => $title,
    ":description" => $description
]);
header("location: index.php");

