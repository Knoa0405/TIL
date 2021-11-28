{
    // // Javascript 💣
    // function jsAdd (num1, num2) {
    //     return num1 + num2;
    // }
    // // Typescript 
    // function tsAdd(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // // Javascript 💣
    // function jsFetchNum(id) {
    //     // code..
    //     // code..
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }
    // // Typescript
    // function tsFetchNum(id: string) : Promise<number> {
    //     // code..
    //     // code..
    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     })
    // }
    // Optional Parameter : ? ( 있어도 되고, 없어도 된다.)
    function printName (firstName : string, lastName? : string) {
        console.log(firstName + lastName);
    }
    printName("Noa", "Kan")
    // printName("Noa", null); => 에러 안나는 이유 ? Strict Null Check ✓ 확인 ( false 상태면 )
    // 원래 자바스크립트 => undefined == null ( true ) ( Equal Operator 값이 같은지 비교하므로 true 로 인식 / falsy 한 값 )
    // TypeScript 2.0 부터 undefined / null 개별적으로 구분해 줄 수 있게 바뀜

    // Default Parameter : param = default value
    function printDefaultName(firstName: string = "노아", lastName: string = "강") {
        console.log(firstName + lastName);
    }
    printDefaultName();

    // Rest Parameter
    function addNumbers(...numbers: number[]):number {
        return numbers.reduce((acc: number, cur: number) => {
            return acc + cur;
        },0);
    }

    console.log(addNumbers(1,2,3));
}