
<?php
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$page = "";
$routers = [
    '/' => 'controllers/form/form.controller.php'
];
if (array_key_exists($uri, $routers)){
    $page = $routers[$uri];
}else{
    echo "Page not found!!";
}

require $page;
require "partials/header.php";
require "partials/footer.php";
