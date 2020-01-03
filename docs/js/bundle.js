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

/***/ "./assets sync \\.png$":
/*!*****************************************!*\
  !*** ./assets sync nonrecursive \.png$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./I.png\": \"./assets/I.png\",\n\t\"./J.png\": \"./assets/J.png\",\n\t\"./L.png\": \"./assets/L.png\",\n\t\"./O.png\": \"./assets/O.png\",\n\t\"./S.png\": \"./assets/S.png\",\n\t\"./T.png\": \"./assets/T.png\",\n\t\"./Z.png\": \"./assets/Z.png\",\n\t\"./background.png\": \"./assets/background.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./assets sync \\\\.png$\";\n\n//# sourceURL=webpack:///./assets_sync_nonrecursive_\\.png$?");

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

/***/ "./assets/background.png":
/*!*******************************!*\
  !*** ./assets/background.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8aebdb874189951064abf7dd0e38b9ef.png\";\n\n//# sourceURL=webpack:///./assets/background.png?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Graphics; });\n/* harmony import */ var _Tilegrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tilegrid.js */ \"./src/Tilegrid.js\");\n/* harmony import */ var _Tetromino__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tetromino */ \"./src/Tetromino.js\");\n\n\n\nconst req = __webpack_require__(\"./assets sync \\\\.png$\");\nconst assets = req.keys().reduce((acc, v) => {\n  acc[v.match(/\\/(.*)\\.png$/)[1]] = req(v);\n  return acc;\n}, Object.create(null));\n\nconst BASE_SPEED = 60;\n\nclass Graphics {\n  constructor(boardWidth, boardHeight){\n    this.tickSpeed = BASE_SPEED;\n    this.lastUpdate = 0;\n    this.boardWidth = boardWidth;\n    this.boardHeight = boardHeight;\n    this.frameCount = 0;\n    this.score = document.getElementById('score');\n    this.level = document.getElementById('level');\n    this.next = document.getElementById('next');\n    this.menu = document.getElementById('menu');\n  }\n\n  startSketch(){\n    this.setup();\n    this.refresher();\n  }\n\n  refresher(){\n    this.draw();\n    this.frameCount++;\n    window.requestAnimationFrame(this.refresher.bind(this));\n  }\n\n  keyPressHandler(event){\n    if(this.keyPressed){\n      this.keyPressed(event);\n    }\n  }\n\n  keyReleaseHandler(event){\n    if(this.keyReleased){\n      this.keyReleased(event);\n    }\n  }\n\n  resizeHandler(event){\n    if(this.windowResized){\n      this.windowResized(event);\n    }\n  }\n\n  loadImage(path){\n    let img = new Image();\n    img.src = path;\n    return new Promise(resolve => {\n      img.addEventListener('load', () => resolve(img));\n    });\n  }\n\n  setup(){\n    // Background: only rerendered once after a tetromino drops, contains the board\n    // and blocks that have already landed\n    this.backCanvas = new Canvas();\n    // Only used for the falling tetromino and pause menu\n    this.frontCanvas = new Canvas();\n    this.frontCanvas.classList.add('position-absolute');\n    // Displays next tetromino\n    this.nextCanvas = new Canvas(this.tileSize * 4, this.tileSize * 2);\n\n    document.getElementById('game-container').append(this.backCanvas, this.frontCanvas);\n    document.getElementById('next').append(this.nextCanvas);\n    this.initGameState();\n    this.windowResized();\n  }\n\n  initGameState(){\n    this.tileGrid = new _Tilegrid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.boardWidth, this.boardHeight, this.spriteArray);\n    const self = this;\n    this.gameState = {\n      paused: false,\n      score: 0,\n      sequence: shuffle([0, 1, 2, 3, 4, 5, 6]),\n      current: 0,\n      level: 0,\n      clearedLines: 0,\n      nextTetromino: function(){\n        this.active = this.next;\n        this.current++;\n        if(this.current === 7){\n          this.sequence = shuffle(this.sequence);\n          this.current = 0;\n        }\n        this.next = new _Tetromino__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.sequence[this.current], self.spriteArray, self.tileGrid);\n      }\n    };\n    this.gameState.next = new _Tetromino__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.gameState.sequence[0], this.spriteArray, this.tileGrid);\n    this.gameState.nextTetromino();\n    if(!this.listening){\n      window.addEventListener('keydown', this.keyPressHandler.bind(this));\n      window.addEventListener('keyup', this.keyReleaseHandler.bind(this));\n      window.addEventListener('resize', this.resizeHandler.bind(this));\n      this.listening = true;\n    }\n  }\n\n  windowResized(){\n    this.tileSize = Math.floor(window.innerHeight * 0.98 / this.boardHeight);\n    this.frontCanvas.height = this.backCanvas.height = (this.tileSize * (this.boardHeight + 0.1));\n    this.frontCanvas.width = this.backCanvas.width = (this.tileSize * (this.boardWidth + 0.1));\n    this.nextCanvas.width = this.nextCanvas.height = (this.tileSize * 4);\n    const border = this.tileSize * 0.05;\n    [this.frontCanvas, this.backCanvas].forEach(c => c.context.translate(border, border));\n    this.draw(\"backCanvas\");\n  }\n\n  async init(){\n    this.spriteArray = {};\n    const promises = [];\n    for(let key in assets){\n      promises.push(this.loadImage([assets[key]]).then(img => this.spriteArray[key] = img));\n    }\n    await Promise.all(promises);\n    this.startSketch();\n  }\n\n  draw(repaint){\n    if(!this.gameState.paused || repaint === \"backCanvas\"){\n      let toRedraw = (typeof repaint == \"undefined\") ? this.update() : repaint;\n\n      if(toRedraw === \"backCanvas\"){\n        this.backCanvas.clear();\n        this.backCanvas.context.fillStyle = '#ff8a00';\n        const border = Math.ceil(this.tileSize * 0.05);\n        this.backCanvas.context.fillRect(\n          -border,\n          -border,\n          this.boardWidth * this.tileSize + 2 * border,\n          this.boardHeight * this.tileSize + 2 * border\n        );\n        this.tileGrid.display(this.tileSize, this.backCanvas);\n        this.score.textContent = `Score: ${this.gameState.score}`;\n        this.level.textContent = `Level: ${this.gameState.level}`;\n        this.nextCanvas.clear();\n        this.gameState.next.display(-3, 0, this.tileSize, this.nextCanvas);\n        toRedraw = \"frontCanvas\";\n      }\n      if(toRedraw === \"frontCanvas\"){\n        this.frontCanvas.clear();\n        this.gameState.active.display(0, 0, this.tileSize, this.frontCanvas);\n      }\n    }\n    if(this.gameState.paused){\n      if(this.menu.style.display !== 'flex'){\n        this.menu.style.display = 'flex';\n      }\n    } else {\n      this.menu.style.display = 'none';\n    }\n  }\n\n  update(){\n    let now = this.frameCount;\n    if(now === 0){\n      return \"backCanvas\";\n    }\n    if(now - this.lastUpdate > this.tickSpeed){\n      this.lastUpdate = now;\n      if(!this.gameState.active.canDrop){\n        this.gameState.active.anchor();\n        this.tileGrid.removeFullLines(this.gameState);\n        this.gameState.nextTetromino();\n        if(this.tileGrid.collide(this.gameState.active.levelSpace(this.gameState.active.blocks))){\n          this.gameOver();\n        }\n        return \"backCanvas\";\n      } else {\n        this.gameState.active.y++;\n        return \"frontCanvas\";\n      }\n    }\n    return \"nothing\";\n  }\n\n  gameOver(){\n    this.initGameState(this.boardWidth, this.boardHeight);\n  }\n\n  keyPressed(event){\n    switch(event.code){\n      case \"ArrowLeft\":\n        this.gameState.active.moveLeft();\n        break;\n      case \"ArrowRight\":\n        this.gameState.active.moveRight();\n        break;\n      case \"ArrowUp\":\n        this.gameState.active.rotateClockwise();\n        break;\n      case \"ArrowDown\":\n        this.tickSpeed = 1;\n        break;\n      case \"Escape\":\n        this.gameState.paused ^= true;\n        break;\n    }\n    this.draw(\"frontCanvas\");\n  }\n\n  keyReleased(event){\n    switch(event.code){\n      case \"ArrowDown\":\n        this.tickSpeed = BASE_SPEED;\n        break;\n    }\n    this.draw(\"frontCanvas\");\n  }\n}\n\nfunction Canvas(height = window.innerHeight, width){\n  let canvas = document.createElement(\"canvas\");\n  canvas.height = height;\n  canvas.width = width || height * this.boardWidth / this.boardHeight;\n  canvas.context = canvas.getContext('2d');\n  canvas.clear = function(){\n    this.context.save();\n    this.context.resetTransform();\n    this.context.clearRect(0, 0, this.width, this.height);\n    this.context.restore();\n  };\n  return canvas;\n}\n\nfunction shuffle(arr){\n  for(let i = arr.length - 1; i > 0; i--){\n    const j = Math.floor(Math.random() * (i + 1));\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n  return arr;\n}\n\n\n//# sourceURL=webpack:///./src/Game.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TileGrid; });\nclass TileGrid {\n  constructor(width, height, spriteArray){\n    this.width = width;\n    this.height = height;\n    this.tile = [];\n    this.spriteArray = spriteArray;\n    for(let i = 0; i < width; i++){\n      this.tile[i] = [];\n      for(let j = 0; j < height; j++){\n        this.tile[i][j] = this.spriteArray.background;\n      }\n    }\n  }\n\n  display(tileSize, canvas){\n    for(let i = 0; i < this.width; i++){\n      for(let j = 0; j < this.height; j++){\n        canvas.context.drawImage(this.tile[i][j], i * tileSize, j * tileSize, tileSize, tileSize);\n      }\n    }\n  }\n\n  collide(blockArray){\n    for(let block of blockArray){\n      if(block[0] < 0 || block[0] >= this.width ||\n        block[1] < 0 || block[1] >= this.height ||\n        this.tile[block[0]][block[1]] !== this.spriteArray.background){\n        return true;\n      }\n    }\n    return false;\n  }\n\n  removeFullLines(gameState){\n    let clearedLines = 0;\n    for(let i = 0; i < this.height; i++){\n      if(this.lineIsFull(i)){\n        this.shiftDown(i);\n        clearedLines++;\n      }\n    }\n    switch(clearedLines){\n    case 1:\n      gameState.score += 40 * (gameState.level + 1);\n      break;\n    case 2:\n      gameState.score += 100 * (gameState.level + 1);\n      break;\n    case 3:\n      gameState.score += 300 * (gameState.level + 1);\n      break;\n    case 4:\n      gameState.score += 1200 * (gameState.level + 1);\n      break;\n    }\n    gameState.clearedLines += clearedLines;\n    gameState.level = ~~(gameState.clearedLines / 10);\n  }\n\n  lineIsFull(y){\n    for(let i = 0; i < this.width; i++){\n      if(this.tile[i][y] === this.spriteArray.background){\n        return false;\n      }\n    }\n    return true;\n  }\n\n  shiftDown(y){\n    for(let j = y; j > 0; j--){\n      for(let i = 0; i < this.width; i++){\n        this.tile[i][j] = this.tile[i][j - 1];\n      }\n    }\n    for(let i = 0; i < this.width; i++){\n      this.tile[i][0] = this.spriteArray.background;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Tilegrid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\n\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 20);\ngame.init();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });