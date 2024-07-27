const keyboardEvent = (event) => {
    // TODO 
    // https://www.w3schools.com/jsref/event_key_key.asp
    let key = event.key;
    document.querySelector('h1').innerHTML = key;

}

document.addEventListener('keydown', keyboardEvent)