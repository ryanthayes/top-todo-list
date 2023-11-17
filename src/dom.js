import todos from "./todos";
import projects from "./projects";
import { createHtmlElement } from "./elements";
import { format } from "date-fns";

const dom = (() => {

    const mainContainer = document.querySelector('#mainContainer');
    const sidebarProjects = document.querySelector('#sidebarProjects');
    const todoModal = document.querySelector('#todoModal');
    
    function clearMainContainer() {
        mainContainer.innerText = '';
    };
    function clearTodoContainer() {
        todoContainer.innerText = '';
    };

    // RENDER PROJECTS IN SIDEBAR
    function renderSidebar() {
    
        sidebarProjects.innerText = '';

        projects.projectsArray.forEach((project, index) => {

            // Create list item for each project
            const projectLinks = createHtmlElement('li', null, ['sidebar-project-link', '|', 'no-bullets', 'flex', 'gap-sm', 'align-items-center'], 'data-index', index, null, sidebarProjects);

            const projectTitle = createHtmlElement('p', null, ['header-project-title'], null, null, project.title, projectLinks);

            // EVENT: Render project to page
            projectLinks.addEventListener('click', () => renderCurrentProject(project, index));
        })
    }; 

    // RENDER INBOX TODOs
    function renderInbox() {
        
        clearMainContainer();
        
        mainContainer.setAttribute('data-index', 'inbox');

        const todoHeaderContainer = createHtmlElement('div', null, ['todo-header-container'], null, null, null, mainContainer);

        const todoHeaderTitle = createHtmlElement('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, 'Inbox', todoHeaderContainer);

        const todoHeaderBtns = createHtmlElement('div', null, ['todo-header__btn-container', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoHeaderContainer);

        // Create add todo button
        const addTodoBtn = createHtmlElement('i', 'addTodoBtn', ['btn--add', 'btn--light', '|', 'fa-solid', 'fa-circle-plus'], 'data-action', 'edit', null, todoHeaderBtns);

        addTodoBtn.addEventListener('click', () => todoModal.showModal());

        renderTodos();
    };

    // RENDER TODAY TODOs
    function renderToday() {
        
        clearMainContainer();
        
        mainContainer.setAttribute('data-index', 'today');

        const todoHeaderContainer = createHtmlElement('div', null, ['todo-header-container'], null, null, null, mainContainer);

        const todoHeaderTitle = createHtmlElement('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, 'Today', todoHeaderContainer);

        const todoHeaderBtns = createHtmlElement('div', null, ['todo-header__btn-container', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoHeaderContainer);

        // Create add todo button
        const addTodoBtn = createHtmlElement('i', 'addTodoBtn', ['btn--add', 'btn--light', '|', 'fa-solid', 'fa-circle-plus'], 'data-action', 'edit', null, todoHeaderBtns);

        addTodoBtn.addEventListener('click', () => todoModal.showModal());

        renderTodos();
    };

    // RENDER THIS WEEK TODOs
    function renderUpcoming() {
        
        clearMainContainer();
        
        mainContainer.setAttribute('data-index', 'upcoming');

        const todoHeaderContainer = createHtmlElement('div', null, ['todo-header-container'], null, null, null, mainContainer);

        const todoHeaderTitle = createHtmlElement('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, 'Upcoming', todoHeaderContainer);

        const todoHeaderBtns = createHtmlElement('div', null, ['todo-header__btn-container', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoHeaderContainer);

        // Create add todo button
        const addTodoBtn = createHtmlElement('i', 'addTodoBtn', ['btn--add', 'btn--light', '|', 'fa-solid', 'fa-circle-plus'], 'data-action', 'edit', null, todoHeaderBtns);

        addTodoBtn.addEventListener('click', () => todoModal.showModal());

        renderTodos();
    };

    // RENDER IMPORTANT TODOs
    function renderImportant() {
        
        clearMainContainer();
        
        mainContainer.setAttribute('data-index', 'important');

        const todoHeaderContainer = createHtmlElement('div', null, ['todo-header-container'], null, null, null, mainContainer);

        const todoHeaderTitle = createHtmlElement('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, 'Important', todoHeaderContainer);

        const todoHeaderBtns = createHtmlElement('div', null, ['todo-header__btn-container', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoHeaderContainer);

        // Create add todo button
        const addTodoBtn = createHtmlElement('i', 'addTodoBtn', ['btn--add', 'btn--light', '|', 'fa-solid', 'fa-circle-plus'], 'data-action', 'edit', null, todoHeaderBtns);

        addTodoBtn.addEventListener('click', () => todoModal.showModal());

        renderTodos();
    };

    // RENDER CURRENT PROJECT TO PAGE
    function renderCurrentProject(project, index) {
        
        clearMainContainer()
        
        mainContainer.setAttribute('data-index', index);
        
        const mainHeaderContainer = createHtmlElement('div', null, ['todo-header-container'], null, null, null, mainContainer);

        const mainHeaderTitle = createHtmlElement('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, project.title, mainHeaderContainer);

        const mainHeaderBtns = createHtmlElement('div', null, ['todo-header__btn-container', 'flex', 'gap-sm', 'align-items-center'], null, null, null, mainHeaderContainer);

        // Create add todo button
        const addTodoBtn = createHtmlElement('i', 'addTodoBtn', ['btn--add', 'btn--light', '|', 'fa-solid', 'fa-circle-plus'], 'data-action', 'edit', null, mainHeaderBtns);

        addTodoBtn.addEventListener('click', () => todoModal.showModal());

        // Create edit button for project
        const projEditBtn = createHtmlElement('i', null, ['btn--edit', 'btn--light', '|', 'fas', 'fa-edit'], 'data-action', 'edit', null, mainHeaderBtns);

        projEditBtn.addEventListener('click', () => projects.editProject());

        // Create delete button for project
        const projDeleteBtn = createHtmlElement('i', null, ['btn--delete', 'btn--light', '|', 'fa-solid', 'fa-trash'], 'data-action', 'delete', null, mainHeaderBtns);

        projDeleteBtn.addEventListener('click', () => projects.deleteProject());

        const todoContainer = createHtmlElement('div', 'todoContainer', ['todo-container'], null, null, null, mainContainer);

        renderTodos();
    };

    function renderTodos() {
        
        const currentProject = document.querySelector('.main-container').getAttribute('data-index');
        const todoContainer = document.querySelector('.todo-container');

        todoContainer.textContent = '';

        projects.projectsArray[currentProject].todos.forEach((todos, index) => {

            const todoItems = createHtmlElement('li', null, ['todo-item'], 'data-index', index, null, todoContainer);

            const todoTitleContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems)

            const todoTitle = createHtmlElement('h3', null, ['todo-item__title'], 'data-action', 'check', todos.title, todoTitleContainer);

            const todoInfoContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems);

            const todoDate = createHtmlElement('p', null, ['todo-item__date'], null, null, todos.date, todoInfoContainer);

            const todoPriority = createHtmlElement('p', null, ['todo-item__priority'], null, null, todos.priority, todoInfoContainer);

            const todoBtnContainer = createHtmlElement('div', null, ['todo-item__btn-container', '|', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoInfoContainer)

            const todoDetailsBtn = createHtmlElement('i', null, ['btn--info', 'btn--dark', '|', 'fa', 'fa-info-circle'], 'data-action', 'details', null, todoBtnContainer);

            todoDetailsBtn.addEventListener('click', () => console.log('todo details'));

            const todoEditBtn = createHtmlElement('i', null, ['btn--edit', 'btn--dark', '|', 'fas', 'fa-edit'], 'data-action', 'edit', null, todoBtnContainer);
            
            todoEditBtn.addEventListener('click', () => todos.deleteTodos());

            const todoDeleteBtn = createHtmlElement('i', null, ['btn--delete', 'btn--dark', '|', 'fa-solid', 'fa-trash'], 'data-action', 'delete', null, todoBtnContainer);
            
            todoDeleteBtn.addEventListener('click', () => console.log('delete todo'));
        });

    };

    // SET ACTIVE STATE ON SIDEBAR NAV ITEMS
    function setActive(projectIndex) {
        
        const allNavItems = document.querySelectorAll('.sidebar-nav-link', '.sidebar-project-link');  

        allNavItems.forEach((item) => {
            addEventListener('click', (e) => {
                const target = e.target;

                item.classList.remove('sidebar-nav-link-active');
                if (target.id === 'navInbox') {
                    navInbox.classList.add('sidebar-nav-link-active');
                }
                if (target.id === 'navToday') {
                    navToday.classList.add('sidebar-nav-link-active');
                } 
                if (target.id === 'navUpcoming') {
                    navUpcoming.classList.add('sidebar-nav-link-active');
                } 
                if (target.id === 'navImportant') {
                    navImportant.classList.add('sidebar-nav-link-active');
                }      
            })
        });
    };

    return {
        renderSidebar,
        renderInbox,
        renderToday,
        renderUpcoming,
        renderImportant,
        renderCurrentProject,
        renderTodos,
        setActive
    }

})();

export default dom;