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
    this.score = document.getElementById('score');
    this.level = document.getElementById('level');
    this.next = document.getElementById('next');
    this.menu = document.getElementById('menu');
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
    this.frontCanvas.classList.add('position-absolute');
    // Displays next tetromino
    this.nextCanvas = new Canvas(this.tileSize * 4, this.tileSize * 2);

    document.getElementById('game-container').append(this.backCanvas, this.frontCanvas);
    document.getElementById('next').append(this.nextCanvas);
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
      window.addEventListener('keydown', this.keyPressed.bind(this));
      window.addEventListener('keyup', this.keyReleased.bind(this));
      window.addEventListener('resize', this.windowResized.bind(this));
      this.listening = true;
    }
  }

  windowResized(){
    this.tileSize = Math.floor(window.innerHeight * 0.98 / this.boardHeight);
    this.frontCanvas.height = this.backCanvas.height = (this.tileSize * (this.boardHeight + 0.1));
    this.frontCanvas.width = this.backCanvas.width = (this.tileSize * (this.boardWidth + 0.1));
    this.nextCanvas.width = this.nextCanvas.height = (this.tileSize * 4);
    const border = this.tileSize * 0.05;
    [this.frontCanvas, this.backCanvas].forEach(c => c.context.translate(border, border));
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
        this.score.textContent = `Score: ${this.gameState.score}`;
        this.level.textContent = `Level: ${this.gameState.level}`;
        this.nextCanvas.clear();
        this.gameState.next.display(-3, 0, this.tileSize, this.nextCanvas);
      }
      this.frontCanvas.clear();
      this.gameState.active.display(0, 0, this.tileSize, this.frontCanvas);
      const prevY = this.gameState.active.y;
      while(this.gameState.active.canDrop){
        this.gameState.active.y++;
      }
      this.frontCanvas.context.globalAlpha = 0.1 * (Math.sin(this.frameCount / 15) + 1) + 0.25;
      this.gameState.active.display(0, 0, this.tileSize, this.frontCanvas);
      this.frontCanvas.context.globalAlpha = 1.0;
      this.gameState.active.y = prevY;
    }
    if(this.gameState.paused){
      if(this.menu.style.display !== 'flex'){
        this.menu.style.display = 'flex';
      }
    } else {
      this.menu.style.display = 'none';
    }
  }

  update(options = {}){
    if(options.drop){
      while(this.gameState.active.canDrop){
        this.gameState.active.y++;
      }
    }
    let now = this.frameCount;
    if(now === 0){
      return "backCanvas";
    }
    if(now - this.lastUpdate > this.tickSpeed || options.drop){
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
        break;
      case "KeyD":
        this.update({
          drop: true,
        });
        this.draw("backCanvas");
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

function Canvas(height = window.innerHeight, width){
  let canvas = document.createElement("canvas");
  canvas.height = height;
  canvas.width = width || height * this.boardWidth / this.boardHeight;
  canvas.context = canvas.getContext('2d');
  canvas.clear = function(){
    this.context.save();
    this.context.resetTransform();
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.restore();
  };
  return canvas;
}

function shuffle(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
