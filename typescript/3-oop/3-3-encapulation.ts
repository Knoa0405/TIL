{
    type CoffeeCup = {
        shots : number;
        hasMilk : boolean;
    }

    // public , private, protected
    class CoffeeMachine {
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
            this.coffeeBeans += beans;
        }
        
        makeCoffee(shots: number) : CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT ) {
                throw new Error('Not Enough CoffeeBeans!');
            }
            
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;

            return { shots, hasMilk : false };
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

    const machine = CoffeeMachine.makeMachine(100);
    machine.fillCoffeeBeans(10);
}