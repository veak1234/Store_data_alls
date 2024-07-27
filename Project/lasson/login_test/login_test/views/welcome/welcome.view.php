
<h1>Welcome Page</h1>
<?php if (isset($_SESSION['user'])):?>
<a href="/signout">Signout</a>
<?php else: ?>
<a href="/signin">Signin</a> /
<a href="/signup">Create Account</a>
<?php endif; ?>