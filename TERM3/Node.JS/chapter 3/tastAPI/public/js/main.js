
// add items to servers
function createAdd(){
    let name = document.querySelector('#student').value;
    let money = document.querySelector('#students').value;
    let Oder = {"name": name,"price": money}
    axios.post("http://localhost:3000/add", Oder).then((res) => {
        if(res.data.status == 200){
            displayItem();
        };
    });
};

// delete data form servers
function DeleteItem(e){
    let isDelete = window.confirm("Are you sure?");
    if(isDelete){
        let id = e.target.id;
        axios.delete('http://localhost:3000/delete/'+ id).then((res)=>{
            if(res.server == 200){
                location.reload();
                displayItem();
            };
        });
    };
};
    
// get data to diplay
function displayItem() {
    axios.get("http://localhost:3000/get").then((res) => {
        let items = res.data.data;
        let tbody = document.querySelector("tbody");
    
        for(item of items){
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.textContent = item.name;
            let td2 = document.createElement("td");
            td2.textContent = item.price;
            let td3 = document.createElement('td');
            let btnDelete = document.createElement('button');
            btnDelete.textContent = "Delete";
            btnDelete.className = "btn btn-danger btn-sm";
            btnDelete.addEventListener('click', DeleteItem);
            btnDelete.id = item.id;
            td3.appendChild(btnDelete);
    
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
    
            tbody.appendChild(tr);
        };
    });
};

let btnAdd = document.querySelector('#add');
btnAdd.addEventListener('click', createAdd);

displayItem();