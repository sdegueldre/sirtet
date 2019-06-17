/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets sync recursive ^\\.\\/.*\\.png$":
/*!***********************************!*\
  !*** ./assets sync ^\.\/.*\.png$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./I.png\": \"./assets/I.png\",\n\t\"./J.png\": \"./assets/J.png\",\n\t\"./L.png\": \"./assets/L.png\",\n\t\"./O.png\": \"./assets/O.png\",\n\t\"./S.png\": \"./assets/S.png\",\n\t\"./T.png\": \"./assets/T.png\",\n\t\"./Z.png\": \"./assets/Z.png\",\n\t\"./bg.png\": \"./assets/bg.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./assets sync recursive ^\\\\.\\\\/.*\\\\.png$\";\n\n//# sourceURL=webpack:///./assets_sync_^\\.\\/.*\\.png$?");

/***/ }),

/***/ "./assets/I.png":
/*!**********************!*\
  !*** ./assets/I.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fa387c565d610f771af0a9bca454e705.png\";\n\n//# sourceURL=webpack:///./assets/I.png?");

/***/ }),

/***/ "./assets/J.png":
/*!**********************!*\
  !*** ./assets/J.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d3fb130f323b5355981e49a552a834ce.png\";\n\n//# sourceURL=webpack:///./assets/J.png?");

/***/ }),

/***/ "./assets/L.png":
/*!**********************!*\
  !*** ./assets/L.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"29d7197545968012c080fdedb8c7e946.png\";\n\n//# sourceURL=webpack:///./assets/L.png?");

/***/ }),

/***/ "./assets/O.png":
/*!**********************!*\
  !*** ./assets/O.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e6fb8a334463a502b94b1d78981d1973.png\";\n\n//# sourceURL=webpack:///./assets/O.png?");

/***/ }),

/***/ "./assets/S.png":
/*!**********************!*\
  !*** ./assets/S.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"81eb7b0af84a95fc258d70bf004fafa0.png\";\n\n//# sourceURL=webpack:///./assets/S.png?");

/***/ }),

/***/ "./assets/T.png":
/*!**********************!*\
  !*** ./assets/T.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7603e0332f5041044e669c90e727a78c.png\";\n\n//# sourceURL=webpack:///./assets/T.png?");

/***/ }),

/***/ "./assets/Z.png":
/*!**********************!*\
  !*** ./assets/Z.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"ccf1a30c79d24b25dfc0397405da6b52.png\";\n\n//# sourceURL=webpack:///./assets/Z.png?");

/***/ }),

/***/ "./assets/bg.png":
/*!***********************!*\
  !*** ./assets/bg.png ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8aebdb874189951064abf7dd0e38b9ef.png\";\n\n//# sourceURL=webpack:///./assets/bg.png?");

/***/ }),

/***/ "./src/Tetromino.js":
/*!**************************!*\
  !*** ./src/Tetromino.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tetromino; });\nclass Tetromino {\n  constructor(selector, spriteArray, tileGrid){\n    this.x = 5;\n    this.y = 0;\n    this.tileGrid = tileGrid;\n    this.shape = Tetromino.shapes[selector];\n    this.sprite = spriteArray[this.shape];\n    this.blocks = Tetromino.tiles[selector];\n  }\n\n  display(x, y, tileSize, canvas){\n    for(let block of this.blocks){\n      canvas.context.drawImage(this.sprite, (block[0]+this.x+x)*tileSize, (block[1]+this.y+y)*tileSize, tileSize, tileSize);\n    }\n  }\n\n  rotateClockwise(){\n    let rotatedBlocks = this.blocks.map((v) => [-v[1],v[0]]);\n    if(!this.tileGrid.collide(this.levelSpace(rotatedBlocks))){\n      this.blocks = rotatedBlocks;\n    }\n  }\n\n  rotateCounterClockwise(){\n    let rotatedBlocks = this.blocks.map((v) => [v[1],-v[0]]);\n    if(!this.tileGrid.collide(this.levelSpace(rotatedBlocks))){\n      this.blocks = rotatedBlocks;\n    }\n  }\n\n  levelSpace(blocks){\n    return blocks.map(b => [b[0]+this.x, b[1]+this.y])\n  }\n\n  // Transfers the tile of the active tile to the grid\n  anchor(){\n    for(let block of this.blocks)\n      this.tileGrid.tile[block[0]+this.x][block[1]+this.y] = this.sprite;\n  }\n\n  moveLeft(){\n    let movedBlocks = this.blocks.map((v) => [v[0]-1,v[1]]);\n    if(!this.tileGrid.collide(this.levelSpace(movedBlocks)))\n      this.x--;\n  }\n\n  moveRight(){\n    let movedBlocks = this.blocks.map((v) => [v[0]+1,v[1]]);\n    if(!this.tileGrid.collide(this.levelSpace(movedBlocks)))\n      this.x++;\n  }\n\n  get canDrop(){\n    let droppedBlocks = this.blocks.map((v) => [v[0],v[1]+1]);\n    return (!this.tileGrid.collide(this.levelSpace(droppedBlocks)));\n  }\n}\n\nTetromino.shapes = [\"I\", \"J\", \"L\", \"O\", \"S\", \"T\", \"Z\"];\nTetromino.colors = [\"rgb(0,165,255)\",\"rgb(1,1,254)\",\"orange\",\"rgb(254,254,1)\",\"rgb(1,254,1)\",\"rgb(254,1,254)\",\"rgb(254,1,1)\"];\nTetromino.tiles = [\n[[-2,0], [-1,0], [0,0], [1,0]], // I\n[[-1,0], [0,0], [1,0], [-1,1]], // J\n[[-1,0], [0,0], [1,0], [1,1]],  // L\n[[-1,0], [0,0], [-1,1], [0,1]], // O\n[[0,0], [1,0], [-1,1], [0,1]],  // S\n[[-1,0], [0,0], [1,0], [0,1]],  // T\n[[-1,0], [0,0], [0,1], [1,1]]   // Z\n]\n\n\n//# sourceURL=webpack:///./src/Tetromino.js?");

/***/ }),

/***/ "./src/Tilegrid.js":
/*!*************************!*\
  !*** ./src/Tilegrid.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TileGrid; });\nclass TileGrid {\n  constructor(width, height, spriteArray){\n    this.width = width;\n    this.height = height;\n    this.tile = [];\n    this.spriteArray = spriteArray;\n    for(let i = 0; i < width; i++){\n      this.tile[i] = [];\n      for(let j = 0; j < height; j++){\n        this.tile[i][j] = this.spriteArray[\"background\"];\n      }\n    }\n  }\n\n  display(tileSize, canvas){\n    for(let i = 0; i < this.width; i++)\n      for(let j = 0; j < this.height; j++){\n        canvas.context.drawImage(this.tile[i][j], i*tileSize, j*tileSize, tileSize, tileSize);\n      }\n  }\n\n  collide(blockArray){\n    for(let block of blockArray){\n      if(block[0] < 0 || block[0] >= this.width ||\n        block[1] < 0 || block[1] >= this.height ||\n        this.tile[block[0]][block[1]] != this.spriteArray.background)\n      {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  removeFullLines(gameState){\n    let clearedLines = 0;\n    for(let i = 0; i < this.height; i++){\n      if(this.lineIsFull(i)){\n        this.shiftDown(i);\n        clearedLines++;\n      }\n    }\n    switch(clearedLines){\n    case 1:\n      gameState.score += 40*(gameState.level+1);\n      break;\n    case 2:\n      gameState.score += 100*(gameState.level+1);\n      break;\n    case 3:\n      gameState.score += 300*(gameState.level+1);\n      break;\n    case 4:\n      gameState.score += 1200*(gameState.level+1);\n      break;\n    }\n    gameState.clearedLines += clearedLines;\n    gameState.level = ~~(gameState.clearedLines/10);\n  }\n\n  lineIsFull(y){\n    for(let i = 0; i < this.width; i++)\n      if(this.tile[i][y] == this.spriteArray.background)\n        return false;\n    return true;\n  }\n\n  shiftDown(y){\n    for(let j = y; j > 0; j--)\n      for(let i = 0; i < this.width; i++)\n        this.tile[i][j] = this.tile[i][j-1];\n    for(let i = 0; i < this.width; i++)\n      this.tile[i][0] = this.spriteArray.background;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Tilegrid.js?");

/***/ }),

/***/ "./src/graphics.js":
/*!*************************!*\
  !*** ./src/graphics.js ***!
  \*************************/
/*! exports provided: default, createCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Graphics; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCanvas\", function() { return createCanvas; });\nclass Graphics {\n  constructor(){\n    this.frameCount = 0;\n    this.itemsToLoad = 0;\n\n    this.windowHeight = window.innerHeight;\n    this.windowWidth = window.innerWidth;\n\n    window.addEventListener('keydown', this.keyPressHandler.bind(this));\n    window.addEventListener('keyup', this.keyReleaseHandler.bind(this));\n    window.addEventListener('resize', this.resizeHandler.bind(this));\n  }\n\n  startSketch(){\n    this.setup();\n    this.refresher();\n  }\n\n  refresher(){\n    this.windowHeight = window.innerHeight;\n    this.windowWidth = window.innerWidth;\n    this.draw();\n    this.frameCount++;\n    requestAnimationFrame(this.refresher.bind(this));\n  }\n\n  loadingHandler(){\n   if(--this.itemsToLoad == 0)\n    this.startSketch();\n  }\n\n  keyPressHandler(event){\n    if(this.keyPressed)\n      this.keyPressed(event);\n  }\n\n  keyReleaseHandler(event){\n    if(this.keyReleased)\n      this.keyReleased(event);\n  }\n\n  resizeHandler(event){\n    this.windowHeight = window.innerHeight;\n    this.windowWidth = window.innerWidth;\n    if(this.windowResized)\n      this.windowResized(event);\n  }\n\n  loadImage(path){\n    let img = new Image();\n    img.src = path;\n    this.itemsToLoad++;\n    img.addEventListener('load', this.loadingHandler.bind(this));\n    return img;\n  }\n}\n\nfunction createCanvas(width, height){\n  let canvas = document.createElement(\"canvas\");\n  canvas.width = width;\n  canvas.height = height;\n  canvas.context = canvas.getContext('2d');\n  canvas.style.position = \"absolute\";\n  canvas.clear = function(){\n    this.context.save();\n    this.context.resetTransform();\n    this.context.clearRect(0, 0, this.width, this.height);\n    this.context.restore();\n  }\n  document.getElementById('gameContainer').appendChild(canvas);\n  return canvas;\n}\n\n\n//# sourceURL=webpack:///./src/graphics.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphics_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphics.js */ \"./src/graphics.js\");\n/* harmony import */ var _Tilegrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tilegrid */ \"./src/Tilegrid.js\");\n/* harmony import */ var _Tetromino__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tetromino */ \"./src/Tetromino.js\");\n\n\n\n\nlet frontCanvas; // Only used for the falling tetromino\nlet backCanvas;  // Background: only rerendered once after a tetromino drops\n\nconst boardWidth = 10;\nconst boardHeight = 20;\n\nlet tileGrid;\nlet gameState = {};\nlet backgroundColor = \"dimgray\";\nlet spriteArray = {};\nlet tileSize;\n\nlet lastUpdate = 0;\nlet tickSpeed = 60;\nlet baseSpeed = tickSpeed;\n\nconst graphics = new _graphics_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngraphics.preload = function(){\n\tspriteArray.background = this.loadImage(__webpack_require__(/*! ../assets/bg.png */ \"./assets/bg.png\"));\n\tfor(let shape of _Tetromino__WEBPACK_IMPORTED_MODULE_2__[\"default\"].shapes){\n\t\tspriteArray[shape] = this.loadImage(__webpack_require__(\"./assets sync recursive ^\\\\.\\\\/.*\\\\.png$\")(`./${shape}.png`));\n\t}\n}\n\ngraphics.setup = function(){\n\tfrontCanvas = Object(_graphics_js__WEBPACK_IMPORTED_MODULE_0__[\"createCanvas\"])();\n  backCanvas = Object(_graphics_js__WEBPACK_IMPORTED_MODULE_0__[\"createCanvas\"])();\n  frontCanvas.style.zIndex = 1;\n  this.initGameState();\n\tthis.windowResized();\n}\n\ngraphics.windowResized = function(){\n\tlet cvWidth = this.windowWidth;\n\tlet cvHeight = this.windowHeight-32;\n  frontCanvas.width = backCanvas.width = cvWidth;\n  frontCanvas.height = backCanvas.height = cvHeight;\n  tileSize = Math.floor(cvHeight*0.98/boardHeight);\n  let horizontal = Math.floor(cvWidth/2 - boardWidth*tileSize/2);\n  let vertical = Math.floor(cvHeight/2 - boardHeight*tileSize/2);\n  frontCanvas.context.translate(horizontal, vertical);\n  backCanvas.context.translate(horizontal, vertical);\n  gameState.menuOverlay = false;\n  this.draw(\"backCanvas\");\n}\n\ngraphics.initGameState = function(){\n  tileGrid = new _Tilegrid__WEBPACK_IMPORTED_MODULE_1__[\"default\"](boardWidth, boardHeight, spriteArray);\n  gameState.paused = false;\n  gameState.score = 0;\n  gameState.sequence = shuffle([0,1,2,3,4,5,6]);\n  gameState.current = 0;\n  gameState.active;\n  gameState.next = new _Tetromino__WEBPACK_IMPORTED_MODULE_2__[\"default\"](gameState.sequence[0], spriteArray, tileGrid);\n  gameState.nextTetromino = function(){\n    gameState.active = gameState.next;\n    gameState.current++;\n    if(gameState.current == 7){\n      gameState.sequence = shuffle(gameState.sequence);\n      gameState.current = 0;\n    }\n    gameState.next = new _Tetromino__WEBPACK_IMPORTED_MODULE_2__[\"default\"](gameState.sequence[gameState.current], spriteArray, tileGrid);\n  }\n  gameState.nextTetromino();\n  gameState.menuOverlay = false;\n\tgameState.level = 0;\n\tgameState.clearedLines = 0;\n}\n\ngraphics.draw = function(repaint){\n\tif(!gameState.paused || repaint == \"backCanvas\"){\n    let toRedraw = (typeof repaint == \"undefined\") ? this.update() : repaint;\n\n    if(toRedraw == \"backCanvas\" && backCanvas){\n    \tbackCanvas.clear()\n    \tbackCanvas.context.fillStyle ='#ff8a00';\n\t\t\tlet border = Math.ceil(tileSize*0.05)\n    \tbackCanvas.context.fillRect(-border, -border,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tboardWidth*tileSize + 2*border,\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tboardHeight*tileSize + 2*border);\n    \ttileGrid.display(tileSize, backCanvas);\n      backCanvas.context.font = `${tileSize}px monospace`;\n      backCanvas.context.fillText(\"Score: \" + gameState.score, tileSize*(boardWidth+0.5), tileSize);\n\t\t\tbackCanvas.context.fillText(\"Level \" + gameState.level, tileSize*(boardWidth+0.5), tileSize*2.5);\n\t\t\tbackCanvas.context.fillText(\"Up next: \", tileSize*-5, tileSize);\n\t\t\tgameState.next.display(-8,1.5,tileSize, backCanvas);\n      toRedraw = \"frontCanvas\";\n    }\n    if(toRedraw == \"frontCanvas\" && frontCanvas){\n      frontCanvas.clear();\n    \tgameState.active.display(0,0,tileSize, frontCanvas);\n    }\n\n  }\n  if(gameState.paused && gameState.menuOverlay == false){\n\t\tthis.drawMenu(tileSize);\n  }\n}\n\ngraphics.drawMenu = function(scale){\n  frontCanvas.context.save();\n  frontCanvas.context.resetTransform();\n  frontCanvas.context.fillStyle = 'rgba(50,50,50,0.5)';\n\tfrontCanvas.context.fillRect(0,0,this.windowWidth,this.windowHeight);\n\n  frontCanvas.context.strokeStyle = `black`;\n  frontCanvas.context.lineWidth = 0.1*scale;\n\tfrontCanvas.context.font = `${scale*2}px sans-serif`;\n  frontCanvas.context.textAlign = 'center';\n  frontCanvas.context.fillStyle = 'white';\n\tfrontCanvas.context.strokeText(\"Paused\", this.windowWidth/2, 2*scale);\n  frontCanvas.context.fillText(\"Paused\", this.windowWidth/2, 2*scale);\n\n  frontCanvas.context.restore();\n  gameState.menuOverlay = true;\n}\n\ngraphics.update = function(){\n\tlet now = this.frameCount;\n  if(now == 0)\n    return \"backCanvas\";\n\tif(now - lastUpdate > tickSpeed){\n\t\tlastUpdate = now;\n\t\tif(!gameState.active.canDrop){\n\t\t\tgameState.active.anchor();\n\t\t\ttileGrid.removeFullLines(gameState);\n\t\t\tgameState.nextTetromino();\n\t\t\tif(tileGrid.collide(gameState.active.levelSpace(gameState.active.blocks)))\n\t\t\t\tthis.gameOver();\n      return \"backCanvas\";\n\t\t} else {\n\t\t\tgameState.active.y++;\n      return \"frontCanvas\";\n\t\t}\n\t}\n  return \"nothing\";\n}\n\ngraphics.gameOver = function(){\n\tconsole.log(\"Game over\");\n\tthis.initGameState();\n}\n\ngraphics.keyPressed = function(event){\n\tswitch(event.code){\n\tcase \"ArrowLeft\":\n\t\tgameState.active.moveLeft();\n\t\tbreak;\n\tcase \"ArrowRight\":\n\t\tgameState.active.moveRight();\n\t\tbreak;\n\tcase \"ArrowUp\":\n\t\tgameState.active.rotateClockwise();\n\t\tbreak;\n\tcase \"ArrowDown\":\n\t\ttickSpeed = 1;\n\t\tbreak;\n\tcase \"Escape\":\n\t\tgameState.paused ^= true;\n    gameState.menuOverlay = false;\n\t\tbreak;\n\t}\n  this.draw(\"frontCanvas\");\n}\n\ngraphics.keyReleased = function(event){\n\tswitch(event.code){\n\tcase \"ArrowDown\":\n\t\ttickSpeed = baseSpeed;\n\t\tbreak;\n\t}\n  this.draw(\"frontCanvas\");\n}\n\nfunction shuffle(arr){\n\tfor(let i = arr.length-1; i > 0; i--){\n\t\tconst j = Math.floor(Math.random() * (i + 1));\n    let temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n  }\n  return arr;\n}\n\ngraphics.preload();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });