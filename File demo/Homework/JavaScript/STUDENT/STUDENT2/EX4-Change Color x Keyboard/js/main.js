const keyboardEvent = (event) => {
    // TODO 
    // https://www.w3schools.com/jsref/event_key_key.asp
    let text = document.querySelector('h1')
    text.textContent = event.key
    
}


document.addEventListener('keydown', keyboardEvent)