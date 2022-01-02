{
    const x = {};
    const y = {};

    console.log(x);
    console.log(y);

    console.log(x.__proto__ === y.__proto__);

    const array = [];
    
    console.log(array);

    // Inheritance : array => Array => Object
    
    // 프로토타입 es5
    function CoffeeMachine(beans) {
        this.beans = beans;
        // this.makeCoffee = () => {
        //     console.log('Make Coffee!');
        // }
    };

    CoffeeMachine.prototype.makeCoffee = (shots) => console.log(`Make Coffee! ${shots} shots`);

    function LatteMachine(milk) {
        this.milk = milk;
    }

    LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

    const latteMachine = new LatteMachine(123);

    console.log(latteMachine);

    latteMachine.makeCoffee(5);
}