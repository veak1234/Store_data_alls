const container = document.querySelector('#container');
function getUsers(res) {
    let users = res.data.data;
    let html = '';
    for(let user of users) {
        html += `
        <div class="card mb-2">
            <div class="card-body d-flex justify-content-between">
                <h5 class="card-title">${user.title}</h5>
                <button class="btn btn-outline-info btn-sm" data-bs-toggle="modal" data-bs-target="#user-${user.id}">View</button>
            </div>
        </div>
   

        <div class="modal fade" id="user-${user.id}">

        `;
    }
    container.innerHTML = html; 
}
axios
.get('server/database/todos.json')
.then(getUsers)
.catch((error) => {console.log(error);})