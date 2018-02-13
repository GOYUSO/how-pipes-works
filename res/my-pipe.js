function MyPipe() {
    this.info = 'This is a pipe, seem like Gulp uses';
}

MyPipe.prototype.pipe = function (f) {
    this.result = f;
    return this;
}

module.exports = new MyPipe();