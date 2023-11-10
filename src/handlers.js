const handlers = (() => {

    function listenForClicks() {

        // LISTENER TO OPEN ADD TASK MODAL
        const btnAddTask = document.querySelector('#btnAddTask');
        const tasksModal = document.querySelector('#tasksModal');
        
        btnAddTask.addEventListener('click', () => {
            console.log('Clicked');
            
            tasksModal.showModal();
        })
    };

    return listenForClicks;
})();

export default handlers;