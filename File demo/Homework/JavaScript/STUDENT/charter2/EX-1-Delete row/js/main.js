let buttons = document.querySelectorAll('button');

function removeTable(event) {
    let isConfrim = confirm('Are you want to delete?')
    let tableRow = event.target.closest('tr');
    if (isConfrim) {
        tableRow.remove()
    }
}
for (const button of buttons) {
    button.addEventListener('click', removeTable)
}






















