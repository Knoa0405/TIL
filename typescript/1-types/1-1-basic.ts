{
    // Javascript

    // let es6
    let number = 1;
    number = 2;

    // const
    const user = "Noah";

    // Primitive Type ( 원시타입 ) : number, string, boolean, bigint, symbol, null, undefined
    // Object Type ( 객체 타입 ) : function, array...

    // number
    const num : number = 1;

    // string
    const str : string = "안녕";

    // boolean
    const isTrue : boolean = false;

    // null
    let count : null; // 💣

    let count1 : number | null;
    count1 = 1;
    count1 = null;

    // undefined
    let ticketNum : undefined; // 💣

    let age : number | undefined = 1;
    age = undefined;
    age = 2;
    // =============
    // 값이 정의되지 않았다 -> 할당되지 않음, ( 변수는 선언됨 ) undefined
    function find() : string | undefined {
        return "찾음";
    }

    function find2() : string | undefined {
        return undefined; // 못 찾음
    }
    // 값이 없다 => null

    // unknown

    let unKnown : unknown; // 💣

    unKnown = 1;
    unKnown = "안녕";

    // any

    let anything : any; // 💣

    anything = 1;
    anything = "안녕";

    // void
    function print(): void {
        console.log("hello");
        return;
    }

    let unusable: void = undefined; // 💣

    // never
    function throwError(message : string): never {
        // message => server(log)
        throw new Error(message);
        // while(true) {}
        // return; 💣 ( 리턴이 불가능 )
    }

    let neverEnding : never; // 💣

    // object
    let obj : object;

    function acceptSomeObject(obj : object) {
        
    }
    acceptSomeObject({ name : "Noa"});

}