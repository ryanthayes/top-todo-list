import dom from "./dom";
import projects from "./projects";

const todos =(() => {
    
    class Todo {
        constructor(title, description, date, priority) {
            this.title = title;
            this.description = description;
            this.date = date;
            this.priority = priority;
            this.complete = false;
        }
    };
    
    function addToStorage() { 
        localStorage.setItem('projects', JSON.stringify(projects.projectsArray));
    };
    
    // ADD new todos to todo list
    function newTodo(projectIndex, title, description, date, priority) {
        
        // Pass values to constructor
        const todo = new Todo(title, description, date, priority);
    
        // Add todo to array
        projects.projectsArray[projectIndex].todos.push(todo);
    
        // Add todo to local storage
        // addToStorage();

        //Render todos to DOM
        dom.renderTodos();
    };

    // EDIT TODO
    function editTodo() {
        console.log('edit todo');
    }
    
    // DELETE TODO
    function deleteTodo() {
        console.log('delete todo');
    };

    return {
        newTodo,
        editTodo,
        deleteTodo
    };

})();

export default todos;