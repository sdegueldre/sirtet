import TileGrid from './Tilegrid.js';
import Tetromino from './Tetromino';

const req = require.context('../assets/', false, /\.png$/);
const assets = req.keys().reduce((acc, v) => {
    acc[v.match(/\/(.*)\.png$/)[1]] = req(v);
    return acc;
}, Object.create(null));

const BASE_SPEED = 60;

export default class Graphics {
  constructor(boardWidth, boardHeight){
    this.tickSpeed = BASE_SPEED;
    this.lastUpdate = 0;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.frameCount = 0;
  }

  startSketch(){
    this.setup();
    this.refresher();
  }

  refresher(){
    this.draw();
    this.frameCount++;
    window.requestAnimationFrame(this.refresher.bind(this));
  }

  keyPressHandler(event){
    if(this.keyPressed){
      this.keyPressed(event);
    }
  }

  keyReleaseHandler(event){
    if(this.keyReleased){
      this.keyReleased(event);
    }
  }

  resizeHandler(event){
    if(this.windowResized){
      this.windowResized(event);
    }
  }

  loadImage(path){
    let img = new Image();
    img.src = path;
    return new Promise(resolve => {
        img.addEventListener('load', () => resolve(img));
    });
  }

  setup(){
    // Background: only rerendered once after a tetromino drops, contains the board
    // and blocks that have already landed
    this.backCanvas = new Canvas();
    // Only used for the falling tetromino and pause menu
    this.frontCanvas = new Canvas();
    this.initGameState();
    this.windowResized();
  }

  initGameState(){
    this.tileGrid = new TileGrid(this.boardWidth, this.boardHeight, this.spriteArray);
    const self = this;
    this.gameState = {
      paused: false,
      score: 0,
      sequence: shuffle([0, 1, 2, 3, 4, 5, 6]),
      current: 0,
      menuOverlay: false,
      level: 0,
      clearedLines: 0,
      nextTetromino: function(){
        this.active = this.next;
        this.current++;
        if(this.current === 7){
          this.sequence = shuffle(this.sequence);
          this.current = 0;
        }
        this.next = new Tetromino(this.sequence[this.current], self.spriteArray, self.tileGrid);
      }
    };
    this.gameState.next = new Tetromino(this.gameState.sequence[0], this.spriteArray, this.tileGrid);
    this.gameState.nextTetromino();
    if(!this.listening){
        window.addEventListener('keydown', this.keyPressHandler.bind(this));
        window.addEventListener('keyup', this.keyReleaseHandler.bind(this));
        window.addEventListener('resize', this.resizeHandler.bind(this));
        this.listening = true;
    }
  }

  windowResized(){
    let cvWidth = window.innerWidth;
    let cvHeight = window.innerHeight;
    this.frontCanvas.width = this.backCanvas.width = cvWidth;
    this.frontCanvas.height = this.backCanvas.height = cvHeight;
    this.tileSize = Math.floor(cvHeight * 0.98 / this.boardHeight);
    let horizontal = Math.floor(cvWidth / 2 - this.boardWidth * this.tileSize / 2);
    let vertical = Math.floor(cvHeight / 2 - this.boardHeight * this.tileSize / 2);
    this.frontCanvas.context.translate(horizontal, vertical);
    this.backCanvas.context.translate(horizontal, vertical);
    this.gameState.menuOverlay = false;
    this.draw("backCanvas");
  }

  async init(){
    this.spriteArray = {};
    const promises = [];
    for(let key in assets){
        promises.push(this.loadImage([assets[key]]).then(img => this.spriteArray[key] = img));
    }
    await Promise.all(promises);
    this.startSketch();
  }

  draw(repaint){
    if(!this.gameState.paused || repaint === "backCanvas"){
      let toRedraw = (typeof repaint == "undefined") ? this.update() : repaint;

      if(toRedraw === "backCanvas"){
        this.backCanvas.clear();
        this.backCanvas.context.fillStyle = '#ff8a00';
        const border = Math.ceil(this.tileSize * 0.05);
        this.backCanvas.context.fillRect(
          -border,
          -border,
          this.boardWidth * this.tileSize + 2 * border,
          this.boardHeight * this.tileSize + 2 * border
        );
        this.tileGrid.display(this.tileSize, this.backCanvas);
        this.backCanvas.context.font = `${this.tileSize}px monospace`;
        this.backCanvas.context.fillText("Score: " + this.gameState.score, this.tileSize * (this.boardWidth + 0.5), this.tileSize);
        this.backCanvas.context.fillText("Level " + this.gameState.level, this.tileSize * (this.boardWidth + 0.5), this.tileSize * 2.5);
        this.backCanvas.context.fillText("Up next: ", this.tileSize * -5, this.tileSize);
        this.gameState.next.display(-8, 1.5, this.tileSize, this.backCanvas);
        toRedraw = "frontCanvas";
      }
      if(toRedraw === "frontCanvas"){
        this.frontCanvas.clear();
        this.gameState.active.display(0, 0, this.tileSize, this.frontCanvas);
      }
    }
    if(this.gameState.paused && this.gameState.menuOverlay === false){
      this.drawMenu(this.tileSize);
    }
  }

  drawMenu(scale){
    this.frontCanvas.context.save();
    this.frontCanvas.context.resetTransform();
    this.frontCanvas.context.fillStyle = 'rgba(50,50,50,0.5)';
    this.frontCanvas.context.fillRect(0, 0, window.innerWidth, window.innerHeight);

    this.frontCanvas.context.strokeStyle = `black`;
    this.frontCanvas.context.lineWidth = 0.1 * scale;
    this.frontCanvas.context.font = `${scale * 2}px sans-serif`;
    this.frontCanvas.context.textAlign = 'center';
    this.frontCanvas.context.fillStyle = 'white';
    this.frontCanvas.context.strokeText("Paused", window.innerWidth / 2, 2 * scale);
    this.frontCanvas.context.fillText("Paused", window.innerWidth / 2, 2 * scale);

    this.frontCanvas.context.restore();
    this.gameState.menuOverlay = true;
  }

  update(){
    let now = this.frameCount;
    if(now === 0){
      return "backCanvas";
    }
    if(now - this.lastUpdate > this.tickSpeed){
      this.lastUpdate = now;
      if(!this.gameState.active.canDrop){
        this.gameState.active.anchor();
        this.tileGrid.removeFullLines(this.gameState);
        this.gameState.nextTetromino();
        if(this.tileGrid.collide(this.gameState.active.levelSpace(this.gameState.active.blocks))){
          this.gameOver();
        }
        return "backCanvas";
      } else {
        this.gameState.active.y++;
        return "frontCanvas";
      }
    }
    return "nothing";
  }

  gameOver(){
    this.initGameState(this.boardWidth, this.boardHeight);
  }

  keyPressed(event){
    switch(event.code){
      case "ArrowLeft":
        this.gameState.active.moveLeft();
        break;
      case "ArrowRight":
        this.gameState.active.moveRight();
        break;
      case "ArrowUp":
        this.gameState.active.rotateClockwise();
        break;
      case "ArrowDown":
        this.tickSpeed = 1;
        break;
      case "Escape":
        this.gameState.paused ^= true;
        this.gameState.menuOverlay = false;
        break;
    }
    this.draw("frontCanvas");
  }

  keyReleased(event){
    switch(event.code){
    case "ArrowDown":
      this.tickSpeed = BASE_SPEED;
      break;
    }
    this.draw("frontCanvas");
  }
}

function Canvas(){
  let canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.context = canvas.getContext('2d');
  canvas.style.position = "absolute";
  canvas.clear = function(){
    this.context.save();
    this.context.resetTransform();
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.restore();
  };
  document.getElementById('gameContainer').appendChild(canvas);
  return canvas;
}

function shuffle(arr){
	for(let i = arr.length - 1; i > 0; i--){
		const j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
