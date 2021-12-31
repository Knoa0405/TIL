{
    const obj = {
        name : 'ellie',
    };

    obj.name;
    obj['name'];

    type Animal = {
        name : string;
        age : number;
        gender : 'male' | 'female';
    }

    type Name = Animal['name']

    const text:Name = 'hello';

    type Gender = Animal['gender']; // 'male' | 'female'

    type Keys = keyof Animal; // "name" | "age" | "gender"

    const key: Keys = 'name';

    type Person = {
        name : string;
        gender: Animal['gender'];
    }
}