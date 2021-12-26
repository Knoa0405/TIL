{
    Array;
    [1,2].map;

    type Student = {
        passed : boolean;
    }

    const students: Student[] = [{ passed : true },{ passed : true },{ passed : false }];

    const result = students.every(student => student.passed); 
    // 항목 모든 값이 TRUE 이면 true 반환 아니면 false
    console.log(result); // false
    

    class Animal {

    }
    
    class Cat extends Animal {
        isCat : boolean = true;
    }

    class Dog extends Animal {
        isDog: boolean = true;
    }

    const animals: Animal[] = [new Cat(), new Cat(), new Dog()]

    function isCat(animal: Animal): animal is Cat {
        return (animal as Cat).isCat !== undefined;
    }

    console.log(animals.every<Cat>(isCat));

}