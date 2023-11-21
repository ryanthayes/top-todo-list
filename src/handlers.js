import dom from "./dom";
import projects from "./projects";
import todos from "./todos";

const handlers = (() => {
  function listenForClicks() {
    // EVENT: Open New Project Modal
    const openProjectModal = document.querySelector("#openProjectModal");
    const addProjectBtn = document.querySelector("#addProjectBtn");
    const closeProjectModal = document.querySelector("#closeProjectModal");
    const projectModal = document.querySelector("#projectModal");

    openProjectModal.addEventListener("click", () => projectModal.showModal());

    // EVENT: On form submit, create project
    addProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      projects.newProject();
      addProjectForm.reset();
      projectModal.close();
    });

    // EVENT: Open New todo Modal
    const todoModal = document.querySelector("#todoModal");
    const closeTodoModal = document.querySelector("#closeTodoModal");

    // EVENT: On form submit, create todo
    const addTodoForm = document.querySelector("#addTodoForm");
    addTodoForm.addEventListener("submit", (e) => {
      const projectIndex = document
        .querySelector(".main-container")
        .getAttribute("data-index");
      const title = document.querySelector("#todoTitle").value;
      const description = document.querySelector("#todoDescription").value;
      const date = document.querySelector("#todoDate").value;
      const priority = document.querySelector("#todoPriority").value;

      e.preventDefault();
      todos.newTodo(projectIndex, title, description, date, priority);
      addTodoForm.reset();
      todoModal.close();
    });

    // EVENT:

    const navLinks = document.querySelectorAll(".sidebar-nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        switch (link.id) {
          case "navInbox":
            dom.renderInbox();
            break;
          case "navToday":
            dom.renderToday();
            break;
          case "navUpcoming":
            dom.renderUpcoming();
            break;
          case "navImportant":
            dom.renderImportant();
            break;
        }
      });
    });

    // Toggle completed task
    const toggleComplete = document.querySelectorAll('[data-action="checkbox');

    toggleComplete.forEach((item) => {
      item.addEventListener("click", (e) => console.log("click checkbox"));
    });

    // Toggle important (STAR) on/off
    const toggleImportant = document.querySelectorAll(".fa-star");

    toggleImportant.forEach((item) => {
      item.addEventListener("click", () => {
        console.log("click important");
      });
    });
  }

  return { listenForClicks };
})();

export default handlers;
