{
    // Intersection Type : & ( and )

    type Student = {
        name : string;
        score : number;
    }

    type Worker = {
        employeeId : number;
        work : () => void;
    }

    function internWork (person : Student & Worker) {
        console.log(person.name, person.score, person.employeeId, person.work());
    }

    internWork({
        name : '노아',
        score : 27,
        employeeId : 1,
        work : () => console.log('일한다!')
    })
}