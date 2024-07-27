<?php

$heading = "Post Page";

$statement = $connection->prepare("select * from posts");
$statement->execute();
$posts = $statement->fetchAll();