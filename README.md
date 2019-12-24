# Sirtet

> 🕹️ Sirtet is a Canvas2D Tetris clone that I made to learn about the canvas, webpack and making a tiny game engine from scratch.

* * *

## Installation

* Clone the repo: `git clone git@github.com:sdegueldre/sirtet.git`
* Install the dependencies: `npm install`
* Modify some files
* Use `npm run dev` to build the project locally (`http://localhost:5000`) and rebuild automatically when files are changed
* Use `npm run build` to build the project once for deployment. This command will set webpack's `publicPath` to `/sirtet/`, as this is the path in which it runs on my github page. If you want to deploy this in a different directory, you can invoke webpack directly and set the `PUBLIC_PATH` environment variable to your desired public path, i.e. `npx webpack --env.PUBLIC_PATH="/projects/tetris_clones/example/"`, which will let you deploy the contents of the docs folder at `http://example.com/projects/tetris_clones/example/`

## Controls

<kbd>←</kbd><kbd>→</kbd> Move

<kbd>↑</kbd> Rotate

<kbd>↓</kbd> Fast drop

<kbd>esc</kbd> Pause

* * *

June 2019, Samuel Degueldre.
