let container = document.getElementById('container');

for (let i = 0; i < 252; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');  
    container.appendChild(newDiv);
}

let buttonDiv = document.querySelector('button');

buttonDiv.addEventListener('click', function() {
    let userInput = prompt('please enter number of squares: ');
    // console.log(userInput)
});
