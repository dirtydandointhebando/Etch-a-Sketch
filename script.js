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
    let dimensions = prompt("How many squares do you want per row? Please enter a number between 1-100.");
    while (!Number.isInteger(Math.floor(dimensions)) || (dimensions > 100)) {
        let dimensions = prompt("Error. Please enter a valid number between 1-100.");
        if (Number.isInteger(dimensions) && (dimensions < 100)) break;
    };
    // make sure max value allowed is 100
    // add error message that makes user re-enter input if not an int or if it is > 100
    // create a square grid with the specified height and width as the input
    // note: the existing grid dimensions must remain the same (960px wide)
});