type Check<T> = T extends string ? boolean : number;
// 조건부 타입 지정 가능
type Type = Check<string>;

type TypeName<T> = T extends string
    ? 'string'
    : T extends number
    ? 'number'
    : T extends boolean
    ? 'boolean'
    : 'object'

type T0 = TypeName<string>; // string

type T1 = TypeName<number>; // number
