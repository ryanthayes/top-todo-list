import todos from "./todos";
import projects from "./projects";
import { createHtmlElement } from "./elements";
import { format, isEqual, parseISO } from "date-fns";

const dom = (() => {

    const mainContainer = document.querySelector('#mainContainer');
    const sidebarProjects = document.querySelector('#sidebarProjects');
    const todoModal = document.querySelector('#todoModal');
    
    function clearMainContainer() {
        mainContainer.textContent = '';
    };
    function clearTodoList() {
        todoList.textContent = '';
    };

    // RENDER PROJECTS IN SIDEBAR
    function renderSidebar() {
        
        sidebarProjects.innerText = '';

        projects.projectsArray.forEach((project, index) => {

            // Create list item for each project
            const projectLink = createHtmlElement('li', null, ['sidebar-project-link', '|', 'no-bullets'], 'data-index', index, null, sidebarProjects);

            const projectTitle = createHtmlElement('p', null, ['sidebar-project-title'], null, null, project.title, projectLink);

            const projectBtns = createHtmlElement('div', null, ['sidebar-button-container', '|', 'flex', 'gap-sm'], null, null, null,  projectLink)

            // Create edit button for project
            const projectEditBtn = createHtmlElement('i', null, ['btn--edit', 'btn--dark', '|', 'fas', 'fa-edit'], 'data-action', 'edit', null, projectBtns);

            projectEditBtn.addEventListener('click', () => projects.editProject());

            // Create delete button for project
            const projectDeleteBtn = createHtmlElement('i', null, ['btn--delete', 'btn--dark', '|', 'fa-solid', 'fa-trash'], 'data-action', 'delete', null, projectBtns);

            projectDeleteBtn.addEventListener('click', () => projects.deleteProject());

            // EVENT: Render project to page
            projectLink.addEventListener('click', () => renderCurrentProject(project, index));
        })
    }; 

    // RENDER INBOX TODOs
    function renderInbox() {
        
        clearMainContainer();
        
        mainContainer.setAttribute('data-index', 'inbox');

        const todoHeaderContainer = createHtmlElement('div', null, ['todo-header-container'], null, null, null, mainContainer);

        const todoHeaderTitle = createHtmlElement('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, 'Inbox', todoHeaderContainer);

        const todoList = createHtmlElement('ul', 'todoList', ['todo-list'], null, null, null, mainContainer);

        projects.projectsArray.forEach((project) => {
            project.todos.forEach((todo, index) => {
                const todoItems = createHtmlElement('li', null, ['todo-item'], 'data-index', index, null, todoList);

                const todoTitleContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems)
    
                const todoTitle = createHtmlElement('h3', null, ['todo-item__title'], 'data-action', 'check', todo.title, todoTitleContainer);
    
                const todoInfoContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems);
    
                const todoDate = createHtmlElement('p', null, ['todo-item__date'], null, null, todo.date, todoInfoContainer);
    
                const todoPriority = createHtmlElement('p', null, ['todo-item__priority'], null, null, todo.priority, todoInfoContainer);

                const todoBtnContainer = createHtmlElement('div', null, ['todo-item__btn-container', '|', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoInfoContainer)

                const todoDetailsBtn = createHtmlElement('i', null, ['btn--info', 'btn--dark', '|', 'fa', 'fa-info-circle'], 'data-action', 'details', null, todoBtnContainer);

                todoDetailsBtn.addEventListener('click', () => console.log('todo details'));
            })

        })

        // renderTodos();
    };

    // RENDER TODAY TODOs
    function renderToday() {
        
        clearMainContainer();

        mainContainer.setAttribute('data-index', 'today');

        const todoHeaderContainer = createHtmlElement('div', null, ['todo-header-container'], null, null, null, mainContainer);

        const todoHeaderTitle = createHtmlElement('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, 'Today', todoHeaderContainer);

        const todoList = createHtmlElement('ul', 'todoList', ['todo-list'], null, null, null, mainContainer);

        let today = Date.parse(format(new Date(), "yyyy-MM-dd"));
        projects.projectsArray.forEach((project) => {
            project.todos.forEach((todo, index) => {
                let date = Date.parse(todo.date);
                if (isEqual(date, today)){
                    

                    const todoItems = createHtmlElement('li', null, ['todo-item'], 'data-index', index, null, todoList);

                    const todoTitleContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems)
        
                    const todoTitle = createHtmlElement('h3', null, ['todo-item__title'], 'data-action', 'check', todo.title, todoTitleContainer);
        
                    const todoInfoContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems);
        
                    const todoDate = createHtmlElement('p', null, ['todo-item__date'], null, null, todo.date, todoInfoContainer);
        
                    const todoPriority = createHtmlElement('p', null, ['todo-item__priority'], null, null, todo.priority, todoInfoContainer);

                    const todoBtnContainer = createHtmlElement('div', null, ['todo-item__btn-container', '|', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoInfoContainer)

                    const todoDetailsBtn = createHtmlElement('i', null, ['btn--info', 'btn--dark', '|', 'fa', 'fa-info-circle'], 'data-action', 'details', null, todoBtnContainer);

                    todoDetailsBtn.addEventListener('click', () => console.log('todo details'));

                } else { 
                    return };

            });
        });
        checkNoTodo();
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

        
    };

    // RENDER CURRENT PROJECT TO PAGE
    function renderCurrentProject(project, index) {
        
        clearMainContainer();
        
        mainContainer.setAttribute('data-index', index);
        
        const mainHeaderContainer = createHtmlElement('div', null, ['todo-header-container'], null, null, null, mainContainer);

        const mainHeaderTitle = createHtmlElement('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, project.title, mainHeaderContainer);

        const mainHeaderBtns = createHtmlElement('div', null, ['todo-header__btn-container', 'flex', 'gap-sm', 'align-items-center'], null, null, null, mainHeaderContainer);

        // Create add todo button
        const addTodoBtn = createHtmlElement('i', 'addTodoBtn', ['btn--add', 'btn--light', '|', 'fa-solid', 'fa-circle-plus'], 'data-action', 'edit', null, mainHeaderBtns);

        addTodoBtn.addEventListener('click', () => todoModal.showModal());

        const todoList = createHtmlElement('ul', 'todoList', ['todo-list'], null, null, null, mainContainer);

        renderTodos();
    };

    function renderTodos() {
        
        const currentProject = document.querySelector('.main-container').getAttribute('data-index');
        const todoList = document.querySelector('.todo-list');

        clearTodoList();

        projects.projectsArray[currentProject].todos.forEach((todo, index) => {

            const todoItems = createHtmlElement('li', null, ['todo-item'], 'data-index', index, null, todoList);

            const todoTitleContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems)

            const todoTitle = createHtmlElement('h3', null, ['todo-item__title'], 'data-action', 'check', todo.title, todoTitleContainer);

            const todoInfoContainer = createHtmlElement('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems);

            const todoDate = createHtmlElement('p', null, ['todo-item__date'], null, null, todo.date, todoInfoContainer);

            const todoPriority = createHtmlElement('p', null, ['todo-item__priority'], null, null, todo.priority, todoInfoContainer);

            const todoBtnContainer = createHtmlElement('div', null, ['todo-item__btn-container', '|', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoInfoContainer)

            const todoDetailsBtn = createHtmlElement('i', null, ['btn--info', 'btn--dark', '|', 'fa', 'fa-info-circle'], 'data-action', 'details', null, todoBtnContainer);

            todoDetailsBtn.addEventListener('click', () => console.log('todo details'));

            const todoEditBtn = createHtmlElement('i', null, ['btn--edit', 'btn--dark', '|', 'fas', 'fa-edit'], 'data-action', 'edit', null, todoBtnContainer);
            
            todoEditBtn.addEventListener('click', () => todos.editTodo());

            const todoDeleteBtn = createHtmlElement('i', null, ['btn--delete', 'btn--dark', '|', 'fa-solid', 'fa-trash'], 'data-action', 'delete', null, todoBtnContainer);
            
            todoDeleteBtn.addEventListener('click', () => todos.deleteTodo());
        });

    };

    function checkNoTodo(){
        const todoList = document.querySelector('#todoList');
        if (todoList.textContent === '') {
            displayNoTodo();
        } else {
            return
        }
    }
    
    function displayNoTodo(){
        const displayMessage = createHtmlElement('p', null, ['display-message'], null, null, 'Nice! Nothing Todo Today!', mainContainer);   
    }

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
        renderImportant,
        renderCurrentProject,
        renderTodos,
        setActive
    }

})();

export default dom;