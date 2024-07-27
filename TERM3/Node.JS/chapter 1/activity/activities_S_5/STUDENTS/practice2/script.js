// TODO
// Get URL https://reqres.in/api/users?page=2
let button = document.getElementById('id');

function afterSuccess(response){
    let body = document.querySelector('body');
    
    for (datas of response.data.data){

        button.addEventListener('click', function(){

            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            li1.textContent = datas.last_name;
        
            let li2 = document.createElement('li');
            li2.textContent = datas.email;
        
            ul.appendChild(li1);
            ul.appendChild(li2);
        
            body.appendChild(ul);
        });
    };
    
};
    
axios.get("https://reqres.in/api/users?page=2").then(afterSuccess);