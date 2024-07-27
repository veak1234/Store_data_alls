<?php require_once '../templates/header.php' ?>
    <div class="container p-4">
        <?php 
        // TODO:
        require_once "../models/student.php";
        if (isset($_GET['id'])){
            $id = $_GET['id'];
            $use = getStudentById($id);
        }
        
        ?>
        <form action="../controllers/edit_controller.php" method="post">
        <input type="hidden" name="id" value="<?= $use['id']; ?>">
            <div class="form-group">
                <input type="text" class="form-control" value="<?= $use['name']; ?>" placeholder="Name" name="name" >
            </div>
            <div class="form-group">
                <input type="number" class="form-control" value="<?= $use['age']; ?>" placeholder="Age" name="age" >
            </div>
            <div class="form-group">
                <input type="text" class="form-control" value="<?= $use['province']; ?>"  placeholder="Province" name="province">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-warning btn-block">Update</button>
            </div>
        </form>
       
    </div>
<?php require_once '../templates/footer.php' ?>