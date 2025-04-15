const grid = document.querySelector("#grid");
const newRow = document.createElement("div");
newRow.classname = "row";
const square = document.createElement("div");
square.className = "square";
const row = document.querySelectorAll(".row");

/* Ideas for making a 16x16 grid...
2 "for" loops: 1 to create 16 rows and one to put 16 squares in the row 
^^ does not work because you can't use appendChild to a collection... will need to find a workaround
*/

const makeGrid = () => {
    for (i = 0; i < 16; i++) {
        grid.appendChild(newRow);
    };
    for (i = 0; i < 16; i++) {
        row.appendChild(square);
    }
};

makeGrid();