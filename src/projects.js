const projects = (() => {

    const projectsArray = [
        {
            title: 'Client Presentation',
            type: 'Work'
        },
        {
            title: 'Blind Date',
            type: 'Personal'
        }
    ];
    
    class Project {
        constructor(title, type) {
            this.title = title;
            this.type = type;
        }
    };
    
    function addToStorage() { 
        localStorage.setItem("project", JSON.stringify(projects));
    };
    
    function newProject() {
    
        // Get form input values
        const title = document.querySelector('#projectTitle').value;
        const type = document.querySelector('#projectType').value;
    
        const project = new Project(title, type);
    
        // Add task to array
        projectsArray.push(project)
    
        // Add task to local storage
        addToStorage();
    
    };

    return projectsArray;

})();

export default projects;