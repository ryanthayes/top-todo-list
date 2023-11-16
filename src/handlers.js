import dom from "./dom";
import projects from "./projects";
import todos from "./todos";

const handlers = (() => {

    function listenForClicks() {

        // EVENT: Open New Project Modal
        const openProjectModal = document.querySelector('#openProjectModal');
        const addProjectBtn = document.querySelector('#addProjectBtn');
        const closeProjectModal = document.querySelector('#closeProjectModal');
        const projectModal = document.querySelector('#projectModal');

        openProjectModal.addEventListener('click', () => {
            projectModal.showModal();
        });

        // EVENT: On form submit, create project
        addProjectBtn.addEventListener('click', (e) =>{
            (e).preventDefault();
            projects.newProject();
            addProjectForm.reset();
            projectModal.close();

        });

        // EVENT: Open New todo Modal
        const todoModal = document.querySelector('#todoModal');
        const closeTodoModal = document.querySelector('#closeTodoModal');

        // EVENT: On form submit, create todo
        const addTodoForm = document.querySelector('#addTodoForm');
        addTodoForm.addEventListener('submit', (e) =>{
            (e).preventDefault();

            todos.newTodo();
            addTodoForm.reset();
            todoModal.close();
        }); 

        // EVENT: 

        const navLinks = document.querySelectorAll('.sidebar-nav-link');
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {

                switch (link.id) {
                    case 'navInbox':
                        dom.renderInbox();
                        break
                    case 'navToday':
                        dom.renderToday();
                        break
                    case 'navWeek':
                        dom.renderWeek();
                        break
                    case 'navImportant':
                        dom.renderImportant();
                        break
                }
            })
        })
    };

    return { listenForClicks };
})();

export default handlers;