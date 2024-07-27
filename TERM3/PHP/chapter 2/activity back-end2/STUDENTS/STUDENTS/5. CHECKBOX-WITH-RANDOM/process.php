<?php require_once 'templates/header.php' ?>
<?php

$colors = ['primary', 'danger', 'info', 'warning', 'success', 'secondary', 'dark'];
// CODE HERE 
foreach($colors as list($color)){
    echo $color;
}
?>
    <div class="card">
        
        <div class="card-body">
            <?php
            // CODE HERE
            foreach ($_POST['box'] as $boxs){
                echo " <button class = 'btn "." btn-" .$colors[rand(0,count($colors))]."'>".$boxs." </button> ";
            }
            ?>
        </div>
    </div>


<?php require_once 'templates/footer.php' ?>