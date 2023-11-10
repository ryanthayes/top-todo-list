const tasks =(() => {

    const tasksArray = [
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
        const project = document.querySelector('#taskProject').value;
    
        const task = new Task(title, description, date, priority, project);
    
        // Add task to array
        tasksArray.push(task)
    
        // Add task to local storage
        addToStorage();
    
        console.log(tasksArray);
    };

    return tasksArray;

})();

export default tasks;