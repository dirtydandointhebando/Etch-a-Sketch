const grid = document.querySelector("#grid");

const makeGrid = () => {
    for (let i = 0; i < 16; i++) {
        const newRow = document.createElement("div");
        newRow.className = "row";

        for (let r = 0; r < 16; r++) {
            const square = document.createElement("div");
            square.className = "square";
            newRow.appendChild(square);
        }
        grid.appendChild(newRow);
    }
};

makeGrid();

document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("mouseenter", () => {
        square.classList.add("hover");
        setTimeout(() => {
            square.classList.remove("hover");
        }, 10000);
    });
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
    
})