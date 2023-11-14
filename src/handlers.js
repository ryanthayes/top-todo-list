import projects from "./projects";
import tasks from "./tasks";

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

        // EVENT: On form submit, create task
        addProjectBtn.addEventListener('click', (e) =>{
            (e).preventDefault();
            projects.newProject();
            addProjectForm.reset();
            projectModal.close();

        });

        // // EVENT: Open New Task Modal
        // const openTaskModal = document.querySelector('#openTaskModal');
        // const closeTaskModal = document.querySelector('#closeTaskModal');
        // const tasksModal = document.querySelector('#tasksModal');
        
        // openTaskModal.addEventListener('click', () => {
        //     tasksModal.showModal();
        // })

        // closeTaskModal.addEventListener('click', () => {
        //     tasksModal.close();
        // })

        // // EVENT: On form submit, create task
        // const newTaskForm = document.querySelector('#newTaskForm');
        // newTaskForm.addEventListener('submit', (e) =>{
        //     (e).preventDefault();

        //     tasks.newTask();
        // });
    };

    return { listenForClicks };
})();

export default handlers;