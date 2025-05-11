const grid = document.querySelector("#grid");

const makeGrid = (rows) => {
    grid.innerHTML = ""
    for (let i = 0; i < rows; i++) {
        const newRow = document.createElement("div");
        newRow.className = "row";

        for (let r = 0; r < rows; r++) {
            const square = document.createElement("div");
            square.className = "square";
            newRow.appendChild(square);
        }
        grid.appendChild(newRow);
    };
};

makeGrid(16);

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
        makeGrid(parseInt(rows, 10));
    } else alert("Please enter a valid number between 1-100 so we can serve up a new grid for you. Thanks!");
    //add function to button click
    // take a user input for a number
    // make sure the number is an integer
    // make sure the max value allowed is 100
    // give an error if conditions are not met
    // call the function of conditions are met
    // create new grid with the number of squares requested on each side (i.e. 10x10)
    // the grid must remain 960px wide regardless of the number of squares
    // make sure that old grid is replaced
});
