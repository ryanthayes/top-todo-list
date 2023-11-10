import tasks from "./tasks";

const handlers = (() => {

    function listenForClicks() {

        // EVENT: Open New Task Modal
        const openTaskModal = document.querySelector('#openTaskModal');
        const closeTaskModal = document.querySelector('#closeTaskModal');
        const tasksModal = document.querySelector('#tasksModal');
        
        openTaskModal.addEventListener('click', () => {
            tasksModal.showModal();
        })

        closeTaskModal.addEventListener('click', () => {
            tasksModal.close();
        })

        // EVENT: On form submit, create task
        const newTaskForm = document.querySelector('#newTaskForm');
        newTaskForm.addEventListener('submit', tasks.newTask);
    };

    return { listenForClicks };
})();

export default handlers;