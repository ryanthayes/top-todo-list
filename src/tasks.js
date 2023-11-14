import dom from "./dom";
import projects from "./projects";

const tasks =(() => {

    let tasksArray = [];

    if (localStorage.getItem('task') === null) {
        tasksArray = [
            {
                title: 'Project Proposal',
                description: 'Prepare project proposal for client',
                date: '2023-11-15',
                priority: 'Medium',
                projectIndex: 0,
                taskIndex: 0,
                completed: false
            },
            {
                title: 'Presentation Draft',
                description: 'Create draft of client presentation to present new marketing campaign proposal',
                date: '2023-11-21',
                priority: 'High',
                projectIndex: 0,
                taskIndex: 0,
                completed: false
            }
        ]
    } else {
        const tasksFromStorage = JSON.parse(localStorage.getItem('task'));
        tasksArray = tasksFromStorage;
    };
    
    class Task {
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
    

    // ADD new tasks to todo list
    function newTask() {
  
        // Get form input values
        const title = document.querySelector('#taskTitle').value;
        const description = document.querySelector('#taskDescription').value;
        const date = document.querySelector('#taskDate').value;
        const priority = document.querySelector('#taskPriority').value;
        
        // Pass values to constructor
        const task = new Task(title, description, date, priority);
    
        // Add task to array
        projects.projectsArray[projectIndex].push(task);

        console.log(projects.projectsArray);
    
        // Add task to local storage
        addToStorage();

        //Render tasks to DOM
        dom.renderTasks();
    };

    // DELETE TASKS FROM ARRAY
    function deleteTask(index) {
        tasks.tasksArray.splice(index, 1);
        // addToStorage();
        dom.renderTasks();
    }

    return { 
        tasksArray,
        newTask, 
        deleteTask
    };

})();

export default tasks;