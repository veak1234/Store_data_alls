let listOfItems = [
    {name: 'food', value: 'bar'},
    {name: 'food', value: 'bar'},
    {name: 'food', value: 'bar'},
    {name: 'food', value: 'bar'},
];

function saveItems(key,value) {
    localStorage.setItem(key, JSON.stringify(value));
    // console.log(key);
}
function loadItems(key,storage){
    // console.log(key)
    let itmes = JSON.parse(localStorage.getItem(storage));
    if(itmes !== null){
        return itmes;
    }
    saveItems(key,storage);
    // console.log(storage)
    return storage;
}

function displayItems(){
    for(let i=0;i<product.length;i++){
        listValue = product[i];
        console.log(listValue.value);
        

    }
}

product = loadItems("listOfItems",listOfItems);
displayItems();
// function saveItems(){
//     localStorage.setItem("listOfItems",JSON.stringify(listOfItems));
// }
// function loadItems(){
//     let listOfItem = JSON.parse(localStorage.getItem("listOfItems"));
//     if(listOfItem !== null){
//         listOfItems = listOfItem;
//     }
// }
// saveItems()
// loadItems();