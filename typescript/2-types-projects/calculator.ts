/**
 * Let's make a calculator 🧮
 */
{
    type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
    type ObjType = {
        [type : string] : Function;
    }
    function calculate(type : Command, ...numbers : number[]) : void {
        const types : ObjType = {
            'add' : () => numbers.reduce((acc,cur) => acc + cur),
            'substract' : () => numbers.reduce((acc,cur) => acc - cur),
            'multiply' : () => numbers.reduce((acc,cur) => acc * cur),
            'divide' : () => numbers.reduce((acc,cur) => acc / cur),
            'remainder' : () => numbers.reduce((acc,cur) => acc % cur),
        };

        return types[type]();
    }

    console.log(calculate('add', 1, 3)); // 4
    console.log(calculate('substract', 3, 1)); // 2
    console.log(calculate('multiply', 4, 2)); // 8
    console.log(calculate('divide', 4, 2)); // 2
    console.log(calculate('remainder', 5, 2)); // 1
}