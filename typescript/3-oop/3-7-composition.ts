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

        public constructor(
            coffeeBeans : number,
            private milk: MilkFrother,
            private sugar: SugarProvider
            ) {
            this.coffeeBeans = coffeeBeans;
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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
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
    class FancyMilkSteamer implements MilkFrother {
        private steamMilk() : void {
            console.log('Fancy Steaming Milk!');
        }
        makeMilk(cup : CoffeeCup) {
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true,
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother {
        private steamMilk() : void {
            console.log('Cold Steaming Milk!');
        }
        makeMilk(cup : CoffeeCup) {
            this.steamMilk();
            return {
                ...cup,
                hasMilk : true,
            }
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }
    // 설탕 제조기
    class CandySugarMixer implements SugarProvider {
        private getSugar() {
            console.log('Getting some sugar from candy!');
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

    
    class SugarMixer implements SugarProvider {
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

    class NoSugar implements SugarProvider {
        addSugar(cup : CoffeeCup) : CoffeeCup {
            return cup;
        }
    }

    // Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    // Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    //
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);

    // 클래스 간에 의사소통하는 경우 인터페이스를 통해 서로간에 상호작용을 해야한다.
    // decoupling

}