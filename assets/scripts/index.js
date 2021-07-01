const GRIDSIZE = 16;
const container = document.getElementById("container");
const resetButton = document.getElementById("reset");

for (let i = 0; i < GRIDSIZE * GRIDSIZE; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add("grid-element");
    gridElement.addEventListener("mouseover", changeColor);
    container.appendChild(gridElement);
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

function resetGrid() {
    const gridArray = Array.from(container.childNodes)
    gridArray.forEach((item) => {item.style.backgroundColor = "white"})
}

resetButton.addEventListener("click", resetGrid);