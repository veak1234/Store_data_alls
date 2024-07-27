<?php require_once 'partials/header.php';?>
<div class="container mt-5">
   <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
        
        <div class="card bg-light">
            <div class="card-body">
                <?php
                    require_once "database.php";
                    if (isset($_GET['id'])){
                        $id = $_GET['id'];
                        $statement = $connection->prepare("SELECT * FROM users WHERE id = :id");
                        $statement->execute([":id"=> $id]);
                        $user = $statement->fetch();
                        // var_dump($user);
                    }
                ?>
                <form action="update_action.php" method="POST">
                    <input type="hidden" name="id" value="<?= $user['id']; ?>">
                    <div class="mb-3">
                        <input type="text" name="name" class="form-control" value="<?= $user['name']; ?>" placeholder="Name">
                    </div>
                    <div class="mb-3">
                        <input type="text" name="age" class="form-control" value="<?= $user['age']; ?>"  placeholder="Age">
                    </div>
                    <div class="mb-3">
                        <input name="class" id="" class="form-control" value="<?= $user['class']; ?>"  placeholder="Class Name">
                    </div>
                    <div class="mb-3 d-grid gap-2">
                        <button class="btn btn-warning btn-block">Update Now</button>
                    </div>
                </form>
        </div>
    </div>
    <div class="col-3"></div>
   </div>
</div>
<?php require_once 'partials/footer.php';?>