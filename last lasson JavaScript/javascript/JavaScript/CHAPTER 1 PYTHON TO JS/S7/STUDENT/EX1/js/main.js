let text = "hello world [JavaScript] we [are] strong!";
// TODO: 
// YOUR CODE HERE
let iStrue=true;
let sumText=""
for(let value of text){
    if (value=="["){
        iStrue=false;
    }
    else if (value=="]"){
        iStrue=true;
    }
    else if(iStrue){
        sumText+=value;
    }
}
console.log(sumText)
// output: hello world we strong!


