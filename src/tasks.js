import dom from "./dom";

const tasks =(() => {

    let tasksArray = [
        {
            title: 'Display Array',
            description: 'Display array of tasks on DOM',
            date: '2023-11-08',
            priority: 'High',
            project: 'default'
        },
        {
            title: 'Display Local Storage',
            description: 'Display local storage of tasks on DOM',
            date: '2023-11-08',
            priority: 'High',
            project: 'default'
        }
    ];
    
    class Task {
        constructor(title, description, date, priority, project) {
            this.title = title;
            this.description = description;
            this.date = date;
            this.priority = priority;
            this.project = project;
        }
    };
    
    function addToStorage() { 
        localStorage.setItem("task", JSON.stringify(tasksArray));
    };
    
    function newTask() {
  
        // Get form input values
        const title = document.querySelector('#taskTitle').value;
        const description = document.querySelector('#taskDescription').value;
        const date = document.querySelector('#taskDate').value;
        const priority = document.querySelector('#taskPriority').value;
    
        const task = new Task(title, description, date, priority);
    
        // Add task to array
        tasksArray.push(task);

        console.log(tasksArray);
    
        // Add task to local storage
        addToStorage();

        //Render to DOM
        dom.renderTasks();
    };

    return { 
        tasksArray,
        newTask
    };

})();

export default tasks;