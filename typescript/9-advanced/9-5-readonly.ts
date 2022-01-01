{
    type ToDo = {
        title : string;
        description : string;
    };
    // utility types => Readonly
    function display(todo: Readonly<ToDo>) {
        // todo.title = 'jaja'; => readonly error
    }
}