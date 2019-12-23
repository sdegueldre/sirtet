# Sirtet

> 🕹️ Sirtet is a Canvas2D Tetris clone that I made to learn about the canvas, webpack and making a tiny game engine from scratch.

* * *

## Installation

* Clone the repo: `git clone git@github.com:sdegueldre/sirtet.git`
* Install the dependencies: `npm install`
* Modify some files
* Run webpack: `npx webpack` for a single build, and `npx webpack --watch` to rebuild automatically when files change
  - note: you will need to change the `publicPath` to `/` in webpack.config.js before doing this, as it is setup to bundle the files to deploy on the github page of this repo by default. Hopefully I will change this so that you can specify the `publicPath` through an environment variable soon^tm
* Serve the docs folder using your favourite web server: `npx serve docs`

## Controls

<kbd>←</kbd><kbd>→</kbd> Move

<kbd>↑</kbd> Rotate

<kbd>↓</kbd> Fast drop

<kbd>esc</kbd> Pause

* * *

June 2019, Samuel Degueldre.
