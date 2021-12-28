// When? How to use interface vs type

// 특정한 규격을 정의하는 경우 -> interface
// 어떤 데이터를 담을 때, 변수에 할당 할때, type 사용 | 데이터 담을 목적!

type PositionType = {
    x : number;
    y : number;
}

interface PositionInterface {
    x : number;
    y : number;
}



// object
const obj1: PositionType = {
    x : 1,
    y : 1
};

const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
};

// class
class Pos1 implements PositionType {
    x : number;
    y : number;
}

class Pos2 implements PositionInterface {
    x : number;
    y : number;
    z : number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
    z : number;
}

type ZPositionType = PositionType & { z : number };

// only interface can be merged.

interface PositionInterface {
    z : number;
}

// type PositionType = {

// }

type Person = {
    name: string,
    age: number,
}

type Name = Person['name'] // string

type NumberType = number;

// Union Type
type Direction = 'left' | 'right';

