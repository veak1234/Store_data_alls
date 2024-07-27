<!-- header -->
<?php
   require_once('templates/header.php');
?>

<div class="Certificate">
   <div class="body">
      <main>
         <h2>PNC</h2> 
         <a href="index.php"><H2>HOME</H2></a>
      </main>
      <div class="card-certificate">
         <img src="img/certficate.png" alt="">
         <?php   
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
               if (isset($_POST['name'])){
               ?>
                  <h1>Thx you <?php echo $_POST['name']?></h1>
               <?php
               }
               if (isset($_POST['text'])){
                  ?>
                  <h2>Wereceived your application for the <?php echo $_POST['text']?></h2>
                  <?php
               }
               if(isset($_POST['answerbox'])){
                  $subjects = '';
                 foreach($_POST['answerbox'] as $box1){
                   $subjects .= $box1.", ";
                 }
               }if(isset($_POST['answerboxs'])){
                  $subject = '';
                 foreach($_POST['answerboxs'] as $box2){
                   $subject .= $box2.", ";
                 }
               }echo "<h2> You are $subjects $subject </h2>";
               if (isset($_POST['gender'])){
               ?>
                  <h2>will te available on <?php echo $_POST['gender']?></h2>
               <?php
               }
            }
         ?>
      </div>
   </div>
</div>

<!-- footer -->
<?php
   require_once('templates/footer.php');
?>