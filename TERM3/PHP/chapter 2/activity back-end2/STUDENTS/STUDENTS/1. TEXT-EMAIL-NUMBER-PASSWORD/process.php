
<?php require_once('templates/header.php');// HEADER ?>
<ul class="list-group">
<?php
   // YOUR CODE HERE
?>
    <li class="list-group-item"><?php echo $_GET['name']// name; ?></li>
    <li class="list-group-item"><?php echo $_GET['email']// email; ?></li>
    <li class="list-group-item"><?php echo $_GET['password']// password; ?></li>
    <li class="list-group-item"><?php echo $_GET['number']// number; ?></li>
    <li class="list-group-item"><?php echo $_GET['message']// message; ?></li>

</ul>
<?php require_once('templates/footer.php');// FOOTER ?>