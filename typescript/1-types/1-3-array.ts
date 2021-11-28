// 배열과 튜플 ? 튜플은 언제 써야하나?

{
    // Array
    const fruits: string[] = ["사과", "파인애플", "포도"];
    const score: Array<number> = [1, 2, 3];
    function printArray (array : readonly string[]) {
        // array.push(); -> not working ( readonly )
    }

    // Tuple ( 서로 다른 타입 넣을 수 있다. ) => interface, type alias, class
    let student: [string, number];
    student = ["학생", 123];
    
    const [ user, name ] = student;
    console.log(user,name);
}