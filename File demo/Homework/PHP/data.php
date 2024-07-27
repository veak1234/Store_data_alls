

<?php 
$students =[
    ['name' => 'Mengyi','age'=>30, 'status'=>'single'],
    ['name' => 'Nga','age'=>18, 'status'=>'married'],
    ['name' => 'Theavy','age'=>19, 'status'=>'in-relationship'],
    ['name' => 'Hak','age'=>20, 'status'=>'unknown'],
];

for($i = 0; $i<$students; $i++){
    echo $students[$i];
}