<?php 
if (!isset($_SESSION['user'])) {
    header('Location: /');
    die();
}
$user = $_SESSION['user'];
?>

<?php if ($user[4] === 'admin') : ?>
<h1>I am admin</h1>
<?php else : ?>
<h1>I am normal user</h1>
<?php endif;?>
<h3><?= $user[1] ?> </h3>

<a href="/signout">Signout</a>