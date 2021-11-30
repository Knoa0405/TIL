{
    // Type Assertion

    function jsStrFunction ():any {
        return 2;
    }

    const result = jsStrFunction();
    // as => assertion 단언하다 결과값은 무조건 string 일 것이라고 단언하다.
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong:any = 5;
    console.log((wrong as Array<number>).push(1)); // X

    function findNumbers() : number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers()!; // X
    numbers.push();

    const button = document.querySelector('class')!; // X
    // ! 없으면 에러남.
    button.addEventListener('click', () => console.log('This Element was clicked!'));
}