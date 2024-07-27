
enum Genders{
    MALE = "MALE",
    FEMALE = "FEMALE",
}

enum Major{
    WEP = "WEP",
    SNA = "SNA",
}

enum Topics{
    JAVASCRIPT = "JAVASCRIPT",
    PHP = "PHP",
    HTML = "HTML",
    TS = "TS",
    VUE = "VUE",
}

class Students{
    name: string;
    gender: Genders = Genders.FEMALE;
    major: Major = Major.WEP;
    topics: Topics[] = [Topics.JAVASCRIPT, Topics.PHP, Topics.HTML, Topics.TS, Topics.VUE];

    constructor(name: string){
        this.name = name;
    }
    getStudentInfo(){
        this.name;  // return name
        this.gender;  // return gender
        this.major;  // return major
        this.topics;  // return topics

        // return `Name: ${this.name}, Gender: ${this.gender}, Major: ${this.major}, Topics: ${this.topics}`;
    }
}

class Result {
    score: number;
    constructor(score: number) {
        this.score = score; // score the result
    }
}

let student = new Students("Veak");
let score = new Result(90)

console.log(student, score)
