let container = document.getElementById("container");

for (let i = 0; i < 252; i++) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');  
    container.appendChild(newDiv);
}

