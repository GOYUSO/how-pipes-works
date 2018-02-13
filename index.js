const myPipe = require('./examples/my-pipe');
const utils = require('./examples/utils');

myPipe.helloWorld = utils.helloWorld;
myPipe.anotherFoo = utils.anotherFoo;
myPipe.lastFoo = utils.lastFoo;


myPipe
    .pipe(myPipe.helloWorld())
    .pipe(myPipe.anotherFoo())
    .pipe(myPipe.lastFoo());