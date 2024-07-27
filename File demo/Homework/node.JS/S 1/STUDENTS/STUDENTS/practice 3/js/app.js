function afterRequest(response) {
	// create the DOM from the response data
	let body = document.querySelector('body');
	
	for (datas of response.data){
		let ul = document.createElement('ul');
		ul.style = "border: 2px solid black"
		let li1 = document.createElement('li');
		li1.textContent = datas.name;
		
		let li2 = document.createElement('li');
		li2.textContent = datas.email;

		let li3 = document.createElement('li');
		li3.textContent = datas.company.name;
		
		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);

		body.appendChild(ul);
	}

}

// Request a GET on this URL : https://jsonplaceholder.typicode.com/users
const STUDENT_URL = "https://jsonplaceholder.typicode.com/users";
// then : callback the function afterRequest
axios.get(STUDENT_URL).then(afterRequest);
