{
    type ToDo = {
        title : string;
        description : string;
        label : string;
        priority : 'high' | 'low';
    };

    function updateToDo(todo : ToDo, fieldsToUpdate : Partial<ToDo>) {
        return { ...todo, fieldsToUpdate };
    }

    const todo : ToDo = {
        title : 'learn typescript',
        description : 'Hard Study',
        label : 'hello',
        priority : 'high'
    }

    const updated = updateToDo(todo, { priority : 'low'});

    console.log(updated);
}