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
/******/ 	__webpack_require__.p = "/sirtet/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/Graphics.js":
/*!*************************!*\
  !*** ./src/Graphics.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Graphics; });\n/* harmony import */ var _Tilegrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tilegrid.js */ \"./src/Tilegrid.js\");\n/* harmony import */ var _Tetromino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tetromino */ \"./src/Tetromino.js\");\n/* harmony import */ var _assets_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/bg.png */ \"./assets/bg.png\");\n/* harmony import */ var _assets_bg_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_bg_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_I_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/I.png */ \"./assets/I.png\");\n/* harmony import */ var _assets_I_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_I_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_J_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/J.png */ \"./assets/J.png\");\n/* harmony import */ var _assets_J_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_J_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_L_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/L.png */ \"./assets/L.png\");\n/* harmony import */ var _assets_L_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_L_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_O_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/O.png */ \"./assets/O.png\");\n/* harmony import */ var _assets_O_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_O_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _assets_S_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/S.png */ \"./assets/S.png\");\n/* harmony import */ var _assets_S_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_S_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets_T_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/T.png */ \"./assets/T.png\");\n/* harmony import */ var _assets_T_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_T_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_Z_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/Z.png */ \"./assets/Z.png\");\n/* harmony import */ var _assets_Z_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_Z_png__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\nconst BASE_SPEED = 60;\n\nclass Graphics {\n  constructor(boardWidth, boardHeight){\n    this.tickSpeed = BASE_SPEED;\n    this.lastUpdate = 0;\n    this.boardWidth = boardWidth;\n    this.boardHeight = boardHeight;\n    this.frameCount = 0;\n    this.itemsToLoad = 0;\n\n    this.windowHeight = window.innerHeight;\n    this.windowWidth = window.innerWidth;\n  }\n\n  startSketch(){\n    this.setup();\n    this.refresher();\n  }\n\n  refresher(){\n    this.windowHeight = window.innerHeight;\n    this.windowWidth = window.innerWidth;\n    this.draw();\n    this.frameCount++;\n    window.requestAnimationFrame(this.refresher.bind(this));\n  }\n\n  loadingHandler(){\n    if(--this.itemsToLoad === 0){\n      this.startSketch();\n    }\n  }\n\n  keyPressHandler(event){\n    if(this.keyPressed){\n      this.keyPressed(event);\n    }\n  }\n\n  keyReleaseHandler(event){\n    if(this.keyReleased){\n      this.keyReleased(event);\n    }\n  }\n\n  resizeHandler(event){\n    this.windowHeight = window.innerHeight;\n    this.windowWidth = window.innerWidth;\n    if(this.windowResized){\n      this.windowResized(event);\n    }\n  }\n\n  loadImage(path){\n    let img = new Image();\n    img.src = path;\n    this.itemsToLoad++;\n    img.addEventListener('load', this.loadingHandler.bind(this));\n    return img;\n  }\n\n  setup(){\n    // Background: only rerendered once after a tetromino drops, contains the board\n    // and blocks that have already landed\n    this.backCanvas = new Canvas();\n    // Only used for the falling tetromino and pause menu\n    this.frontCanvas = new Canvas();\n    this.initGameState();\n    this.windowResized();\n  }\n\n  initGameState(){\n    this.tileGrid = new _Tilegrid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.boardWidth, this.boardHeight, this.spriteArray);\n    const self = this;\n    this.gameState = {\n      paused: false,\n      score: 0,\n      sequence: shuffle([0, 1, 2, 3, 4, 5, 6]),\n      current: 0,\n      menuOverlay: false,\n      level: 0,\n      clearedLines: 0,\n      nextTetromino: function(){\n        this.active = this.next;\n        this.current++;\n        if(this.current === 7){\n          this.sequence = shuffle(this.sequence);\n          this.current = 0;\n        }\n        this.next = new _Tetromino__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.sequence[this.current], self.spriteArray, self.tileGrid);\n      }\n    };\n    this.gameState.next = new _Tetromino__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.gameState.sequence[0], this.spriteArray, this.tileGrid);\n    this.gameState.nextTetromino();\n    if(!this.listening){\n        window.addEventListener('keydown', this.keyPressHandler.bind(this));\n        window.addEventListener('keyup', this.keyReleaseHandler.bind(this));\n        window.addEventListener('resize', this.resizeHandler.bind(this));\n        this.listening = true;\n    }\n  }\n\n  windowResized(){\n    let cvWidth = this.windowWidth;\n    let cvHeight = this.windowHeight;\n    this.frontCanvas.width = this.backCanvas.width = cvWidth;\n    this.frontCanvas.height = this.backCanvas.height = cvHeight;\n    this.tileSize = Math.floor(cvHeight * 0.98 / this.boardHeight);\n    let horizontal = Math.floor(cvWidth / 2 - this.boardWidth * this.tileSize / 2);\n    let vertical = Math.floor(cvHeight / 2 - this.boardHeight * this.tileSize / 2);\n    this.frontCanvas.context.translate(horizontal, vertical);\n    this.backCanvas.context.translate(horizontal, vertical);\n    this.gameState.menuOverlay = false;\n    this.draw(\"backCanvas\");\n  }\n\n  preload(){\n    this.spriteArray = {\n      background: this.loadImage(_assets_bg_png__WEBPACK_IMPORTED_MODULE_2___default.a),\n      I: this.loadImage(_assets_I_png__WEBPACK_IMPORTED_MODULE_3___default.a),\n      J: this.loadImage(_assets_J_png__WEBPACK_IMPORTED_MODULE_4___default.a),\n      L: this.loadImage(_assets_L_png__WEBPACK_IMPORTED_MODULE_5___default.a),\n      O: this.loadImage(_assets_O_png__WEBPACK_IMPORTED_MODULE_6___default.a),\n      S: this.loadImage(_assets_S_png__WEBPACK_IMPORTED_MODULE_7___default.a),\n      T: this.loadImage(_assets_T_png__WEBPACK_IMPORTED_MODULE_8___default.a),\n      Z: this.loadImage(_assets_Z_png__WEBPACK_IMPORTED_MODULE_9___default.a),\n    };\n  }\n\n  draw(repaint){\n    if(!this.gameState.paused || repaint === \"backCanvas\"){\n      let toRedraw = (typeof repaint == \"undefined\") ? this.update() : repaint;\n\n      if(toRedraw === \"backCanvas\" && this.backCanvas){\n        this.backCanvas.clear();\n        this.backCanvas.context.fillStyle = '#ff8a00';\n        const border = Math.ceil(this.tileSize * 0.05);\n        this.backCanvas.context.fillRect(\n          -border,\n          -border,\n          this.boardWidth * this.tileSize + 2 * border,\n          this.boardHeight * this.tileSize + 2 * border\n        );\n        this.tileGrid.display(this.tileSize, this.backCanvas);\n        this.backCanvas.context.font = `${this.tileSize}px monospace`;\n        this.backCanvas.context.fillText(\"Score: \" + this.gameState.score, this.tileSize * (this.boardWidth + 0.5), this.tileSize);\n        this.backCanvas.context.fillText(\"Level \" + this.gameState.level, this.tileSize * (this.boardWidth + 0.5), this.tileSize * 2.5);\n        this.backCanvas.context.fillText(\"Up next: \", this.tileSize * -5, this.tileSize);\n        this.gameState.next.display(-8, 1.5, this.tileSize, this.backCanvas);\n        toRedraw = \"frontCanvas\";\n      }\n      if(toRedraw === \"frontCanvas\" && this.frontCanvas){\n        this.frontCanvas.clear();\n        this.gameState.active.display(0, 0, this.tileSize, this.frontCanvas);\n      }\n    }\n    if(this.gameState.paused && this.gameState.menuOverlay === false){\n      this.drawMenu(this.tileSize);\n    }\n  }\n\n  drawMenu(scale){\n    this.frontCanvas.context.save();\n    this.frontCanvas.context.resetTransform();\n    this.frontCanvas.context.fillStyle = 'rgba(50,50,50,0.5)';\n    this.frontCanvas.context.fillRect(0, 0, this.windowWidth, this.windowHeight);\n\n    this.frontCanvas.context.strokeStyle = `black`;\n    this.frontCanvas.context.lineWidth = 0.1 * scale;\n    this.frontCanvas.context.font = `${scale * 2}px sans-serif`;\n    this.frontCanvas.context.textAlign = 'center';\n    this.frontCanvas.context.fillStyle = 'white';\n    this.frontCanvas.context.strokeText(\"Paused\", this.windowWidth / 2, 2 * scale);\n    this.frontCanvas.context.fillText(\"Paused\", this.windowWidth / 2, 2 * scale);\n\n    this.frontCanvas.context.restore();\n    this.gameState.menuOverlay = true;\n  }\n\n  update(){\n    let now = this.frameCount;\n    if(now === 0){\n      return \"backCanvas\";\n    }\n    if(now - this.lastUpdate > this.tickSpeed){\n      this.lastUpdate = now;\n      if(!this.gameState.active.canDrop){\n        this.gameState.active.anchor();\n        this.tileGrid.removeFullLines(this.gameState);\n        this.gameState.nextTetromino();\n        if(this.tileGrid.collide(this.gameState.active.levelSpace(this.gameState.active.blocks))){\n          this.gameOver();\n        }\n        return \"backCanvas\";\n      } else {\n        this.gameState.active.y++;\n        return \"frontCanvas\";\n      }\n    }\n    return \"nothing\";\n  }\n\n  gameOver(){\n    this.initGameState(this.boardWidth, this.boardHeight);\n  }\n\n  keyPressed(event){\n    switch(event.code){\n      case \"ArrowLeft\":\n        this.gameState.active.moveLeft();\n        break;\n      case \"ArrowRight\":\n        this.gameState.active.moveRight();\n        break;\n      case \"ArrowUp\":\n        this.gameState.active.rotateClockwise();\n        break;\n      case \"ArrowDown\":\n        this.tickSpeed = 1;\n        break;\n      case \"Escape\":\n        this.gameState.paused ^= true;\n        this.gameState.menuOverlay = false;\n        break;\n    }\n    this.draw(\"frontCanvas\");\n  }\n\n  keyReleased(event){\n    switch(event.code){\n    case \"ArrowDown\":\n      this.tickSpeed = BASE_SPEED;\n      break;\n    }\n    this.draw(\"frontCanvas\");\n  }\n}\n\nfunction Canvas(){\n  let canvas = document.createElement(\"canvas\");\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  canvas.context = canvas.getContext('2d');\n  canvas.style.position = \"absolute\";\n  canvas.clear = function(){\n    this.context.save();\n    this.context.resetTransform();\n    this.context.clearRect(0, 0, this.width, this.height);\n    this.context.restore();\n  };\n  document.getElementById('gameContainer').appendChild(canvas);\n  return canvas;\n}\n\nfunction shuffle(arr){\n\tfor(let i = arr.length - 1; i > 0; i--){\n\t\tconst j = Math.floor(Math.random() * (i + 1));\n    let temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n  }\n  return arr;\n}\n\n\n//# sourceURL=webpack:///./src/Graphics.js?");

/***/ }),

/***/ "./src/Tetromino.js":
/*!**************************!*\
  !*** ./src/Tetromino.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Tetromino; });\nclass Tetromino {\n  constructor(selector, spriteArray, tileGrid){\n    this.x = 5;\n    this.y = 0;\n    this.tileGrid = tileGrid;\n    this.shape = Tetromino.shapes[selector];\n    this.sprite = spriteArray[this.shape];\n    this.blocks = Tetromino.tiles[selector];\n  }\n\n  display(x, y, tileSize, canvas){\n    for(let block of this.blocks){\n      canvas.context.drawImage(\n        this.sprite,\n        (block[0] + this.x + x) * tileSize,\n        (block[1] + this.y + y) * tileSize,\n        tileSize, tileSize\n      );\n    }\n  }\n\n  rotateClockwise(){\n    let rotatedBlocks = this.blocks.map((v) => [-v[1], v[0]]);\n    if(!this.tileGrid.collide(this.levelSpace(rotatedBlocks))){\n      this.blocks = rotatedBlocks;\n    }\n  }\n\n  rotateCounterClockwise(){\n    let rotatedBlocks = this.blocks.map((v) => [v[1], -v[0]]);\n    if(!this.tileGrid.collide(this.levelSpace(rotatedBlocks))){\n      this.blocks = rotatedBlocks;\n    }\n  }\n\n  levelSpace(blocks){\n    return blocks.map(b => [b[0] + this.x, b[1] + this.y]);\n  }\n\n  // Transfers the tile of the active tile to the grid\n  anchor(){\n    for(let block of this.blocks){\n      this.tileGrid.tile[block[0] + this.x][block[1] + this.y] = this.sprite;\n    }\n  }\n\n  moveLeft(){\n    let movedBlocks = this.blocks.map((v) => [v[0] - 1, v[1]]);\n    if(!this.tileGrid.collide(this.levelSpace(movedBlocks))){\n      this.x--;\n    }\n  }\n\n  moveRight(){\n    let movedBlocks = this.blocks.map((v) => [v[0] + 1, v[1]]);\n    if(!this.tileGrid.collide(this.levelSpace(movedBlocks))){\n      this.x++;\n    }\n  }\n\n  get canDrop(){\n    let droppedBlocks = this.blocks.map((v) => [v[0], v[1] + 1]);\n    return (!this.tileGrid.collide(this.levelSpace(droppedBlocks)));\n  }\n}\n\nTetromino.shapes = [\"I\", \"J\", \"L\", \"O\", \"S\", \"T\", \"Z\"];\nTetromino.colors = [\n  \"rgb(0,165,255)\",\n  \"rgb(1,1,254)\",\n  \"orange\",\n  \"rgb(254,254,1)\",\n  \"rgb(1,254,1)\",\n  \"rgb(254,1,254)\",\n  \"rgb(254,1,1)\"\n];\nTetromino.tiles = [\n  [[-2, 0], [-1, 0], [0, 0], [1, 0]], // I\n  [[-1, 0], [0, 0], [1, 0], [-1, 1]], // J\n  [[-1, 0], [0, 0], [1, 0], [1, 1]], //  L\n  [[-1, 0], [0, 0], [-1, 1], [0, 1]], // O\n  [[0, 0], [1, 0], [-1, 1], [0, 1]], //  S\n  [[-1, 0], [0, 0], [1, 0], [0, 1]], //  T\n  [[-1, 0], [0, 0], [0, 1], [1, 1]] //   Z\n];\n\n\n//# sourceURL=webpack:///./src/Tetromino.js?");

/***/ }),

/***/ "./src/Tilegrid.js":
/*!*************************!*\
  !*** ./src/Tilegrid.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TileGrid; });\nclass TileGrid {\n  constructor(width, height, spriteArray){\n    this.width = width;\n    this.height = height;\n    this.tile = [];\n    this.spriteArray = spriteArray;\n    for(let i = 0; i < width; i++){\n      this.tile[i] = [];\n      for(let j = 0; j < height; j++){\n        this.tile[i][j] = this.spriteArray[\"background\"];\n      }\n    }\n  }\n\n  display(tileSize, canvas){\n    for(let i = 0; i < this.width; i++){\n      for(let j = 0; j < this.height; j++){\n        canvas.context.drawImage(this.tile[i][j], i * tileSize, j * tileSize, tileSize, tileSize);\n      }\n    }\n  }\n\n  collide(blockArray){\n    for(let block of blockArray){\n      if(block[0] < 0 || block[0] >= this.width ||\n        block[1] < 0 || block[1] >= this.height ||\n        this.tile[block[0]][block[1]] !== this.spriteArray.background){\n        return true;\n      }\n    }\n    return false;\n  }\n\n  removeFullLines(gameState){\n    let clearedLines = 0;\n    for(let i = 0; i < this.height; i++){\n      if(this.lineIsFull(i)){\n        this.shiftDown(i);\n        clearedLines++;\n      }\n    }\n    switch(clearedLines){\n    case 1:\n      gameState.score += 40 * (gameState.level + 1);\n      break;\n    case 2:\n      gameState.score += 100 * (gameState.level + 1);\n      break;\n    case 3:\n      gameState.score += 300 * (gameState.level + 1);\n      break;\n    case 4:\n      gameState.score += 1200 * (gameState.level + 1);\n      break;\n    }\n    gameState.clearedLines += clearedLines;\n    gameState.level = ~~(gameState.clearedLines / 10);\n  }\n\n  lineIsFull(y){\n    for(let i = 0; i < this.width; i++){\n      if(this.tile[i][y] === this.spriteArray.background){\n        return false;\n      }\n    }\n    return true;\n  }\n\n  shiftDown(y){\n    for(let j = y; j > 0; j--){\n      for(let i = 0; i < this.width; i++){\n        this.tile[i][j] = this.tile[i][j - 1];\n      }\n    }\n    for(let i = 0; i < this.width; i++){\n      this.tile[i][0] = this.spriteArray.background;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Tilegrid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Graphics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graphics */ \"./src/Graphics.js\");\n\n\nconst graphics = new _Graphics__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 20);\ngraphics.preload();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });