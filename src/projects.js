const projects = [
    {
        title: 'Default'
    }
];


class Project {
    constructor(title) {
        this.title = title;
    }
};

const addToStorage = () => { 
    localStorage.setItem("project", JSON.stringify(projects));
};

const newProject = () => {

    // Get form input values
    const title = document.querySelector('#projectTitle').value;

    const project = new Project(title);

    // Add task to array
    projects.push(project)

    // Add task to local storage
    addToStorage();

    return newProject;

};

export default projects;