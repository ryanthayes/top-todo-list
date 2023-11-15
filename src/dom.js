import todos from "./todos"
import projects from "./projects";
import { createHtmlElement } from "./elements";

const dom = (() => {

    const headerProjects = document.querySelector('#headerProjects');
    const todoHeader = document.querySelector('#todoHeader');
    const toDoList = document.querySelector('#toDoList');
    
    function clearTodoList() {
        toDoList.innerText = '';
    }
    function clearTodoHeader() {
        todoHeader.innerText = '';
    }

    // RENDER PROJECTS IN SIDEBAR
    function renderProjects() {
        
        headerProjects.innerText = '';

        projects.projectsArray.forEach((project, index) => {

            // Create list item for each project
            const projectItems = createHtmlElement('li', null, ['header-project-items', '|', 'no-bullets', 'flex', 'gap-sm', 'align-items-center'], 'data-index', index, null, headerProjects);

            const projectTitle = createHtmlElement('p', null, ['header-project-title'], null, null, project.title, projectItems);

            projectItems.addEventListener('click', () => {
                renderProjectsPage(project, index);
                console.log('click');
            })

        });
    };   

    // RENDER PROJECTS PAGE
    function renderProjectsPage(project, index) {
        
        clearTodoHeader()
        clearTodoList();

        const todoHeaderTitle = createHtmlElement('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, project.title, todoHeader);

        const projBtnContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoHeader);

        // Create edit icon
        const projEditBtn = createHtmlElement('i', null, ['btn--edit', '|', 'fas', 'fa-edit'], 'data-action', 'edit', null, projBtnContainer);

        // Create delete icon
        const projDeleteBtn = createHtmlElement('i', null, ['btn--delete', '|', 'fa-solid', 'fa-trash'], 'data-action', 'delete', null, projBtnContainer);

        projDeleteBtn.addEventListener('click', () => {
            projects.deleteProject();
        })

        renderTodos();
    };

    
    // RENDER ALL PROJECTS ON PAGE
        
    function renderAllProjects() {
        projects.projectsArray.forEach((project) => {
            project.todos.forEach((todos, index) => {

                const todoItems = createHtmlElement('li', null, ['todo-item'], 'data-index', index, null, toDoList);
                
                const todoTitleContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems)

                const todoTitle = createHtmlElement('h3', null, ['todo-item__title'], 'data-action', 'check', todos.title, todoTitleContainer);

                const todoInfoContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems);

                const todoDate = createHtmlElement('p', null, ['todo-item__date'], null, null, todos.date, todoInfoContainer);

                const todoPriority = createHtmlElement('p', null, ['todo-item__priority'], null, null, todos.priority, todoInfoContainer);

                const todoBtnContainer = createHtmlElement('div', null, ['todo-item__btn-container', '|', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoInfoContainer)

                const todoEditBtn = createHtmlElement('i', null, ['fas', 'fa-edit'], 'data-action', 'edit', null, todoBtnContainer);

                const todoDeleteBtn = createHtmlElement('i', null, ['fa-solid', 'fa-trash'], 'data-action', 'delete', null, todoBtnContainer);
                todoDeleteBtn.addEventListener('click', () => {
                    deleteTodo();
                })

                const todoDetailsBtn = createHtmlElement('i', null, ['fa', 'fa-info-circle'], 'data-action', 'details', null, todoBtnContainer);
            });
        })       
    };
    

    // SET ACTIVE STATE ON SIDEBAR NAV ITEMS
    function setActive() {
        
        const allNavItems = document.querySelectorAll('.header-nav-items');  
        const allProjectItems = document.querySelectorAll('.project-items'); 

        allNavItems.forEach((item) => {
            addEventListener('click', (e) => {
                const target = e.target;

                item.classList.remove('header-nav-items-active');
                if (target.id === 'navInbox') {
                    navInbox.classList.add('header-nav-items-active');
                }
                if (target.id === 'navToday') {
                    navToday.classList.add('header-nav-items-active');
                } 
                if (target.id === 'navWeek') {
                    navWeek.classList.add('header-nav-items-active');
                } 
                if (target.id === 'navImportant') {
                    navImportant.classList.add('header-nav-items-active');
                }      
            })
        });
    };

    return {
        renderProjects,
        renderAllProjects,
        setActive
    }

})();

export default dom;