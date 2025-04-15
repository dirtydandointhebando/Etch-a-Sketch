const grid = document.querySelector("#grid");
const row = document.createElement("div");
row.classname = "row";
const square = document.createElement("div");
square.className = "square";

/* Ideas for making a 16x16 grid...
2 "for" loops: 1 to create 16 rows and one to put 16 squares in the row
*/

const makeGrid = () => {
    for (i = 0; i < 16; i++) {
        grid.AppendChild(row);
    };
    for (i = 0; i < 16; i++) {
        row.AppendChild(square);
    }
};