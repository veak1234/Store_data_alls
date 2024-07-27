<?php
require '../../database/database.php';
$id = $_GET['id'] ? $_GET['id'] : null;
echo $id;
if (isset($id))
{
    require '../../models/post.model.php';
    deletePost($id);
    // header('Location: /post');
}