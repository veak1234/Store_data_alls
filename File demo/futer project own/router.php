<?php
session_start();
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];
$page = "";
$routes = [
    '/logout' => 'controllers/exit/log.out.controller.php',
    '/admin' => 'controllers/admin/admin.controller.php',
    '/createEmployee' => 'controllers/admin/create.employee.controller.php',
    '/editEmployee' => 'controllers/admin/edit.employee.controller.php',
    '/employees' => 'controllers/employees/employee.controller.php',
    '/createuser' => 'controllers/users/user.create.controll.php',
    '/companies' => 'controllers/companies/company.controller.php',
    '/calendars' => 'controllers/calendars/calendar.controller.php',
    '/leaves' => 'controllers/leaves/leave.controller.php',
    '/reviews' => 'controllers/reviews/review.controller.php',
    // '/leaveReports' => 'controllers/reports/report.controller.php',
    '/manages' => 'controllers/manages/manage.controller.php',
    '/profiles' => 'controllers/profiles/profile.controller.php',
    // ===Create_form===
    '/proFileAdmins' => 'controllers/profiles/profile.upload.admin.controller.php',
    '/createAdmin' => 'controllers/admin/create.admin.controll.php',
    '/leavetype' => 'controllers/leaves/create_form.leave.type.controller.php',
    '/profileImage' => 'controllers/profiles/profile.upload.controller.php',
    '/leavetypeForm' => 'controllers/leaves/create_form.leave.type.controller.php',
    '/editLeaveType' => 'controllers/leaves/edit_leave.type.controller.php',
    '/removeall' => 'controllers\leaves\remove.all.request.controller.php',
    '/employeelist' => 'controllers/admin/employee.list.controller.php',
    '/export' => 'controllers/export.controller/export.controller.php',
    '/reviewForm' => 'controllers/reviews/review.form.controller.php',
    '/editReview' => 'controllers/reviews/edit.review.controller.php',
    '/editReviewType' => 'controllers/reviews/edit.review_type.controller.php',

];
$homeRoutes = [
    '/' => 'controllers/log.controll/login.controll.php',
    '/loginAdmin' => 'controllers/log.controll/login_admin.controll.php',
    '/forgetPass' => 'controllers/password.reset.controller/reset.password.controller.php',
    '/updatepass'=>'controllers/password.reset.controller/reset.view.controller.php'
];
if (isset($_SESSION['login']) and $_SESSION['login'] === 1) {
    if (array_key_exists($uri, $routes)) {
        $page = $routes[$uri];
    } else {
        if (isset($_SESSION['login']) and $_SESSION['login'] === 1 and isset($_SESSION['user']['admin_username'])) {
            $page = $routes['/admin'];
        } else if (isset($_SESSION['login']) and $_SESSION['login'] === 1 and isset($_SESSION['user']['first_name'])) {
            $page = $routes['/employees'];
        } else {
            if (array_key_exists($uri, $homeRoutes)) {
                $page = $homeRoutes[$uri];
            } else {
                http_response_code(404);
                $page = 'views/errors/404.php';
            }
        }
    }
} else {
    if (isset($_SESSION['login']) and $_SESSION['login'] === 1 and isset($_SESSION['user']['admin_username'])) {
        $page = $routes['/admin'];
    } else if (isset($_SESSION['login']) and $_SESSION['login'] === 1 and isset($_SESSION['user']['admin_username'])) {
        $page = $routes['/employees'];
    } else {
        if (array_key_exists($uri, $homeRoutes)) {
            $page = $homeRoutes[$uri];
        } else {
            http_response_code(404);
            $page = 'views/errors/404.php';
        }
    }
}
require $page;
