<?php
require_once 'templates/header.php';
?>
<!-- TODO WRITE CODE PHP AFTER SUBMIT FORM -->
<div class="container mt-3">
    <div class="card">
        <div class="card-header text-center">
            <p>RESULT</p>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <p>Username is:
                        <?php echo $_POST['username']//TODO: display of username ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your birth day is:
                        <?php echo $_POST['birth_day'] //TODO: display of birth day ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your email address is:
                        <?php echo $_POST['email'] //TODO: display of email address ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your password is:
                        <?php echo $_POST['password']//TODO: display of password ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your gender is:
                        <?php echo $_POST['gender'] //TODO: display of gender ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your province is:
                        <?php echo $_POST['province'] //TODO: display of province ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your subjects are:
                        <?php  //TODO: display of subject 
                        $subject = $_POST['subjects'];
                        foreach($subjects as $subject){

                        }

                        ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your comment is:
                        <?php echo $_POST['comment'] //TODO: display of comment ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


<?php
require_once 'templates/header.php';
?>