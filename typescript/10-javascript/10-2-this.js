console.log(this); // window

function simpleFunc () {
    console.log('simple is best!');
    console.log(this);
}

simpleFunc();

console.clear();

class Counter {
    count = 0;
    
    increase() {
        console.log(this);
    }
}

const counter = new Counter();

counter.increase();