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
    interface MilkFrother {
        makeMilk(cup : CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother {
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
    class CandySugarMixer implements SugarProvider {
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
            private milkFrother : MilkFrother
            ) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milkFrother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(private beans : number,private sugar : SugarProvider) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }
    }

    class SweetCaffeLatteMachine extends CoffeeMachine {
        constructor(private beans : number, private milk : MilkFrother,  private sugar : SugarProvider) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.milk.makeMilk(this.sugar.addSugar(coffee));
        }
    }

    const cheapMilkMaker = new MilkFrother();
    const candySugar = new CandySugarMixer();
    const sweetMachine = new SweetCoffeeMaker(12, candySugar);
    const latteMachine = new CaffeLatteMachine(12,'SS', cheapMilkMaker);
    const sweetLatteMachine = new SweetCaffeLatteMachine(12, cheapMilkMaker, candySugar);

    // 클래스 간에 의사소통하는 경우 인터페이스를 통해 서로간에 상호작용을 해야한다.
    // decoupling

}