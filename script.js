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


const newGridBtn = document.querySelector("#newGrid");
newGridBtn.addEventListener("click", () => {
    let rows = prompt("How many rows do you want in your new grid? Please enter a number between 1-100.");
    if (Number.isInteger(parseInt(rows, 10)) && rows <= 100) {
        alert(`Here's a new grid with ${parseInt(rows, 10)} rows and columns. Have fun!`);
        
    } else alert("Please enter a valid number between 1-100 so we can serve up a new grid for you. Thanks!");
    //add function to button click
    // take a user input for a number
    // make sure the number is an integer
    // make sure the max value allowed is 100
    // give an error if conditions are not met
    // call the function of conditions are met
    // create new grid with the number of squares requested on each side (i.e. 10x10)
    // the grid must remain 960px wide regardless of the number of squares
});

/*
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let dimensions;
    do {
        let dimensions = prompt("How many squares do you want per row? Please enter a number between 1-100.");
        parseInt(userInput, 10)
    } while (!Number.isInteger(Math.floor(dimensions)) || (dimensions > 100));
    // make sure max value allowed is 100
    // add error message that makes user re-enter input if not an int or if it is > 100
    // create a square grid with the specified height and width as the input
    // note: the existing grid dimensions must remain the same (960px wide)
});
*/
