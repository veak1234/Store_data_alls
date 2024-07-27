let numbers = [1, 3, 5, 0, 2, 0, 1, 1, 2, 3];
// TODO: 
// YOUR CODE HERE
let isTrue = false;
let sumOfNumbers = 0
for(let sum of numbers) {
    if(isTrue){
        sumOfNumbers += sum;
    }
    if(sum == 1){
        isTrue=true;
    }
    else if (sum == 0){
        isTrue=false;
    }
}
console.log(sumOfNumbers)
// output: 14 becuase 3 + 5 + 1 + 2 + 3





