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
    };
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
    // take user input as prompt
    // make sure prompt value is converted to an integer
    // add error message that makes user re-enter input if not an int
    // create a square grid with the specified height and width as the input
    // note: the existing grid dimensions must remain the same (960px wide)
});