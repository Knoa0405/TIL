{
    type CoffeeCup = {
        shots : number;
        hasMilk : boolean;
    }

    const BEANS_GRAM_PER_SHOT:number = 7;
    let coffeeBean:number = 0;

    function makeCoffee(shots :number) : CoffeeCup {
        if(coffeeBean < shots * BEANS_GRAM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }
        coffeeBean -= shots * BEANS_GRAM_PER_SHOT;
        return { shots, hasMilk : false };
    }
}