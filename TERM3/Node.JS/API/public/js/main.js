
function DeleteItem(e){
    let id = e.target.id;
    let isDelete = window.confirm("Are you sure?");
    if(isDelete){
        axios.delete('http://localhost:3000/api/delete/'+ id).then((res) =>{
            // if(res.newItem == 200) {
                // location.reload();
                // displayItem();
                console.log(id)
            // };
        });
    }
}

function displayItem() {
    axios.get("http://localhost:3000/items").then((res) => {
        let items = res.data.items;

        // let items = res.data;
        let tbody = document.querySelector("tbody");
    
        for(item of items){
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.textContent = item.tatle;
            let td2 = document.createElement("td");
            td2.textContent = item.price;
            let td3 = document.createElement('td');
            let btnDelete = document.createElement('button');
            btnDelete.textContent = "Delete";
            btnDelete.className = "btn btn-danger btn-sm";
            btnDelete.addEventListener('click', DeleteItem);
            btnDelete.id = "2";
            td3.appendChild(btnDelete);
    
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
    
            tbody.appendChild(tr);
        };
    })
}
displayItem()

