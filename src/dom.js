import tasks from "./tasks"
import projects from "./projects";

const dom = (() => {

    const toDoList = document.querySelector('#toDoList');

    function renderProjects() {
        
        toDoList.innerText = '';

        const projectHeader = document.createElement('h2');
        projectHeader.classList.add('title--sm', 'project-list__header');
        projectHeader.innerText = 'All Projects';
        toDoList.append(projectHeader);

        projects.forEach((project, index) => {

            const projectItems = document.createElement('div');
            projectItems.setAttribute('data-index', index);
            projectItems.classList.add('project-item');
            toDoList.append(projectItems);

            const projectTitle = document.createElement('h3');
            projectTitle.classList.add('project-title');
            projectTitle.innerText = project.title;
            toDoList.append(projectTitle);
        })
    };
    
    function renderTasks() {
    
        toDoList.innerText = '';

        const taskHeader = document.createElement('h2');
        taskHeader.classList.add('title--sm', 'task-list__header');
        taskHeader.innerText = 'All Tasks';
        toDoList.append(taskHeader);
    
        tasks.forEach((task, index) => {
            
            const taskItems = document.createElement('div');
            taskItems.setAttribute('data-index', index);
            taskItems.classList.add('task-item')
            toDoList.appendChild(taskItems);
    
            const taskTitle = document.createElement('h3');
            taskTitle.classList.add('task-item__title');
            taskTitle.innerText = task.title;
            taskItems.append(taskTitle);
    
            const taskDescription = document.createElement('p');
            taskDescription.classList.add('task-item__description');
            taskDescription.innerText = task.description;
            taskItems.append(taskDescription);
    
            const taskDate = document.createElement('p');
            taskDate.classList.add('task-item__date');
            taskDate.innerText = task.date;
            taskItems.append(taskDate);
    
            const taskPriority = document.createElement('p');
            taskPriority.classList.add('task-item__priority');
            taskPriority.innerText = task.priority;
            taskItems.append(taskPriority);
    
            const taskProject = document.createElement('p');
            taskProject.classList.add('task__project');
            taskProject.innerText = task.project;
            taskItems.append(taskProject);
    
        });
    };  

    return {
        renderTasks,
        renderProjects
    }

})();

export default dom;