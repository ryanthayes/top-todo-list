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

        // EVENT: On form submit, create todo
        addProjectBtn.addEventListener('click', (e) =>{
            (e).preventDefault();
            projects.newProject();
            addProjectForm.reset();
            projectModal.close();

        });

        // // EVENT: Open New todo Modal
        // const openTodoModal = document.querySelector('#openTodoModal');
        // const closeTodoModal = document.querySelector('#closeTodoModal');
        // const todosModal = document.querySelector('#todosModal');
        
        // openTodoModal.addEventListener('click', () => {
        //     todosModal.showModal();
        // })

        // closeTodoModal.addEventListener('click', () => {
        //     todosModal.close();
        // })

        // // EVENT: On form submit, create todo
        // const newTodoForm = document.querySelector('#newTodoForm');
        // newTodoForm.addEventListener('submit', (e) =>{
        //     (e).preventDefault();

        //     todos.newTodo();
        // });
    };

    return { listenForClicks };
})();

export default handlers;