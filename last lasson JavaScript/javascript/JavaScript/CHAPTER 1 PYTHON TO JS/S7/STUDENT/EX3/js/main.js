// let arrOne = [1,3,6,7,9];
// let arrTwo = [4,3,6,9,1];
// let newArray = []
// for (let i = 0; i < arrOne.length; i++) {
//     if (arrOne[i]<arrTwo[i]){
//         newArray.push(arrTwo[i]);
//     }
//     else if (arrOne[i]>arrTwo[i]){
//         newArray.push(arrOne[i]);
//     }
//     else if (arrOne[i]==arrTwo[i]){
//         newArray.push(arrOne[i]);
//     }
// }
// console.log(newArray)



// second loop

let arrOne = [1,3,6,7,9];
let arrTwo = [4,3,6,9,1];
let newArray = []
for (let index in arrOne) {
    if (arrOne[index]<arrTwo[index]){
        newArray.push(arrTwo[index]);
    }
    else if (arrOne[index]>arrTwo[index]){
        newArray.push(arrOne[index]);
    }
    else if (arrOne[index]==arrTwo[index]){
        newArray.push(arrOne[index]);
    }
}
console.log(newArray)
