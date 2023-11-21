import { format, isEqual, parseISO } from "date-fns";
import todos from "./todos";
import projects from "./projects";
import { createHtmlElement } from "./elements";

const dom = (() => {
  const mainContainer = document.querySelector("#mainContainer");
  const sidebarProjects = document.querySelector("#sidebarProjects");
  const todoModal = document.querySelector("#todoModal");

  function clearMainContainer() {
    mainContainer.textContent = "";
  }
  function clearTodoList() {
    todoList.textContent = "";
  }

  // RENDER PROJECTS IN SIDEBAR
  function renderProjects() {
    sidebarProjects.innerText = "";

    projects.projectsArray.forEach((project, index) => {
      // Create list item for each project
      const sidebarProject = createHtmlElement(
        "li",
        null,
        ["sidebar-project", "|", "no-bullets"],
        "data-index",
        index,
        null,
        sidebarProjects,
      );

      const projectTitle = createHtmlElement(
        "a",
        null,
        ["sidebar-project-link"],
        null,
        null,
        project.title,
        sidebarProject,
      );

      const projectBtns = createHtmlElement(
        "div",
        null,
        ["sidebar-project-buttons", "|", "flex", "gap-sm"],
        null,
        null,
        null,
        sidebarProject,
      );

      // Create edit button for project
      const projectEditBtn = createHtmlElement(
        "i",
        null,
        ["btn--edit", "btn--dark", "|", "fas", "fa-edit"],
        "data-action",
        "edit",
        null,
        projectBtns,
      );

      projectEditBtn.addEventListener("click", () => projects.editProject());

      // Create delete button for project
      const projectDeleteBtn = createHtmlElement(
        "i",
        null,
        ["btn--delete", "btn--dark", "|", "fa-solid", "fa-trash"],
        "data-action",
        "delete",
        null,
        projectBtns,
      );

      projectDeleteBtn.addEventListener("click", () =>
        projects.deleteProject(index),
      );

      // EVENT: Render project to page
      projectTitle.addEventListener("click", () =>
        renderCurrentProject(project, index),
      );
    });
  }

  // RENDER INBOX TODOs
  function renderInbox() {
    clearMainContainer();

    mainContainer.setAttribute("data-index", "inbox");

    const todoHeaderContainer = createHtmlElement(
      "div",
      null,
      ["todo-header-container"],
      null,
      null,
      null,
      mainContainer,
    );

    const todoHeaderTitle = createHtmlElement(
      "h2",
      null,
      [
        "todo-header__title",
        "|",
        "title--sm",
        "flex",
        "justify-content-between",
      ],
      null,
      null,
      "Inbox",
      todoHeaderContainer,
    );

    const todoList = createHtmlElement(
      "ul",
      "todoList",
      ["todo-list"],
      null,
      null,
      null,
      mainContainer,
    );

    projects.projectsArray.forEach((project) => {
      project.todos.forEach((todo, index) => {
        const todoItems = createHtmlElement(
          "li",
          null,
          ["todo-item"],
          "data-index",
          index,
          null,
          todoList,
        );

        const todoTitleContainer = createHtmlElement(
          "div",
          null,
          ["flex", "gap-sm", "align-items-center"],
          null,
          null,
          null,
          todoItems,
        );

        const todoCheckBox = createHtmlElement(
          "i",
          null,
          ["far", "fa-circle"],
          "data-action",
          "checkbox",
          null,
          todoTitleContainer,
        );

        const todoTitle = createHtmlElement(
          "h3",
          null,
          ["todo-item__title"],
          "data-action",
          "check",
          todo.title,
          todoTitleContainer,
        );

        if (todo.completed) {
          todoTitle.classList.toggle("strikethrough");
          todoItems.classList.toggle("fade");
        }

        const todoInfoContainer = createHtmlElement(
          "div",
          null,
          ["flex", "gap-sm", "align-items-center"],
          null,
          null,
          null,
          todoItems,
        );

        const todoDate = createHtmlElement(
          "p",
          null,
          ["todo-item__date"],
          null,
          null,
          todo.date,
          todoInfoContainer,
        );

        if (todo.important) {
          const todoImportant = createHtmlElement(
            "i",
            null,
            ["fas", "fa-star"],
            null,
            null,
            null,
            todoInfoContainer,
          );
        } else {
          const todoImportant = createHtmlElement(
            "i",
            null,
            ["far", "fa-star"],
            "data-action",
            "important",
            todo.important,
            todoInfoContainer,
          );
        }
        const todoBtnContainer = createHtmlElement(
          "div",
          null,
          [
            "todo-item__btn-container",
            "|",
            "flex",
            "gap-sm",
            "align-items-center",
          ],
          null,
          null,
          null,
          todoInfoContainer,
        );

        const todoDetailsBtn = createHtmlElement(
          "i",
          null,
          ["btn--info", "btn--dark", "|", "fa", "fa-info-circle"],
          "data-action",
          "details",
          null,
          todoBtnContainer,
        );

        todoDetailsBtn.addEventListener("click", () =>
          console.log("todo details"),
        );

        const todoDeleteBtn = createHtmlElement(
          "i",
          null,
          ["btn--delete", "btn--dark", "|", "fa-solid", "fa-trash"],
          "data-action",
          "delete",
          null,
          todoBtnContainer,
        );

        todoDeleteBtn.addEventListener("click", () => todos.deleteTodo(index));
      });
    });

    // renderTodos();
  }

  // RENDER TODAY TODOs
  function renderToday() {
    clearMainContainer();

    mainContainer.setAttribute("data-index", "today");

    const todoHeaderContainer = createHtmlElement(
      "div",
      null,
      ["todo-header-container"],
      null,
      null,
      null,
      mainContainer,
    );

    const todoHeaderTitle = createHtmlElement(
      "h2",
      null,
      [
        "todo-header__title",
        "|",
        "title--sm",
        "flex",
        "justify-content-between",
      ],
      null,
      null,
      "Today",
      todoHeaderContainer,
    );

    const todoList = createHtmlElement(
      "ul",
      "todoList",
      ["todo-list"],
      null,
      null,
      null,
      mainContainer,
    );

    const today = Date.parse(format(new Date(), "yyyy-MM-dd"));

    projects.projectsArray.forEach((project) => {
      project.todos.forEach((todo, index) => {
        const date = Date.parse(todo.date);
        if (isEqual(date, today)) {
          const todoItems = createHtmlElement(
            "li",
            null,
            ["todo-item"],
            "data-index",
            index,
            null,
            todoList,
          );

          const todoTitleContainer = createHtmlElement(
            "div",
            null,
            ["flex", "gap-sm", "align-items-center"],
            null,
            null,
            null,
            todoItems,
          );

          const todoTitle = createHtmlElement(
            "h3",
            null,
            ["todo-item__title"],
            "data-action",
            "check",
            todo.title,
            todoTitleContainer,
          );

          const todoInfoContainer = createHtmlElement(
            "div",
            null,
            ["flex", "gap-sm", "align-items-center"],
            null,
            null,
            null,
            todoItems,
          );

          const todoDate = createHtmlElement(
            "p",
            null,
            ["todo-item__date"],
            null,
            null,
            todo.date,
            todoInfoContainer,
          );

          const todoPriority = createHtmlElement(
            "p",
            null,
            ["todo-item__priority"],
            null,
            null,
            todo.priority,
            todoInfoContainer,
          );

          const todoBtnContainer = createHtmlElement(
            "div",
            null,
            [
              "todo-item__btn-container",
              "|",
              "flex",
              "gap-sm",
              "align-items-center",
            ],
            null,
            null,
            null,
            todoInfoContainer,
          );

          const todoDetailsBtn = createHtmlElement(
            "i",
            null,
            ["btn--info", "btn--dark", "|", "fa", "fa-info-circle"],
            "data-action",
            "details",
            null,
            todoBtnContainer,
          );

          todoDetailsBtn.addEventListener("click", () =>
            console.log("todo details"),
          );
        } else {
        }
      });
    });
    checkNoTodo();
  }

  // RENDER IMPORTANT TODOs
  function renderImportant() {
    clearMainContainer();

    mainContainer.setAttribute("data-index", "important");

    const todoHeaderContainer = createHtmlElement(
      "div",
      null,
      ["todo-header-container"],
      null,
      null,
      null,
      mainContainer,
    );

    const todoHeaderTitle = createHtmlElement(
      "h2",
      null,
      [
        "todo-header__title",
        "|",
        "title--sm",
        "flex",
        "justify-content-between",
      ],
      null,
      null,
      "Important",
      todoHeaderContainer,
    );

    const todoList = createHtmlElement(
      "ul",
      "todoList",
      ["todo-list"],
      null,
      null,
      null,
      mainContainer,
    );

    projects.projectsArray.forEach((project) => {
      project.todos.forEach((todo, index) => {
        if (todo.important) {
          const todoItems = createHtmlElement(
            "li",
            null,
            ["todo-item"],
            "data-index",
            index,
            null,
            todoList,
          );

          const todoTitleContainer = createHtmlElement(
            "div",
            null,
            ["flex", "gap-sm", "align-items-center"],
            null,
            null,
            null,
            todoItems,
          );

          const todoTitle = createHtmlElement(
            "h3",
            null,
            ["todo-item__title"],
            "data-action",
            "check",
            todo.title,
            todoTitleContainer,
          );

          const todoInfoContainer = createHtmlElement(
            "div",
            null,
            ["flex", "gap-sm", "align-items-center"],
            null,
            null,
            null,
            todoItems,
          );

          const todoDate = createHtmlElement(
            "p",
            null,
            ["todo-item__date"],
            null,
            null,
            todo.date,
            todoInfoContainer,
          );

          const todoPriority = createHtmlElement(
            "p",
            null,
            ["todo-item__priority"],
            null,
            null,
            todo.priority,
            todoInfoContainer,
          );

          const todoBtnContainer = createHtmlElement(
            "div",
            null,
            [
              "todo-item__btn-container",
              "|",
              "flex",
              "gap-sm",
              "align-items-center",
            ],
            null,
            null,
            null,
            todoInfoContainer,
          );

          const todoDetailsBtn = createHtmlElement(
            "i",
            null,
            ["btn--info", "btn--dark", "|", "fa", "fa-info-circle"],
            "data-action",
            "details",
            null,
            todoBtnContainer,
          );

          todoDetailsBtn.addEventListener("click", () =>
            console.log("todo details"),
          );
        } else {
        }
      });
    });
    checkNoTodo();
  }

  // RENDER CURRENT PROJECT TO PAGE
  function renderCurrentProject(project, index) {
    clearMainContainer();

    mainContainer.setAttribute("data-index", index);

    const mainHeaderContainer = createHtmlElement(
      "div",
      null,
      ["todo-header-container"],
      null,
      null,
      null,
      mainContainer,
    );

    const mainHeaderTitle = createHtmlElement(
      "h2",
      null,
      [
        "todo-header__title",
        "|",
        "title--sm",
        "flex",
        "justify-content-between",
      ],
      null,
      null,
      project.title,
      mainHeaderContainer,
    );

    const mainHeaderBtns = createHtmlElement(
      "div",
      null,
      ["todo-header__btn-container", "flex", "gap-sm", "align-items-center"],
      null,
      null,
      null,
      mainHeaderContainer,
    );

    // Create add todo button
    const addTodoBtn = createHtmlElement(
      "i",
      "addTodoBtn",
      ["btn--add", "btn--light", "|", "fa-solid", "fa-circle-plus"],
      "data-action",
      "edit",
      null,
      mainHeaderBtns,
    );

    addTodoBtn.addEventListener("click", () => todoModal.showModal());

    const todoList = createHtmlElement(
      "ul",
      "todoList",
      ["todo-list"],
      null,
      null,
      null,
      mainContainer,
    );

    renderTodos();
  }

  function renderTodos() {
    const currentProject = document
      .querySelector(".main-container")
      .getAttribute("data-index");
    const todoList = document.querySelector(".todo-list");

    clearTodoList();

    projects.projectsArray[currentProject].todos.forEach((todo, index) => {
      const todoItems = createHtmlElement(
        "li",
        null,
        ["todo-item"],
        "data-index",
        index,
        null,
        todoList,
      );

      const todoTitleContainer = createHtmlElement(
        "div",
        null,
        ["flex", "gap-sm", "align-items-center"],
        null,
        null,
        null,
        todoItems,
      );

      const todoTitle = createHtmlElement(
        "h3",
        null,
        ["todo-item__title"],
        "data-action",
        "check",
        todo.title,
        todoTitleContainer,
      );

      const todoInfoContainer = createHtmlElement(
        "div",
        null,
        ["flex", "gap-sm", "align-items-center"],
        null,
        null,
        null,
        todoItems,
      );

      const todoDate = createHtmlElement(
        "p",
        null,
        ["todo-item__date"],
        null,
        null,
        todo.date,
        todoInfoContainer,
      );

      if (todo.important) {
        const todoImportant = createHtmlElement(
          "i",
          null,
          ["fa-solid", "fa-star"],
          null,
          null,
          null,
          todoInfoContainer,
        );
      } else {
        todoImportant = createHtmlElement(
          "i",
          "todoImportant",
          ["fa-regular", "fa-star"],
          null,
          null,
          null,
          todoInfoContainer,
        );
      }

      const todoBtnContainer = createHtmlElement(
        "div",
        null,
        [
          "todo-item__btn-container",
          "|",
          "flex",
          "gap-sm",
          "align-items-center",
        ],
        null,
        null,
        null,
        todoInfoContainer,
      );

      const todoEditBtn = createHtmlElement(
        "i",
        null,
        ["btn--edit", "btn--dark", "|", "fas", "fa-edit"],
        "data-action",
        "edit",
        null,
        todoBtnContainer,
      );

      todoEditBtn.addEventListener("click", () => todos.editTodo());

      const todoDeleteBtn = createHtmlElement(
        "i",
        null,
        ["btn--delete", "btn--dark", "|", "fa-solid", "fa-trash"],
        "data-action",
        "delete",
        null,
        todoBtnContainer,
      );

      todoDeleteBtn.addEventListener("click", () => todos.deleteTodo(index));
    });
  }

  function checkNoTodo() {
    const todoList = document.querySelector("#todoList");
    if (todoList.textContent === "") {
      displayNoTodo();
    } else {
    }
  }

  function displayNoTodo() {
    const displayMessage = createHtmlElement(
      "p",
      null,
      ["display-message"],
      null,
      null,
      "Nice! Nothing Todo Today!",
      mainContainer,
    );
  }

  // SET ACTIVE STATE ON SIDEBAR NAV ITEMS
  function setActive(projectIndex) {
    const allNavItems = document.querySelectorAll(
      ".sidebar-nav-link",
      ".sidebar-project-link",
    );

    allNavItems.forEach((item) => {
      addEventListener("click", (e) => {
        const { target } = e;

        item.classList.remove("sidebar-nav-link-active");
        if (target.id === "navInbox") {
          navInbox.classList.add("sidebar-nav-link-active");
        }
        if (target.id === "navToday") {
          navToday.classList.add("sidebar-nav-link-active");
        }
        if (target.id === "navUpcoming") {
          navUpcoming.classList.add("sidebar-nav-link-active");
        }
        if (target.id === "navImportant") {
          navImportant.classList.add("sidebar-nav-link-active");
        }
      });
    });
  }

  return {
    renderProjects,
    renderInbox,
    renderToday,
    renderImportant,
    renderCurrentProject,
    renderTodos,
    setActive,
  };
})();

export default dom;
