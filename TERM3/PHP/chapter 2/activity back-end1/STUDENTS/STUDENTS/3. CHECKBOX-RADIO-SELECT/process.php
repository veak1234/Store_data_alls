<?php require_once('templates/header.php');// HEADER ?>
<?php
// YOUR CODE HERE
?>
    <div class="card mb-3">
        <div class="card-header">Province</div>
        <div class="card-body">
            <h2 class="display-3"><?php echo $_POST['province']// province ?></h2>
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-header">Gender</div>
        <div class="card-body">
            <!-- YOUR CODE HERE [gender] -->
            <?php
            if(isset($_POST['gender'])){
                  $subjects = '';
                 foreach($_POST['gender'] as $box1){
                   $subjects .= $box1 . "<br>";
                 }
                 echo $subjects;
               }
            ?>
        </div>
    </div>
    <div class="card">
        <div class="card-header">Subject</div>
        <div class="card-body">
            <?php
                // YOUR CODE HERE [subject]
                foreach($_POST['subject'] as $answer ){
                    if ($answer == 'Female'){
                        echo "Famale";
                    }else{
                        echo "Male";
                    }
                }
            ?>
        </div>
    </div>

<?php require_once('templates/footer.php');// FOOTER ?>