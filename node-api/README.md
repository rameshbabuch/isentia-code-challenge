# Flickr Public Feed Reader API

This is simple Flickr public feed reader API services.

### Introduction

It includes following libraries:

*   Node - v10.x 
*   express.js - 4.16.1
*   ES6

### How to start

**Note** that this seed project requires **node >=v10.x and npm >=6**.

In order to start the project use:

##### Development
```bash
$ git clone https://github.com/RameshPaul/isentia-code-challenge.git
$ cd isentia-code-challenge/node-api

# install the project's dependencies
$ npm install

# watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
```
* Node API's will run at [http://localhost:3000](http://localhost:3000)

#### Prod deployment
* Use `pm2` for running in prod server - `npm install pm2 -g`

```
# prod build, will output the production application in `dist`
$ cd dist
$ pm2 start index.js
```

### Running unit tests

Run `ng test` to execute the unit tests via [Mocha](https://mochajs.org/).

### Running lint 

Run `npm run lint` to execute the es-lint.

### API's

* Get all feeds - GET: [http://localhost:3000/feeds](http://localhost:3000/feeds)
* Search feeds by tag - GET: [http://localhost:3000/feeds?tags=nature,nikon](http://localhost:3000/feeds?tags=nature,nikon)

