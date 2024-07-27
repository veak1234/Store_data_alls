<?php require_once 'templates/header.php' ?>
<table class="table table-striped table-bordered">
    <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
        <th>Number</th>
        <th>Message</th>
        <th>Provinces</th>
        <th>Gender</th>
        <th>Subject</th>
    </tr>
    <?php
  
    ?>
        <tr>
            <td><?php echo $_POST['name']//name; ?></td>
            <td><?php echo $_POST['email']//email; ?></td>
            <td><?php echo $_POST['password']//password; ?></td>
            <td><?php echo $_POST['number']//number; ?></td>
            <td><?php echo $_POST['message']//message; ?></td>
            <td><?php echo $_POST['province']//province; ?></td>
            <td>
                <?php 
                   // subjects
                echo $_POST['province'];
                if(isset($_POST['gender'])){
                    $subjects = '';
                   foreach($_POST['gender'] as $box1){
                     $subjects .= $box1 . " | ";
                   }
                   echo $subjects;
                }
                ?>
            </td>
            <td><?php 
            // gender 
            foreach($_POST['subject'] as $answer ){
                if ($answer == 'Female'){
                    echo $answer;
                }else{
                    echo $answer;
                }
            }
            ?></td>
        </tr>
 
</table>
<?php require_once 'templates/footer.php' ?>