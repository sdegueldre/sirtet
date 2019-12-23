export default class Graphics {
  constructor(){
    this.frameCount = 0;
    this.itemsToLoad = 0;

    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;

    window.addEventListener('keydown', this.keyPressHandler.bind(this));
    window.addEventListener('keyup', this.keyReleaseHandler.bind(this));
    window.addEventListener('resize', this.resizeHandler.bind(this));
  }

  startSketch(){
    this.setup();
    this.refresher();
  }

  refresher(){
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.draw();
    this.frameCount++;
    window.requestAnimationFrame(this.refresher.bind(this));
  }

  loadingHandler(){
    if(--this.itemsToLoad === 0){
      this.startSketch();
    }
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
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    if(this.windowResized){
      this.windowResized(event);
    }
  }

  loadImage(path){
    let img = new Image();
    img.src = path;
    this.itemsToLoad++;
    img.addEventListener('load', this.loadingHandler.bind(this));
    return img;
  }
}

export function Canvas(width, height){
  let canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
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
