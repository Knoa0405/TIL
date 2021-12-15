{
    type CoffeeCup = {
        shots : number;
        hasMilk? : boolean;
        hasSugar? : boolean;
    }

    // public , private, protected

    interface CoffeeMaker {
        makeCoffee(shots:number) : CoffeeCup;
    }
   
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
    
        private coffeeBeans: number = 0;

        public constructor(coffeeBeans : number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans : number) : CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans : number) {
            if(beans < 0) {
                throw new Error('Value for Beans should be greater than 0')
            }
            console.log(`Fill beans ${beans}`);
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning Machine...!');
        }

        private grindBeans(shots:number) {
            console.log(`Grinding Beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT ) {
                throw new Error('Not Enough CoffeeBeans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pouring ${shots} shots...`);
            return { shots, hasMilk : false };
        }
        
        makeCoffee(shots: number) : CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
            // if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT ) {
            //     throw new Error('Not Enough CoffeeBeans!');
            // }
            
            // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }
    }
    // 싸구려 우유 거품기
    class CheapMilkSteamer {
        private steamMilk() : void {
            console.log('Steaming Milk!');
        }
        makeMilk(cup : CoffeeCup) {
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true,
            }
        }
    }
    // 설탕 제조기
    class AutomaticSugarMixer {
        private getSugar() {
            console.log('Getting some sugar from jar!');
            return true;
        }

        addSugar(cup : CoffeeCup) : CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar : sugar,
            }
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(
            beans : number, 
            public readonly serialNumber : string,
            private milkFrother : CheapMilkSteamer
            ) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFrother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(private beans : number,private sugar : AutomaticSugarMixer) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    class SweetCaffeLatteMachine extends CoffeeMachine {
        constructor(private beans : number, private milk : CheapMilkSteamer,  private sugar : AutomaticSugarMixer) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milk.makeMilk(this.sugar.addSugar(coffee));
        }
    }

    const machine = new CoffeeMachine(23);

    const latteMachine = new CaffeLatteMachine(23, "SSSS", new CheapMilkSteamer);

    const coffee = latteMachine.makeCoffee(3);

    const machines = [
        new CoffeeMachine(30),
        new CaffeLatteMachine(20,"SSSS", new CheapMilkSteamer),
        new SweetCoffeeMaker(20, new AutomaticSugarMixer),
    ]

    machines.forEach(machine => {
        console.log('--------------');
        machine.makeCoffee(2);
    })

}