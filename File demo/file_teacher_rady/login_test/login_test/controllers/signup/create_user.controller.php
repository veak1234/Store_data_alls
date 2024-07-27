<?php
require '../../database/database.php';
require '../../models/signup.model.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Escape the query string to prevent SQL injection.
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    // Password encryption
    $passwordHash = password_hash($password, PASSWORD_BCRYPT);
    $isCreated = signUp($name, $email, $passwordHash);
    if ($isCreated) {
        header('Location: /');
    } else {
        header('Location: /signup');
    }
}