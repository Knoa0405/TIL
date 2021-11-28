{
    // Type Alias
    type Text = string;
    const name: Text = "Noah";

    type Student = {
        name : string;
        age : number;
    }

    const student: Student = {
        name : "노아",
        age : 21,
        // height : 178 => type alias 에 명시되어 있지 않는 property
    }

    // String Literal Types
    type Name = "Noah"
    // let NoaName : Name = "ellie" // X
    
}