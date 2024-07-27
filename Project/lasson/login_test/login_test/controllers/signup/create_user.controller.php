<?php
require '../../database/database.php';
require '../../models/signup.model.php';
require '../../models/signin.model.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Escape the query string to prevent SQL injection.
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']); // 123

    // Password encryption
    $passwordHash = password_hash($password, PASSWORD_BCRYPT);
    $user = getUser($email);
    if (count($user) == 0) {
        $isCreated = signUp($name, $email, $passwordHash);
        if ($isCreated) {
            header('Location: /signin');
        } else {
            header('Location: /signup');
        }
    } else {
        echo "User already exists";
    }
}