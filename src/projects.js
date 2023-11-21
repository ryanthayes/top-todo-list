import dom from "./dom";

const projects = (() => {
  let projectsArray = [
    {
      title: "Client Presentation",
      todos: [
        {
          title: "Project Proposal",
          description: "Prepare project proposal for client",
          date: "2023-11-20",
          important: true,
          completed: true,
        },
        {
          title: "Presentation Draft",
          description:
            "Create draft of client presentation to present new marketing campaign proposal",
          date: "2023-11-21",
          important: false,
          completed: false,
        },
      ],
    },
    {
      title: "Shareholders Meeting",
      todos: [
        {
          title: "Quarterly Reports",
          description: "Prepare quarterly reports for stakeholders",
          date: "2023-11-18",
          important: false,
          completed: false,
        },
        {
          title: "Projected Future Earnings",
          description:
            "Presentation of projected revenues and earnings for upcoming quarter.",
          date: "2023-11-22",
          important: true,
          completed: false,
        },
      ],
    },
  ];

  // GET PROJECTS FROM LOCAL STORAGE
  // if (localStorage.getItem('projects') === null) {
  //     projectsArray = [
  //         {
  //             title: 'Client Presentation',
  //             todos: [
  //                 {
  //                     title: 'Project Proposal',
  //                     description: 'Prepare project proposal for client',
  //                     date: '2023-11-15',
  //                     important: true,
  //                     completed: false
  //                 },
  //                 {
  //                     title: 'Presentation Draft',
  //                     description: 'Create draft of client presentation to present new marketing campaign proposal',
  //                     date: '2023-11-21',
  //                     important: false,
  //                     completed: false
  //                 }
  //             ]
  //         },
  //         {
  //             title: 'Shareholders Meeting',
  //             todos: [
  //                 {
  //                     title: 'Quarterly Reports',
  //                     description: 'Prepare quarterly reports for stakeholders',
  //                     date: '2023-11-18',
  //                     important: false,
  //                     completed: false
  //                 },
  //                 {
  //                     title: 'Projected Future Earnings',
  //                     description: 'Presentation of projected revenues and earnings for upcoming quarter.',
  //                     date: '2023-11-22',
  //                     important: false,
  //                     completed: false
  //                 }
  //             ]
  //         }
  //     ];
  // } else {
  //     const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));
  //     projectsArray = projectsFromStorage;
  // };

  class Project {
    constructor(title) {
      this.title = title;
      this.todos = [];
    }
  }

  function addToStorage() {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  function newProject() {
    // Get form input values
    const title = document.querySelector("#projectTitle").value;

    const project = new Project(title);

    // Add project to array
    projectsArray.push(project);

    // Add project to local storage
    // addToStorage();

    // Update Sidebar DOM
    dom.renderSidebar();
  }

  // DELETE PROJECT
  function deleteProject(index) {
    projectsArray.splice(index, 1);
    // addToStorage();
    dom.renderSidebar();
    dom.renderInbox();
  }

  // EDIT PROJECT
  function editProject() {
    console.log("edit project");
  }

  function activeProject() {
    let activeProjectArray = projectsArray.filter((project) => project.active);
    return activeProjectArray[0];
  }

  return {
    projectsArray,
    newProject,
    deleteProject,
    editProject,
    activeProject,
  };
})();

export default projects;
