<?php
function createUser(string $username, string $password){
    global $connection;
    $statement = $connection->prepare("INSERI INTO users (user_name,password) VALUES (:username, :password");
    
}