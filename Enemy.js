import {canvasContext, fps, unit, maze, editMaze} from "./game.js";

export default class Enemy {
    constructor(x, y, width, height) {
        this.xPosition = x;
        this.yPosition = y;
        this.speed = fps;
        this.width = width;
        this.height = height;
        this.currDirection = Math.floor(Math.random() * 2);
    }

    draw(ghost) {
        canvasContext.drawImage(
            ghost, this.xPosition, this.yPosition, this.width, this.height
        ); 
    }

    
    move() {
        switch(this.currDirection) {
            case 0:
                this.yPosition -= this.speed;
                break;
            case 1:
                this.xPosition += this.speed;
                break;
            case 2:
                this.yPosition += this.speed;
                break;
            case 3: 
                this.xPosition -= this.speed;
                break;
        }
    }

}



