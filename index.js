const myPipe = require('./res/my-pipe');
const utils = require('./res/utils');

myPipe.helloWorld = utils.helloWorld;
myPipe.anotherFoo = utils.anotherFoo;
myPipe.lastFoo = utils.lastFoo;


myPipe
    .pipe(myPipe.helloWorld())
    .pipe(myPipe.anotherFoo())
    .pipe(myPipe.lastFoo());