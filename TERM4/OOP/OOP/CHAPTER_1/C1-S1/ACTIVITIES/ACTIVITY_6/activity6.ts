function getMax(n1:number, n2:number):number {
    let max:number;
    if (n1 > n2) {
        max = n1;
    } else {
        max = n2;
    }
    return max;
}

function numberFromString(word:string):number {
    return parseInt(word);
}
let a=getMax(4,numberFromString("5"));



type student = {
    name: string,
    age: number,
    class: string,
    year: number
}

let student1:student={
    name: "sal",
    age: 19,
    class: "WEP A",
    year: 2023
}
console.log(student1)