import {canvasContext, fps, unit, maze, editMaze} from "./game.js";

export default class Player {
    constructor(x, y, width, height) {
        this.xPosition = x;
        this.yPosition = y;
        this.speed = fps;
        this.score = 0;
        this.lives = 3;
        this.width = width;
        this.height = height;
        this.currDirection = 1;
        this.prevDirection = 1;
        this.prevprevDirection = 1;
        this.oppDirection = 3;
    }

    oppDir() { // collided, reverse direction
        this.temp = this.currDirection;
        this.currDirection = this.oppDirection;
        this.oppDirection = this.temp;
        this.prevDirection = this.temp;
    }

    sameDir() { // illegal move, restore previous state
        this.currDirection = this.prevDirection;
        this.prevDirection = this.prevprevDirection;
        switch (this.currDirection) {
            case 0:
                this.oppDirection = 2;
            case 1:
                this.oppDirection = 3;
            case 2:
                this.oppDirection = 0;
            case 3:
                this.oppDirection = 1;
        }
    }

    moveUp() {
        if (maze[Math.floor(this.yPosition / unit) - 1][Math.floor(this.xPosition / unit)]!= 1) {
            this.yPosition -= this.speed;
        } else if (maze[this.yPosition / unit + 1][this.xPosition / unit]!= 1) {
            this.oppDir();
        } else {
            this.sameDir();
        }
    }

    moveDown() {
        if (maze[Math.floor(this.yPosition / unit) + 1][Math.floor(this.xPosition / unit)]!= 1) {
            this.yPosition += this.speed;
        } else if (maze[this.yPosition / unit - 1][this.xPosition / unit]!= 1) {
            this.oppDir();
        } else {
            this.sameDir();
    }
    }

    moveLeft() {
        if (maze[Math.floor(this.yPosition / unit)][Math.floor(this.xPosition / unit) - 1] != 1) {
            this.xPosition -= this.speed;
        } else if (maze[Math.floor(this.yPosition / unit)][Math.floor(this.xPosition / unit + 1)] != 1) {
            this.oppDir();
        } else {
            this.sameDir();
        }
    }

    moveRight() {
        if (maze[Math.floor(this.yPosition / unit)][Math.floor(this.xPosition / unit) + 1] != 1) {
            this.xPosition += this.speed;
        } else if (maze[this.yPosition / unit][this.xPosition / unit - 1] != 1) {
            this.oppDir();
        } else {
            this.sameDir();
    }

    }

    eat() {
        if(maze[this.yPosition / unit][this.xPosition / unit] == 0) {
            this.score++;
            //editMaze(maze, this.yPosition, this.xPosition, 2);
            maze[this.yPosition / unit][this.xPosition / unit] = 2;
        }
    }

    draw(pacman) {
        canvasContext.drawImage(
            pacman, this.xPosition, this.yPosition, this.width, this.height
        ); 
    }


    move() {
        switch(this.currDirection) {
            case 0:
                this.moveUp();
                break;
            case 1:
                this.moveRight();
                break;
            case 2:
                this.moveDown();
                break;
            case 3: 
                this.moveLeft();
                break;
        }
    }


}



