import dom from "./dom";

const projects = (() => {

    let projectsArray = [];

    // GET PROJECTS FROM LOCAL STORAGE
    if (localStorage.getItem('projects') === null) {
        projectsArray = [
            {
                title: 'Client Presentation',
                tasks: [
                    {
                        title: 'Project Proposal',
                        description: 'Prepare project proposal for client',
                        date: '2023-11-15',
                        priority: 'Medium',
                        projectIndex: 0,
                        taskIndex: 0,
                        completed: false
                    },
                    {
                        title: 'Presentation Draft',
                        description: 'Create draft of client presentation to present new marketing campaign proposal',
                        date: '2023-11-21',
                        priority: 'High',
                        projectIndex: 0,
                        taskIndex: 1,
                        completed: false
                    }
                ]
            },
        ];
    } else {
        const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
        projectsArray = projectsFromStorage;
    }
    
    class Project {
        constructor(title) {
            this.title = title;
            this.tasks = [];
        }
    };
    
    function addToStorage() { 
        localStorage.setItem("project", JSON.stringify(projects));
    };
    
    function newProject() {
      
        // Get form input values
        const title = document.querySelector('#projectTitle').value;

        const project = new Project(title);
    
        // Add project to array
        projectsArray.push(project);

        // Add project to local storage
        addToStorage();

        //Render Projects to DOM
        dom.renderProjSidebar();
    };

    // DELETE PROJECTS FROM ARRAY
    function deleteProject(index) {
        projectsArray.splice(index, 1);
        // addToStorage();
        dom.renderProjects();
    }

    return {
        projectsArray,
        newProject, 
        deleteProject
    };

})();

export default projects;