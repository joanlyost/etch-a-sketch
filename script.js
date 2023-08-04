const setDrawingBoard = document.querySelector("#set-drawing-board");
setDrawingBoard.addEventListener("click", createSquares);

function createSquares() {
    const drawingBoard = document.querySelector("#drawing-board");
    let width = 16;
    let height = 16;
    let totalSize = width*height;
    drawingBoard.setAttribute("style", `width:${width}; height:${height};`);

    for(let i = 0; i < totalSize; i++) {
        const div = document.createElement("div");
        div.dataset.pixels = "draw";
        div.classList.add("drawing-squares");

        drawingBoard.appendChild(div);
    }
}