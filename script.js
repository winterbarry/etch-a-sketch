// LOOK AT LAST INSTRUCTION IN STEP 4 WEBPAGE

let container = document.getElementById('container');

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');  
    container.appendChild(newDiv);
}

function clearDiv() {
    document.getElementById('container').innerHTML = "";
}

function newGrid(userInput, userInputDivs) {
    for (let i = 0; i < userInputDivs; i++) {
        let newSquare = document.createElement('div');
        newSquare.classList.add('secondSquare');

        newSquare.style.width = `${userInput}px`;
        newSquare.style.height  = `${userInput}px`;

        container.appendChild(newSquare);
    }
}

let buttonDiv = document.querySelector('button');

buttonDiv.addEventListener('click', function() {
    let userInput = prompt('please enter the size of your grid: ');
    let userInputDivs = prompt('please enter the number of divs: ');

    if (userInput >= 0 && userInput <= 100) {
        clearDiv();
        newGrid(userInput, userInputDivs);
    } else {
        console.log('invalid number')
    }
});
