
function deleteStudent(e){
    let id = e.target.id;
    axios.delete('http://localhost:3000/student/delete/' + id ).then((res) =>{
        if(res.student == 200){
            location.reload();
            display();
        console.log("hello")
        };
    });
}

function display(){
    axios.get("http://localhost:3000/students").then((res) => {
    
        let data = res.data.data;
        let ul =document.getElementById('students-list');
        for (names of data){
            let li = document.createElement('li');
            li.textContent = names.name;
            let btnDelete = document.createElement('button');
            btnDelete.textContent = "Delete";
            btnDelete.id = names.id;
            btnDelete.addEventListener('click',deleteStudent);

            ul.appendChild(btnDelete);
            ul.appendChild(li);
        };
    });
};

function addNewStudent(){
    let studentName = document.querySelector("#student").value;
    let student = {"id":1,"name": studentName};
    // console.log(studentName);
    axios.post("http://localhost:3000/students/create", student).then((res) => {
        if(res.data.status == 200){
            display();
        };
    });
};


let btnAdd = document.querySelector("#add");
btnAdd.addEventListener('click',addNewStudent);
display();
