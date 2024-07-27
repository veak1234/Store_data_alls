
function displayItem(res){
    let items = res.data;
    let html = "";
    for(let item of items){
        html +=`
        <tr>
            <td>${item.title}</td>
            <td>${item.price}</td>
        `;
    }
    document.querySelector('tbody').innerHTML = html;
}

// get
axios
.get("/api/items")
.then(getItems)
.catch(error => console.log(error));