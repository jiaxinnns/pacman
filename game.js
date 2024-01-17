const canvas = document.getElementById("graphics");
const canvasContext = canvas.getContext("2d");
let fps = 20;
const unit = 30;
const pacman0 = document.getElementById("pacman0");
const pacman1 = document.getElementById("pacman1");
const pacman2 = document.getElementById("pacman2");
const pacman3 = document.getElementById("pacman3");



let drawBlock = (x, y, length, height, color) =>  {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, length, height);
}

let maze = [[1, 1, 1, 1, 1],
           [1, 0, 0, 0, 1],
           [0, 0, 1, 0, 1],
           [1, 0, 0, 0, 1],
           [1, 1, 1, 1, 1]];

let makeElements = () => {
    // make background
    drawBlock(0, 0, canvas.width, canvas.height, "black");

    //make walls and pellets
    for (let x=0; x<maze[0].length; x=x+1) {
        for (let y=0; y<maze.length; y=y+1) {
            if(maze[y][x] == 1) { //wall
                drawBlock(x * unit, y * unit, unit, unit, "#1F51FF");
            } else if (maze[y][x] == 0) {
                drawBlock(x*unit + unit/3, y*unit + unit/3, unit/6, unit/6, "#FBCEB1")
            }
        }
    }   
    
}

let refresh = () => {
    makeElements();
    pacman.updateState();
    pacman.move();
}

let refresher = setInterval(refresh, 1000 / fps);
// update player stats
player = new player(Math.floor(maze.Length / 2) * unit, 0, unit, unit);
refresh();` `

window.addEventListener("keydown", (event) => {
    setTimeout(() => {
        if (event.keyCode == 37) { // left
            player.currentDirection = 3;
        } else if (event.keyCode == 38) { // up
            player.currentDirection = 0;
        } else if (event.keyCode == 39) { // right
            player.currentDirection = 1;
        } else if (event.keyCode == 40) { // down
            player.currentDirection = 2;
        }
    }, 1);
})