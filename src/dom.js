import tasks from "./tasks"
import projects from "./projects";
import { createHtmlElement } from "./elements";

const dom = (() => {


    const projectsContainer = document.querySelector('#projectsContainer');
    const toDoList = document.querySelector('#toDoList');
    
    // Render Projects in sidebar
    function renderProjects() {
        
        projectsContainer.innerText = '';

        projects.forEach((project, index) => {

            if (project.type === 'Work') {
                const projectItems = createHtmlElement('li', null, ['project-items', '|', 'no-bullets', 'flex', 'gap-sm', 'align-items-center'], 'data-index', index, null, projectsContainer);

                const projectType = createHtmlElement('i', null, ['fa-solid', 'fa-briefcase'], null, null, null, projectItems);
            
                const projectTitle = createHtmlElement('p', null, ['project-title'], null, null, project.title, projectItems);
            }
            if (project.type === 'Personal') {
                const projectItems = createHtmlElement('li', null, ['project-items', '|', 'no-bullets', 'flex', 'gap-sm', 'align-items-center'], 'data-index', index, null, projectsContainer);

                const projectType = createHtmlElement('i', null, ['fa-solid', 'fa-martini-glass'], null, null, null, projectItems);
            
                const projectTitle = createHtmlElement('p', null, ['project-title'], null, null, project.title, projectItems);
            } 


        })
    };
    
    // Render Tasks on main page
    function renderTasks() {
    
        toDoList.innerText = '';

        const taskHeader = document.createElement('h2');
        taskHeader.classList.add('title--sm', 'task-list__header');
        taskHeader.innerText = 'All Tasks';
        toDoList.append(taskHeader);

        tasks.forEach((task, index) => {
          
            
            const taskItems = createHtmlElement('li', null, ['task-item'], 'data-index', index, null, toDoList);
    
            const taskTitle = createHtmlElement('h3', null, ['task-item__title'], 'data-action', 'check', task.title, taskItems);
            
            // const taskDescription = createHtmlElement('p', null, ['task-item__description'], 'data-action', 'description', task.description, taskItems);

            // const taskProject = createHtmlElement('p', null, ['task-item__project'], null, null, task.project, taskItems);

            const taskDate = createHtmlElement('p', null, ['task-item__date'], null, null, task.date, taskItems);

            const taskDetailsBtn = createHtmlElement('i', null, ['fa', 'fa-eye'], 'data-action', 'details', null, taskItems);

            const taskPriority = createHtmlElement('p', null, ['task-item__priority'], null, null, task.priority, taskItems);
            
            const taskBtnContainer = createHtmlElement('div', null, ['task-item__btn-container', '|', 'flex', 'gap-sm', 'align-items-center'], null, null, null, taskItems)

            const taskEditBtn = createHtmlElement('i', null, ['fas', 'fa-edit'], 'data-action', 'edit', null, taskBtnContainer);

            const taskDeleteBtn = createHtmlElement('i', null, ['fa-solid', 'fa-trash'], 'data-action', 'delete', null, taskBtnContainer);
   
            // CLICK EVENT LISTENER FOR ALL TASKS
            toDoList.addEventListener('click', (e) => {
                const target = e.target;
                const parentElement = target.parentNode;

                if (parentElement.className !== 'task-item') { 
                    return;
                }

                const task = parentElement;
                const taskIndex = task.dataset.index;
                const action = target.dataset.action;

                // action === 'check' && toggleTask(taskIndex);
                // action === 'details' && toggleDetails(taskIndex);
                // action === 'edit' && editTask(taskIndex);
                // action === 'delete' && deleteTask(taskIndex);

            })
    
        });
    };

    function setActive() {
        
        const allNavItems = document.querySelectorAll('.nav-items');  
        const allProjectItems = document.querySelectorAll('.project-items'); 

        allNavItems.forEach((item) => {
            addEventListener('click', (e) => {
                const target = e.target;

                item.classList.remove('nav-items-active');
                if (target.id === 'navInbox') {
                    navInbox.classList.add('nav-items-active');
                }
                if (target.id === 'navToday') {
                    navToday.classList.add('nav-items-active');
                } 
                if (target.id === 'navWeek') {
                    navWeek.classList.add('nav-items-active');
                } 
                if (target.id === 'navImportant') {
                    navImportant.classList.add('nav-items-active');
                } 
                
            })
    
        });
    };

        // // TOGGLE ON/OFF COMPLETED TASK
        // function toggleTask(taskIndex) {
        //     tasks = tasks.map((task, index) => {
        //         return {
        //             ...task,
        //             checked: index === taskIndex ? !task.checked : task.checked
        //         }
        //     })
    
        //     renderTasks();
        // };

        // TOGGLE TASK DETAILS
        // function toggleDetails(taskIndex) {
        //     if ()
        // }

        // EDIT TASK
        // function editTask(taskIndex) {
        //     taskTitle.value = tasks[taskIndex].value;
        // }

    return {
        renderTasks,
        renderProjects,
        setActive
    }

})();

export default dom;