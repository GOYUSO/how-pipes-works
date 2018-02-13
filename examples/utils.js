function helloWorld() {
    console.log('Firstly, my pipe result is %s because is my first instance and I have not any pipe.', this.result);
    console.log('Hello world');
    return 'Hello world';
}

function anotherFoo() {
    console.log('Now, my pipe result is %s.', this.result);
    var i = 0;
    var a = 0,
        b = 1,
        c = 2;
    for (i = 0; i < 10000000000; i++) {
        a = b * c;
        a /= c;
        a++;
        a--;
    }
    console.log('a is : %s', a);
    return a;
}

function lastFoo() {
    console.log('Finally, my pipe result is %s.', this.result);
    console.log('Good bye world!');
    return 'Good bye';
}

module.exports = {
    helloWorld,
    anotherFoo,
    lastFoo
}