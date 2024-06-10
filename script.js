let container = document.getElementById('container');

// create & append initial grid of square divs
for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');  
    container.appendChild(newDiv);
}

function clearDiv() {
    document.getElementById('container').innerHTML = "";
}

function newGrid(userInput) {
    let divSize = container.clientWidth / userInput;
    
    for (let i = 0; i < userInput * userInput; i++) {
        let newSquare = document.createElement('div');
        newSquare.classList.add('secondSquare');

        newSquare.style.width = `${divSize}px`;
        newSquare.style.height  = `${divSize}px`;

        container.appendChild(newSquare);
    }
}

let buttonDiv = document.querySelector('button');

buttonDiv.addEventListener('click', function() {
    let userInput = prompt('please enter the number of squares: ');
    userInput = parseInt(userInput);

    if (userInput >= 0 && userInput <= 100) {
        clearDiv();
        newGrid(userInput);
    } else {
        alert('invalid number. please enter a number between 1 and 100')
    }
});