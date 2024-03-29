{
    type CoffeeCup = {
        shots : number;
        hasMilk : boolean;
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

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans : number, public readonly serialNumber : string) {
            super(beans);
        }
        private steamMilk () : void {
            console.log("Steaming some milk");
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk : true
            }
        }
    }

    const machine = new CoffeeMachine(23);

    const latteMachine = new CaffeLatteMachine(23, "SSSS");

    const coffee = latteMachine.makeCoffee(3);

    console.log(latteMachine.serialNumber);
}