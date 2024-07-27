
function AddPerson() {
    // to check gender 
    let sex = gender.checked ? gender.value : 'Female';
    sex.textContent=sex.value;

    // create table row name tableRow 
    let tableRow = document.createElement('tr');
    tableRow.name="tableRow";
    
    // create table data name tdFirstName
    // add value of firstName as textContent 
    let tdFirstName = document.createElement('td');
    tdFirstName.name="FirstName";
    tdFirstName.textContent=firstName.value;

    // create table data name tdLastName
    // add value of lastName as textContent 
    let tdLastName = document.createElement('td');
    tdLastName.name="tdLastName";
    tdLastName.textContent=lastName.value;

    // create table data name tdEmail
    // add value of email as textContent 
    let tdEmail = document.createElement('td');
    tdEmail.name="tdEmail";
    tdEmail.textContent=email.value;

    // create table name tdProvince
    // add value of province as textContent
    let tdProvince = document.createElement('td');
    tdProvince.name="tdProvince";
    tdProvince.textContent=province.value;

    // create table data name tdFavourite 
    // add value of favourite as textContent
    let tdFavourite  = document.createElement('td');
    tdFavourite.name="tdFavourite ";
    tdFavourite.textContent=favourite.value;

    // create table data name tdGender 
    // add value of sex as textContent
    let tdGender = document.createElement('td');
    tdGender.name="tdGender ";
    tdGender.textContent=gender.value;


    // append tdFirstName, tdLastName, tdEmail, tdProvince, tdGender, tdFavourite to tableRow
    tableRow.appendChild(tdFirstName);
    tableRow.appendChild(tdLastName);
    tableRow.appendChild(tdEmail);
    tableRow.appendChild(tdProvince);
    tableRow.appendChild(tdGender);
    tableRow.appendChild(tdFavourite);

    // append tableRow to tbody 
    tbody.appendChild(tableRow);

}



// Main
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const province = document.querySelector('#province');
const favourite = document.querySelector('#favorite');
let gender = document.querySelector('input[name="gender"]');
const submitButton = document.querySelector('#submit');
const tbody = document.querySelector('tbody');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    AddPerson();
});