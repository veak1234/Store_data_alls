enum Gender {
    MALE = "male",
    FEMALE = "female"
}

enum Major{
    WEP = "WEP Development",
    SNA = "System Networking Adminstration"
}

enum Topic {
    JAVASCRIPT = "JavaScript",
    PHP = "PHP",
    HTML = "HTML",
    TS = "TypeScript",
    VUE = "VUE Js"
}

// Student class 
class Student {
    private result : Result[]=[];

    constructor(private name : string, private gender : Gender, private major : Major){}

    // Add score and topic 
    addScore(score:number, topic:Topic):void{
        this.result.push(new Result(score, topic));
    } 

    // Get average of student 
    get getAverageOfStudent():number{
        let totalScore : number = 0;
        this.result.forEach(result=>{
            totalScore += result.getScore;
        })
        return totalScore / this.result.length;
    }
}

// Result class 
class Result {
    constructor(private score : number, private topic : Topic){};

    // Get score 
    get getScore():number{
        return this.score;
    }
}


// Student object 
let yon : Student = new Student("Yon", Gender.MALE, Major.WEP);
let sal : Student = new Student("Sal", Gender.MALE, Major.WEP);

// Add Score to student
yon.addScore(10, Topic.JAVASCRIPT);
yon.addScore(90, Topic.PHP);
sal.addScore(100, Topic.VUE);

console.log(yon);
console.log(yon.getAverageOfStudent);
// console.log(sal);
