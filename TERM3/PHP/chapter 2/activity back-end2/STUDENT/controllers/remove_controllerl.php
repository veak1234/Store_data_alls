<?php
// TODO:
require_once '../models/student.php';
if (isset($_GET['id'])){
    $id = $_GET['id'];
    // echo $id;
    deleteStudent($id);
    header("Location: ../index.php");
}
