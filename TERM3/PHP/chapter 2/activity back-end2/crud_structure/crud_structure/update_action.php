<?php
// TODO
require_once "database.php";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // var_dump($_POST);
    $id = $_POST['id'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $class = $_POST['class'];

    $statement = $connection->prepare("update users SET name = :name, age = :age, class = :class where id = :id");

    $statement->execute([
        ":id" => $id,
        ":name" => $name,
        ":age" => $age,
        ":class" => $class
    ]);
    header("Location: index.php");
}