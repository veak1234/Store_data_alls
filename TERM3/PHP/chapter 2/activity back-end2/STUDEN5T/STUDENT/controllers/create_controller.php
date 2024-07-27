<?php
require_once "../models/item.php";

if ($_SERVER['REQUEST_METHOD']=='POST'){
    $name = $_POST['item'];
    $price = $_POST['price'];
    createItem($item, $price);
}