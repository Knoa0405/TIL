{
    type CoffeeCup = {
        shots : number;
        hasMilk : boolean;
    }

    // public , private, protected

    interface CoffeeMaker {
        makeCoffee(shots:number) : CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    } 

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
    
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans : number) {
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

    class User {
        private internalAge = 4;

        get fullName() :string {
            return `${this.firstName} ${this.lastName}`;
        }

        set age(num : number) {
            this.internalAge = num;
        }

        get age() {
            return this.internalAge;
        }

        constructor(private firstName : string, private lastName : string) {

        }

    }

    const user = new User('Noah','Kang');
    console.log(user.fullName); // Use fullName function

    user.age = 6; // Use setter function
    
    console.log(user.age); // Use getter function


    // machine2.fillCoffeeBeans(10); // 불가능 ? =>
    // CoffeeMaker interface 로 정의 되어 makeCoffee function 만 사용할 수 있다.
    // fillCoffeeBeans 는 CoffeeMaker interface 에 포함되어 있지 않기 때문!
    class AmateurUser {
        constructor(private machine : CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine : CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(100);
            this.machine.clean();
        }
    }

    const machine:CoffeeMachine = CoffeeMachine.makeMachine(100);

    const amateur = new AmateurUser(machine);
    const pro = new ProBarista(machine);
    amateur.makeCoffee();

    console.log("================");

    pro.makeCoffee();
}