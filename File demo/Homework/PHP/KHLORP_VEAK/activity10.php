<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic class name</title>

    <!-- We add some style to the classes right and wrong -->
    <style>
        .right {
            color:green;
        }
        .wrong {
            color:red;
        }
        label {
        display: inline-block;
      }
      label:before {
        content: "";
        background: url("http://placehold.it/350x150") no-repeat;
        width: 30px;
        height: 30px;
        display: inline-block;
      }
      input {
        display: none;
      }
    </style>
</head>

<body>
    
    <?php
    $status = "wrong";
    ?>

    <!-- Instructions: Change the next line to set the class of the div to the value of $status -->
    <div class=<?php echo 'right' ?>>
    <?php echo ("Phnom Penh is the capital of France : " . $status); ?>
    </div>

</body>

</html>