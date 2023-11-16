import dom from "./dom";
import projects from "./projects";

const todos =(() => {

    let todosArray = [];

    if (localStorage.getItem('todo') === null) {
        todosArray = [
            {
                title: 'Project Proposal',
                description: 'Prepare project proposal for client',
                date: '2023-11-15',
                priority: 'Medium',
                projectIndex: 0,
                todoIndex: 0,
                completed: false
            },
            {
                title: 'Presentation Draft',
                description: 'Create draft of client presentation to present new marketing campaign proposal',
                date: '2023-11-21',
                priority: 'High',
                projectIndex: 0,
                todoIndex: 0,
                completed: false
            }
        ]
    } else {
        const todosFromStorage = JSON.parse(localStorage.getItem('todo'));
        todosArray = todosFromStorage;
    };
    
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
    function newTodo() {
  
        // Get form input values
        const title = document.querySelector('#todoTitle').value;
        const description = document.querySelector('#todoDescription').value;
        const date = document.querySelector('#todoDate').value;
        const priority = document.querySelector('#todoPriority').value;
        
        // Pass values to constructor
        const todo = new Todo(title, description, date, priority);
    
        // Add todo to array
        // projects.projectsArray.push(todo);

        // console.log(projects.projectsArray);
    
        // Add todo to local storage
        addToStorage();

        //Render todos to DOM
        // dom.renderTodos();
    };

    // DELETE TODOS FROM ARRAY
    function deleteTodo(index) {
        todos.todosArray.splice(index, 1);
        // addToStorage();
        dom.renderTodos();
    }

    return { 
        todosArray,
        newTodo, 
        deleteTodo
    };

})();

export default todos;