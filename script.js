let container = document.getElementById('container');

for (let i = 0; i < 252; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');  
    container.appendChild(newDiv);
}

function clearDiv() {
    document.getElementById('container').innerHTML = "";
}

// function newGrid(userInputRow, userInputColumn) {

// }

let buttonDiv = document.querySelector('button');

buttonDiv.addEventListener('click', function() {
    let userInputRow = prompt('please enter number of rows: ');
    let userInputColumn = prompt('please enter the number of columns: ')

    if ((userInputRow >= 0 && userInputRow <= 100) && (userInputColumn >= 0 && userInputColumn <= 100)) {
        clearDiv();
    } else {
        console.log('invalid number')
    }
});
