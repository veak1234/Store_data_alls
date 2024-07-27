// Function 1 (as example)
function sumArray(num1, num2) {
  return (num1 + num2) / 2;
}
console.log("test sumArray:", sumArray(4, 6));



// Function 2 (as example)
// TODO
function mergeString(s1, s2){
  return s1 + s2;
}
let s1 ="ronan";
let s2 =" the best";
console.log("test function2:", mergeString(s1 ,s2));




// Function 3 (as example)
// TODO
function isEqual(array){
  let iStrue = true
  let firstNum = array[0]
  for(let value of array){
    if (firstNum !=value){
      iStrue = false
    }
  }
  return iStrue
}
let array =[2,4,4,4]
console.log("test function3:",isEqual(array));




// Function 4 (as example)
// TODO
function findName(){
  let result=""
  result = student["name"]+"is"+student["age"]+" years old";
  return (result)
}
let student={name:"ronan",age:17}
console.log("test function4:",findName(student));




// Function 5 (as example)
// TODO
function comparString(){
  if (string1.length>string2.length)
  iStrue=true
  return iStrue
}
let string1="aa"
let string2="a"
let iStrue=false
console.log("test function5:",comparString());



// Function 6 (as example)
// TODO

function function6(arr){
  let sumAll=0
  for (let num of arr){
    sumAll+=num
  }
  return sumAll

}

arr1=[1,2,4,5,3];
console.log("test function6:",function6(arr1));


// Function 7 (as example)
// TODO
function createArray(row,col){
  let array = []
  for(let i=0;i<row;i++){
    let temp = []
    for (let i=0;i<col;i++){
      temp.push(0)
    }
    array.push(temp)
  }
  return array
}
row = 3
col = 5 
console.log("test function7:",createArray(row,col));



// Function 8 (as example) 
// TODO
function sum2Array(){
  let result = [];
  for (let i=0 ;i<arr1.length;i++){
    let sum = arr1[i]+arr2[i]
    result.push(sum)
  }
  return result
  
}
arr1 = [1, 2, 3]
arr2 = [4, 4, 4]
console.log("test function8:",sum2Array(arr1,arr2));
