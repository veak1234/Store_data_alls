
<?php require_once('templates/header.php');// HEADER ?>
<?php
    // YOUR CODE HERE 
?>
    <div class="alert alert-secondary">
        <strong>Color: </strong> <span><?php echo $_GET['color'] //color; ?></span>
    </div>
    <div class="alert alert-info">
        <strong>Range: </strong> <span><?php echo $_GET['range'] //range; ?></span>
    </div>
    <div class="alert alert-danger">
        <strong>Date: </strong> <span><?php echo $_GET['date']//date; ?></span>
    </div>

<?php require_once('templates/footer.php');//FOOTER ?>
