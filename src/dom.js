import tasks from "./tasks"
import projects from "./projects";
import { createHtmlElement } from "./elements";

const dom = (() => {

    const projectsContainer = document.querySelector('#projectsContainer');
    const toDoList = document.querySelector('#toDoList');
    
    // RENDER PROJECTS IN SIDEBAR
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
    
    // RENDER TASKS ON MAIN PAGE
    function renderTasks() {
    
        toDoList.innerText = '';

        const taskHeader = document.createElement('h2');
        taskHeader.classList.add('title--sm', 'task-list__header');
        taskHeader.innerText = 'All Tasks';
        toDoList.append(taskHeader);

        tasks.forEach((task, index) => {
            
            const taskItems = createHtmlElement('li', null, ['task-item'], 'data-index', index, null, toDoList);

            const taskTitleContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, taskItems)
    
            const taskTitle = createHtmlElement('h3', null, ['task-item__title'], 'data-action', 'check', task.title, taskTitleContainer);
            
            // const taskDescription = createHtmlElement('p', null, ['task-item__description'], 'data-action', 'description', task.description, taskItems);

            const taskElContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, taskItems);

            const taskDate = createHtmlElement('p', null, ['task-item__date'], null, null, task.date, taskElContainer);

            const taskPriority = createHtmlElement('p', null, ['task-item__priority'], null, null, task.priority, taskElContainer);

            
            const taskBtnContainer = createHtmlElement('div', null, ['task-item__btn-container', '|', 'flex', 'gap-sm', 'align-items-center'], null, null, null, taskElContainer)

            const taskEditBtn = createHtmlElement('i', null, ['fas', 'fa-edit'], 'data-action', 'edit', null, taskBtnContainer);

            const taskDeleteBtn = createHtmlElement('i', null, ['fa-solid', 'fa-trash'], 'data-action', 'delete', null, taskBtnContainer);
            taskDeleteBtn.addEventListener('click', () => {
                deleteTask();
            })

            const taskDetailsBtn = createHtmlElement('i', null, ['fa', 'fa-info-circle'], 'data-action', 'details', null, taskBtnContainer);
   
            // CLICK EVENT LISTENER FOR ALL TASKS
            toDoList.addEventListener('click', (e) => {
                const target = e.target;
                const parentElement = target.parentNode;

                if (target.dataset.action === 'details') {


                }

            })
    
        });
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        // addToStorage();
        console.log(tasks.tasksArray);
        renderTasks();
    }

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

    return {
        renderTasks,
        renderProjects,
        setActive
    }

})();

export default dom;