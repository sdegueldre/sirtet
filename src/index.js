import Graphics, { Canvas } from "./graphics.js";
import TileGrid from "./Tilegrid";
import Tetromino from "./Tetromino";

// Only used for the falling tetromino and pause menu
let frontCanvas;
// Background: only rerendered once after a tetromino drops, contains the board
// and blocks that have already landed
let backCanvas;

const boardWidth = 10;
const boardHeight = 20;

let tileGrid;
let gameState = {};
let spriteArray = {};
let tileSize;

let lastUpdate = 0;
let tickSpeed = 60;
let baseSpeed = tickSpeed;

const graphics = new Graphics();
  graphics.preload = function(){
  spriteArray.background = this.loadImage(require("../assets/bg.png"));
  for(let shape of Tetromino.shapes){
    spriteArray[shape] = this.loadImage(require(`../assets/${shape}.png`));
  }
};

graphics.setup = function(){
  frontCanvas = new Canvas();
  backCanvas = new Canvas();
  frontCanvas.style.zIndex = 1;
  this.initGameState();
  this.windowResized();
};

graphics.windowResized = function(){
  let cvWidth = this.windowWidth;
  let cvHeight = this.windowHeight - 32;
  frontCanvas.width = backCanvas.width = cvWidth;
  frontCanvas.height = backCanvas.height = cvHeight;
  tileSize = Math.floor(cvHeight * 0.98 / boardHeight);
  let horizontal = Math.floor(cvWidth / 2 - boardWidth * tileSize / 2);
  let vertical = Math.floor(cvHeight / 2 - boardHeight * tileSize / 2);
  frontCanvas.context.translate(horizontal, vertical);
  backCanvas.context.translate(horizontal, vertical);
  gameState.menuOverlay = false;
  this.draw("backCanvas");
};

graphics.initGameState = function(){
  tileGrid = new TileGrid(boardWidth, boardHeight, spriteArray);
  gameState.paused = false;
  gameState.score = 0;
  gameState.sequence = shuffle([0, 1, 2, 3, 4, 5, 6]);
  gameState.current = 0;
  gameState.active;
  gameState.next = new Tetromino(gameState.sequence[0], spriteArray, tileGrid);
  gameState.nextTetromino = function(){
    gameState.active = gameState.next;
    gameState.current++;
    if(gameState.current === 7){
      gameState.sequence = shuffle(gameState.sequence);
      gameState.current = 0;
    }
    gameState.next = new Tetromino(gameState.sequence[gameState.current], spriteArray, tileGrid);
  };
  gameState.nextTetromino();
  gameState.menuOverlay = false;
  gameState.level = 0;
  gameState.clearedLines = 0;
};

graphics.draw = function(repaint){
  if(!gameState.paused || repaint === "backCanvas"){
    let toRedraw = (typeof repaint == "undefined") ? this.update() : repaint;

    if(toRedraw === "backCanvas" && backCanvas){
      backCanvas.clear();
      backCanvas.context.fillStyle = '#ff8a00';
      const border = Math.ceil(tileSize * 0.05);
      backCanvas.context.fillRect(
        -border,
        -border,
        boardWidth * tileSize + 2 * border,
        boardHeight * tileSize + 2 * border
      );
      tileGrid.display(tileSize, backCanvas);
      backCanvas.context.font = `${tileSize}px monospace`;
      backCanvas.context.fillText("Score: " + gameState.score, tileSize * (boardWidth + 0.5), tileSize);
      backCanvas.context.fillText("Level " + gameState.level, tileSize * (boardWidth + 0.5), tileSize * 2.5);
      backCanvas.context.fillText("Up next: ", tileSize * -5, tileSize);
      gameState.next.display(-8, 1.5, tileSize, backCanvas);
      toRedraw = "frontCanvas";
    }
    if(toRedraw === "frontCanvas" && frontCanvas){
      frontCanvas.clear();
      gameState.active.display(0, 0, tileSize, frontCanvas);
    }
  }
  if(gameState.paused && gameState.menuOverlay === false){
    this.drawMenu(tileSize);
  }
};

graphics.drawMenu = function(scale){
  frontCanvas.context.save();
  frontCanvas.context.resetTransform();
  frontCanvas.context.fillStyle = 'rgba(50,50,50,0.5)';
	frontCanvas.context.fillRect(0, 0, this.windowWidth, this.windowHeight);

  frontCanvas.context.strokeStyle = `black`;
  frontCanvas.context.lineWidth = 0.1 * scale;
	frontCanvas.context.font = `${scale * 2}px sans-serif`;
  frontCanvas.context.textAlign = 'center';
  frontCanvas.context.fillStyle = 'white';
	frontCanvas.context.strokeText("Paused", this.windowWidth / 2, 2 * scale);
  frontCanvas.context.fillText("Paused", this.windowWidth / 2, 2 * scale);

  frontCanvas.context.restore();
  gameState.menuOverlay = true;
};

graphics.update = function(){
	let now = this.frameCount;
  if(now === 0){
    return "backCanvas";
  }
	if(now - lastUpdate > tickSpeed){
		lastUpdate = now;
		if(!gameState.active.canDrop){
			gameState.active.anchor();
			tileGrid.removeFullLines(gameState);
			gameState.nextTetromino();
			if(tileGrid.collide(gameState.active.levelSpace(gameState.active.blocks))){
				this.gameOver();
      }
      return "backCanvas";
		} else {
			gameState.active.y++;
      return "frontCanvas";
		}
	}
  return "nothing";
};

graphics.gameOver = function(){
	console.log("Game over"); // TODO: show this on screen rather than in console.
	this.initGameState();
};

graphics.keyPressed = function(event){
	switch(event.code){
	case "ArrowLeft":
		gameState.active.moveLeft();
		break;
	case "ArrowRight":
		gameState.active.moveRight();
		break;
	case "ArrowUp":
		gameState.active.rotateClockwise();
		break;
	case "ArrowDown":
		tickSpeed = 1;
		break;
	case "Escape":
		gameState.paused ^= true;
    gameState.menuOverlay = false;
		break;
	}
  this.draw("frontCanvas");
};

graphics.keyReleased = function(event){
	switch(event.code){
	case "ArrowDown":
		tickSpeed = baseSpeed;
		break;
	}
  this.draw("frontCanvas");
};

function shuffle(arr){
	for(let i = arr.length - 1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

graphics.preload();
