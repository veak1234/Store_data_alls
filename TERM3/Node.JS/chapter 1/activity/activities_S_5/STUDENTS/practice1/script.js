// GET URL : https://reqres.in/api/unknown/2
function afterSucces(response) {

    let p = document.getElementById('theText');

    let li3 = document.createElement('h2');
    li3.textContent = response.data.data.id;
    let h2 = document.createElement('h2');
    h2.textContent = response.data.data.name;
    let li1 = document.createElement('li');
    li1.textContent = response.data.data.pantone_value;
    let li2 = document.createElement('li');
    li2.textContent = response.data.data.year;

    p.appendChild(li3);
    p.appendChild(h2);
    p.appendChild(li1);
    p.appendChild(li2);
    console.log(response)
}

axios.get("https://reqres.in/api/unknown/2").then(afterSucces);