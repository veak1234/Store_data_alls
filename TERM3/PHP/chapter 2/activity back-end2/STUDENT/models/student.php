<?php
// database connection
$students = new PDO("mysql:host=localhost;dbname=student_db","root");
/**
 * Get all students from the database
 
 * @return array of students 
 */
function getStudents()
{
    global $students;
    $statement = $students->prepare("SELECT * FROM students");
    $statement->execute();
    $users = $statement->fetchAll();
    return $users;
        
}

/**
 * Get single student from the database
 * @param integer $id : the student id
 
 * @return associative_array: the student related to given id
 */
function getStudentById($id)
{
    global $students;
        $statement = $students->prepare("SELECT * FROM students WHERE id = :id");
        $statement->execute([":id"=> $id]);
        $use = $statement->fetch();
        return $use;
}

/**
 * Remove single student from the database
 * @param integer $id : the id of the student to delete
 
 * @return boolean: true if deletion was successful, false otherwise
 */
function deleteStudent($id)
{
    global $students;
        // echo $id;
        $statement = $students->prepare("DELETE FROM students WHERE id = :id");
        $statement->execute([':id'=> $id]);

}

/**
 * Update single student from the database
 * @param integer $id :  		the id of the student to update
 * @param string $name :  		the student name
 * @param integer $age :  		the age of the student
 * @param string $province :  	the student's province

 * @return boolean: true if deletion was successful, false otherwise
 */
function updateStudent($id, $name, $age, $province)
{
    global $students;
        $statement = $students->prepare("update students SET name = :name, age = :age, province = :province where id = :id");
    
        $statement->execute([
            ":id"=> $id,
            ":name" => $name,
            ":age" => $age,
            ":province" => $province
        ]);
        $update = $statement->fetchAll();
        return $update;

}

/**
 * Create single student from the database
 * @param string $name :  		the student name
 * @param integer $age :  		the age of the student
 * @param string $province :  	the student's province

 * @return boolean: true if create was successful, false otherwise */
function createStudent($name, $age, $province)
{
    global $students;
    
        $statement = $students->prepare("INSERT INTO students (name, age, province) VALUES(:name, :age, :province)");
        $statement->execute([
            ":name" => $name,
            ":age" => $age,
            ":province" => $province
        ]);
        $create = $statement->fetchAll();
        return $create;
}
