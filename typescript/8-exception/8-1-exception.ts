// Java : Exception
// Javascript : Error
// const array = new Array(1000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
    if(fileName === 'not exist') {
        throw new Error(`file not exist! ${fileName}`);
    }
    return 'file Contents';
}

function closeFile(fileName: string) {
    //
}

function run() {
    const fileName = 'not exist';

    try {
        // 에러가 발생하는 부분만 감싸는 게 좋다.
        console.log(readFile(fileName));
    }  catch(error) {
        console.log('catch!!');
    } finally {
        // 에러 발생해도 실행!
        closeFile(fileName);
        console.log(`finally!`);
    }
    // closeFile(fileName); (X)
    // console.log(`finally!`); (X)
    
}

run();