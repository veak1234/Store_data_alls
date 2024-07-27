<?php
// database connection
$db = new PDO("mysql:host=localhost;dbname=pos_db","root");

/**
 * Get all items  
 * @return array of items 
 */
function getItems()
{
    global $db;
    $statement = $db->prepare("SELECT * FROM items");
    $statement->execute();
    $users = $statement->fetchAll();
    return $users;

}

/**
 * Get a single item
 * @param integer $id : the item id
 
 * @return associative_array: the item related to given item id
 */
function getItemById($id)
{

}

/**
 * Remove item related to given item id
 * @param integer $id :  the id of the item to delete
 
 * @return boolean: true if deletion was successful, false otherwise
 */
function deleteItem($id)
{
    global $db;

}

/**
 * Update a Item given id and attibutes
 * @param integer $id :  		the id of the item to update
 * @param string  $item_name :  the item name
 * @param integer $price :  	the item price
 * 
 
 * @return boolean: true if deletion was successful, false otherwise
 */
function updateItem($id, $item_name, $price)
{

}

/**
 * Create a new item 
 * @param string  $item_name :  	the item name
 * @param integer $price :  		the price
 
 * @return boolean: true if create was successful, false otherwise
 */
function createItem($item, $price)
{
    global $db;
    $statement = $db->prepare("INSERT INTO items (item,price) VALUES(:item, :price)");
    $statement->execute([
        ":item" => $item,
        ":price" => $price
    ]);
    $create = $statement->fetchAll();
    return $create;
}
