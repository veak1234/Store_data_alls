
let object = [

    {Id:'01',First: 'men', Last:'lololo', Email: 'student@PNC'},
    {Id:'02',First: 'men', Last:'hahaha', Email: 'student@PNC'},
    {Id:'03',First: 'men', Last:'hikhik', Email: 'student@PNC'},
    {Id:'04',First: 'men', Last:'make', Email: 'student@PNC'},
    {Id:'05',First: 'men', Last:'man', Email: 'student@PNC'},
    {Id:'06',First: 'men', Last:'dodo', Email: 'student@PNC'}

];

let tbody = document.getElementById('tbody');

function createRow(data){
    let tr =document.createElement('tr');
    let tdId=document.createElement('td')
    let tdFirstName= document.createElement('td');
    let tdLastName= document.createElement('td');
    let tdEmail= document.createElement('td');

    let p0 = document.createElement('p');

    tdId.textContent=data.Id;
    tdFirstName.textContent = data.First;
    tdLastName.textContent = data.Last;
    tdEmail.textContent = data.Email;
    
    tbody.appendChild(tr);
    tr.appendChild(tdId);
    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdEmail);
    tdFirstName.appendChild(p0);

};

for(let value of object){
    createRow(value);
};