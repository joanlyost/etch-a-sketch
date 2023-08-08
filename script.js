const setDrawingBoard = document.querySelector("#set-drawing-board");
setDrawingBoard.addEventListener("click", createDrawingBoard);

function createDrawingBoard() {
    const size = setSize();
    const board = createGrid();
    let pencilState = false;
    let colorfulState = false;

    const pixelsDraw = document.querySelectorAll("div[data-pixels='draw']");
    const pencil = document.querySelector("#pencil");
    const colorful = document.querySelector("#colorful");

    const setDrawingBoard = document.querySelector("#set-drawing-board");
    setDrawingBoard.addEventListener("click", setNewSize);
    pixelsDraw.forEach((pixel) => pixel.addEventListener("mouseover", draw));
    pencil.addEventListener("click", changePencilState);
    colorful.addEventListener("click", changeColorfulState);

    resetBtns();

    function createGrid() {
        const drawingBoard = document.querySelector("#drawing-board");
        let width = size;
        let height = size;
        let totalSize = width*height;
        drawingBoard.setAttribute
            ("style", `width:${width}; height:${height}; 
            grid-template-rows: repeat(${width}, 1px); 
            grid-template-columns: repeat(${height}, 1px);`);

        for(let i = 0; i < totalSize; i++) {
            const div = document.createElement("div");
            div.dataset.pixels = "draw";
            div.classList.add("drawing-squares");

            drawingBoard.appendChild(div);
        }
    }

    function setSize(boardSize) {
        boardSize = prompt("Choose a size for your board");
 
        if(boardSize !== null) {
            parseInt(boardSize);
            if(isNaN(boardSize) === true || boardSize > 100) {
                alert("Your input should be a number not higher than 100");
                return setSize();
            } else {
                return boardSize;
            }
        }
    };
    function setNewSize() {
        width = 0;
        height = 0;
        pixelsDraw.forEach((pixel) => pixel.remove());
    }
    
    function resetBtns() {
        pencil.style.fontWeight = "normal";
        colorful.style.fontWeight = "normal";
    }
    function changePencilState() {
        if (pencilState === true) {
            pencilState = false;
            pencil.style.fontWeight = "normal";
        } else {
            pencilState = true;
            pencil.style.fontWeight = "bolder";
        }
    }
    function changeColorfulState() {
        if (colorfulState === true) {
            colorfulState = false;
            colorful.style.fontWeight = "normal";
        } else {
            colorfulState = true;
            colorful.style.fontWeight = "bolder";
        } 
    }
        
    function draw(color) {
        if(pencilState === true) {
            if(parseFloat(this.style.opacity) < 1){
                this.style.opacity = `${parseFloat(this.style.opacity) + 1/10}`;
            } else if(!this.style.backgroundColor) {
                this.style.opacity = "0.1";
            }
        }

        this.style.backgroundColor = "blue";  

        if(colorfulState === true) {
            color = getRandomColor();
            this.style.backgroundColor = `${color}`;
        }
    }
    function getRandomColor(color, randomColor){
        color = [];
        const randomizer = () => Math.floor(Math.random() * (1 + 255));
        for(i = 0; i < 3; i++) {
            color.push(randomizer());
        }
        randomColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;

        return randomColor;
    }
}