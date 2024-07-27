<?php
require_once('templates/header.php');

echo "<ul>";

// TODO
// - Your name is XXXXX

echo "You name is : ". $_GET['name']."<br>";
// - Your hobbies areXXXXX
echo  "Your hobbies is : ".$_GET['hobby']. "<br>";
// - You are a boy/girl
$gender = isset($_GET['gender']) == "male"?"boy":"girl";
echo "You are is : " . $gender;

echo "</ul>";


require_once('templates/footer.php');
