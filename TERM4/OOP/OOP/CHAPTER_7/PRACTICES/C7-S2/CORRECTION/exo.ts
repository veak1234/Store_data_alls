enum Major{
    WEB,
    SNA,
}

enum Gender{
    MALE,
    FEMALE,
}

enum Topic{
    JAVASCRIPT,
    PHP,
    HTML,
    TS,
    VUE,
}

class Student{
    constructor(private category:Gender, name:string){}
    getInfo(){
        if (this.category == Gender.FEMALE){
            return "I'm a woman"
        }
        else {
            return "I'm a man"
        }
    }
}

class Result{
    constructor(private category:Topic, name: string){}
}