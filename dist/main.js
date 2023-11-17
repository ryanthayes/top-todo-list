/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\n\n\n\nconst dom = (() => {\n\n    const mainContainer = document.querySelector('#mainContainer');\n    const sidebarProjects = document.querySelector('#sidebarProjects');\n    const todoModal = document.querySelector('#todoModal');\n    \n    function clearMainContainer() {\n        mainContainer.innerText = '';\n    };\n    function clearTodoContainer() {\n        todoContainer.innerText = '';\n    };\n\n    // RENDER PROJECTS IN SIDEBAR\n    function renderSidebar() {\n    \n        sidebarProjects.innerText = '';\n\n        _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectsArray.forEach((project, index) => {\n\n            // Create list item for each project\n            const projectLinks = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('li', null, ['sidebar-project-link', '|', 'no-bullets', 'flex', 'gap-sm', 'align-items-center'], 'data-index', index, null, sidebarProjects);\n\n            const projectTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('p', null, ['header-project-title'], null, null, project.title, projectLinks);\n\n            // EVENT: Render project to page\n            projectLinks.addEventListener('click', () => renderCurrentProject(project, index));\n        })\n    }; \n\n    // RENDER INBOX TODOs\n    function renderInbox() {\n        \n        clearMainContainer();\n        \n        mainContainer.setAttribute('data-index', 'inbox');\n\n        const todoHeaderContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-header-container'], null, null, null, mainContainer);\n\n        const todoHeaderTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, 'Inbox', todoHeaderContainer);\n\n        const todoHeaderBtns = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-header__btn-container', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoHeaderContainer);\n\n        // Create add todo button\n        const addTodoBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', 'addTodoBtn', ['btn--add', 'btn--light', '|', 'fa-solid', 'fa-circle-plus'], 'data-action', 'edit', null, todoHeaderBtns);\n\n        addTodoBtn.addEventListener('click', () => todoModal.showModal());\n\n        renderTodos();\n    };\n\n    // RENDER TODAY TODOs\n    function renderToday() {\n        \n        clearMainContainer();\n        \n        mainContainer.setAttribute('data-index', 'today');\n\n        const todoHeaderContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-header-container'], null, null, null, mainContainer);\n\n        const todoHeaderTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, 'Today', todoHeaderContainer);\n\n        const todoHeaderBtns = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-header__btn-container', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoHeaderContainer);\n\n        // Create add todo button\n        const addTodoBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', 'addTodoBtn', ['btn--add', 'btn--light', '|', 'fa-solid', 'fa-circle-plus'], 'data-action', 'edit', null, todoHeaderBtns);\n\n        addTodoBtn.addEventListener('click', () => todoModal.showModal());\n\n        renderTodos();\n    };\n\n    // RENDER THIS WEEK TODOs\n    function renderUpcoming() {\n        \n        clearMainContainer();\n        \n        mainContainer.setAttribute('data-index', 'upcoming');\n\n        const todoHeaderContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-header-container'], null, null, null, mainContainer);\n\n        const todoHeaderTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, 'Upcoming', todoHeaderContainer);\n\n        const todoHeaderBtns = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-header__btn-container', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoHeaderContainer);\n\n        // Create add todo button\n        const addTodoBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', 'addTodoBtn', ['btn--add', 'btn--light', '|', 'fa-solid', 'fa-circle-plus'], 'data-action', 'edit', null, todoHeaderBtns);\n\n        addTodoBtn.addEventListener('click', () => todoModal.showModal());\n\n        renderTodos();\n    };\n\n    // RENDER IMPORTANT TODOs\n    function renderImportant() {\n        \n        clearMainContainer();\n        \n        mainContainer.setAttribute('data-index', 'important');\n\n        const todoHeaderContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-header-container'], null, null, null, mainContainer);\n\n        const todoHeaderTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, 'Important', todoHeaderContainer);\n\n        const todoHeaderBtns = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-header__btn-container', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoHeaderContainer);\n\n        // Create add todo button\n        const addTodoBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', 'addTodoBtn', ['btn--add', 'btn--light', '|', 'fa-solid', 'fa-circle-plus'], 'data-action', 'edit', null, todoHeaderBtns);\n\n        addTodoBtn.addEventListener('click', () => todoModal.showModal());\n\n        renderTodos();\n    };\n\n    // RENDER CURRENT PROJECT TO PAGE\n    function renderCurrentProject(project, index) {\n        \n        clearMainContainer()\n        \n        mainContainer.setAttribute('data-index', index);\n        \n        const mainHeaderContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-header-container'], null, null, null, mainContainer);\n\n        const mainHeaderTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, project.title, mainHeaderContainer);\n\n        const mainHeaderBtns = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-header__btn-container', 'flex', 'gap-sm', 'align-items-center'], null, null, null, mainHeaderContainer);\n\n        // Create add todo button\n        const addTodoBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', 'addTodoBtn', ['btn--add', 'btn--light', '|', 'fa-solid', 'fa-circle-plus'], 'data-action', 'edit', null, mainHeaderBtns);\n\n        addTodoBtn.addEventListener('click', () => todoModal.showModal());\n\n        // Create edit button for project\n        const projEditBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['btn--edit', 'btn--light', '|', 'fas', 'fa-edit'], 'data-action', 'edit', null, mainHeaderBtns);\n\n        projEditBtn.addEventListener('click', () => _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].editProject());\n\n        // Create delete button for project\n        const projDeleteBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['btn--delete', 'btn--light', '|', 'fa-solid', 'fa-trash'], 'data-action', 'delete', null, mainHeaderBtns);\n\n        projDeleteBtn.addEventListener('click', () => _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteProject());\n\n        const todoContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', 'todoContainer', ['todo-container'], null, null, null, mainContainer);\n\n        renderTodos();\n    };\n\n    function renderTodos() {\n        \n        const currentProject = document.querySelector('.main-container').getAttribute('data-index');\n        const todoContainer = document.querySelector('.todo-container');\n\n        todoContainer.textContent = '';\n\n        _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectsArray[currentProject].todos.forEach((todos, index) => {\n\n            const todoItems = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('li', null, ['todo-item'], 'data-index', index, null, todoContainer);\n\n            const todoTitleContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems)\n\n            const todoTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('h3', null, ['todo-item__title'], 'data-action', 'check', todos.title, todoTitleContainer);\n\n            const todoInfoContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems);\n\n            const todoDate = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('p', null, ['todo-item__date'], null, null, todos.date, todoInfoContainer);\n\n            const todoPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('p', null, ['todo-item__priority'], null, null, todos.priority, todoInfoContainer);\n\n            const todoBtnContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-item__btn-container', '|', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoInfoContainer)\n\n            const todoDetailsBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['btn--info', 'btn--dark', '|', 'fa', 'fa-info-circle'], 'data-action', 'details', null, todoBtnContainer);\n\n            todoDetailsBtn.addEventListener('click', () => console.log('todo details'));\n\n            const todoEditBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['btn--edit', 'btn--dark', '|', 'fas', 'fa-edit'], 'data-action', 'edit', null, todoBtnContainer);\n            \n            todoEditBtn.addEventListener('click', () => todos.deleteTodos());\n\n            const todoDeleteBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['btn--delete', 'btn--dark', '|', 'fa-solid', 'fa-trash'], 'data-action', 'delete', null, todoBtnContainer);\n            \n            todoDeleteBtn.addEventListener('click', () => console.log('delete todo'));\n        });\n\n    };\n\n    // SET ACTIVE STATE ON SIDEBAR NAV ITEMS\n    function setActive(projectIndex) {\n        \n        const allNavItems = document.querySelectorAll('.sidebar-nav-link', '.sidebar-project-link');  \n\n        allNavItems.forEach((item) => {\n            addEventListener('click', (e) => {\n                const target = e.target;\n\n                item.classList.remove('sidebar-nav-link-active');\n                if (target.id === 'navInbox') {\n                    navInbox.classList.add('sidebar-nav-link-active');\n                }\n                if (target.id === 'navToday') {\n                    navToday.classList.add('sidebar-nav-link-active');\n                } \n                if (target.id === 'navUpcoming') {\n                    navUpcoming.classList.add('sidebar-nav-link-active');\n                } \n                if (target.id === 'navImportant') {\n                    navImportant.classList.add('sidebar-nav-link-active');\n                }      \n            })\n        });\n    };\n\n    return {\n        renderSidebar,\n        renderInbox,\n        renderToday,\n        renderUpcoming,\n        renderImportant,\n        renderCurrentProject,\n        renderTodos,\n        setActive\n    }\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://top-todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)\n/* harmony export */ });\nconst createHtmlElement = (type, id, classArray, attKey, attVal, content, parent) => {\n    const element = document.createElement(type);\n    if (id) element.id = id;\n    if (classArray)\n      classArray.forEach((myClass) => element.classList.add(myClass));\n    if (attKey) element.setAttribute(attKey, attVal);\n    if (content) element.innerText = content;\n    if (parent) parent.append(element);\n    \n    return element;\n  };\n\n\n//# sourceURL=webpack://top-todo-list/./src/elements.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n\n\n\n\nconst handlers = (() => {\n\n    function listenForClicks() {\n\n        // EVENT: Open New Project Modal\n        const openProjectModal = document.querySelector('#openProjectModal');\n        const addProjectBtn = document.querySelector('#addProjectBtn');\n        const closeProjectModal = document.querySelector('#closeProjectModal');\n        const projectModal = document.querySelector('#projectModal');\n\n        openProjectModal.addEventListener('click', () => projectModal.showModal());\n\n        // EVENT: On form submit, create project\n        addProjectBtn.addEventListener('click', (e) =>{\n            (e).preventDefault();\n            _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].newProject();\n            addProjectForm.reset();\n            projectModal.close();\n        });\n\n        // EVENT: Open New todo Modal\n        const todoModal = document.querySelector('#todoModal');\n        const closeTodoModal = document.querySelector('#closeTodoModal');\n\n        // EVENT: On form submit, create todo\n        const addTodoForm = document.querySelector('#addTodoForm');\n        addTodoForm.addEventListener('submit', (e) =>{\n            const projectIndex = document.querySelector('.main-container').getAttribute('data-index');\n            const title = document.querySelector('#todoTitle').value;\n            const description = document.querySelector('#todoDescription').value;\n            const date = document.querySelector('#todoDate').value;\n            const priority = document.querySelector('#todoPriority').value;\n            \n            (e).preventDefault();\n            _todos__WEBPACK_IMPORTED_MODULE_2__[\"default\"].newTodo(projectIndex, title, description, date, priority);\n            addTodoForm.reset();\n            todoModal.close();\n        }); \n\n        // EVENT: \n\n        const navLinks = document.querySelectorAll('.sidebar-nav-link');\n        navLinks.forEach((link) => {\n            link.addEventListener('click', () => {\n\n                switch (link.id) {\n                    case 'navInbox':\n                        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderInbox();\n                        break\n                    case 'navToday':\n                        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderToday();\n                        break\n                    case 'navUpcoming':\n                        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderUpcoming();\n                        break\n                    case 'navImportant':\n                        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderImportant();\n                        break\n                }\n            })\n        })\n    };\n\n    return { listenForClicks };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\n\n//# sourceURL=webpack://top-todo-list/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\n// ON PAGE LOAD - SHOW ALL TODOS\n// dom.renderInbox();\n\n// ON PAGE LOAD - SHOW ALL PROJECTS\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderSidebar();\n\n// SHOW ACTIVE PAGE IN SIDEBAR\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setActive();\n\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listenForClicks();\n\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst projects = (() => {\n\n    let projectsArray = [];\n\n    // GET PROJECTS FROM LOCAL STORAGE\n    if (localStorage.getItem('projects') === null) {\n        projectsArray = [\n            {\n                title: 'Client Presentation',\n                todos: [\n                    {\n                        title: 'Project Proposal',\n                        description: 'Prepare project proposal for client',\n                        date: '2023-11-15',\n                        important: true,\n                        completed: false\n                    },\n                    {\n                        title: 'Presentation Draft',\n                        description: 'Create draft of client presentation to present new marketing campaign proposal',\n                        date: '2023-11-21',\n                        important: false,\n                        completed: false\n                    }\n                ]\n            },\n            {\n                title: 'Shareholders Meeting',\n                todos: [\n                    {\n                        title: 'Quarterly Reports',\n                        description: 'Prepare quarterly reports for stakeholders',\n                        date: '2023-11-18',\n                        important: false,\n                        completed: false\n                    },\n                    {\n                        title: 'Projected Future Earnings',\n                        description: 'Presentation of projected revenues and earnings for upcoming quarter.',\n                        date: '2023-11-22',\n                        important: false,\n                        completed: false\n                    }\n                ]\n            }\n        ];\n    } else {\n        const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));\n        projectsArray = projectsFromStorage;\n    }\n    \n    class Project {\n        constructor(title) {\n            this.title = title;\n            this.todos = [];\n        }\n    };\n    \n    function addToStorage() { \n        localStorage.setItem('projects', JSON.stringify(projects));\n    };\n    \n    function newProject() {\n      \n        // Get form input values\n        const title = document.querySelector('#projectTitle').value;\n\n        const project = new Project(title);\n    \n        // Add project to array\n        projectsArray.push(project);\n\n        // Add project to local storage\n        addToStorage();\n\n        //Render Projects to DOM\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderSidebar();\n    };\n\n    // DELETE PROJECT\n    function deleteProject(index) {\n        console.log('delete project');\n        \n        // projectsArray.splice(index, 1);\n        // addToStorage();\n        // dom.renderSidebar();\n    };\n\n    // EDIT PROJECT\n    function editProject() {\n        console.log('edit project');\n    }\n\n    function activeProject(){\n        let activeProjectArray = projectsArray.filter(project => project.active);\n        return activeProjectArray[0];\n    };\n    \n    return {\n        projectsArray,\n        newProject, \n        deleteProject,\n        editProject,\n        activeProject\n    };\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://top-todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\nconst todos =(() => {\n    \n    class Todo {\n        constructor(title, description, date, priority) {\n            this.title = title;\n            this.description = description;\n            this.date = date;\n            this.priority = priority;\n            this.complete = false;\n        }\n    };\n    \n    function addToStorage() { \n        localStorage.setItem('projects', JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectsArray));\n    };\n    \n    // ADD new todos to todo list\n    function newTodo(projectIndex, title, description, date, priority) {\n        \n        // Pass values to constructor\n        const todo = new Todo(title, description, date, priority);\n    \n        // Add todo to array\n        _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectsArray[projectIndex].todos.push(todo);\n    \n        // Add todo to local storage\n        addToStorage();\n\n        //Render todos to DOM\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderTodos();\n    };\n\n    // EDIT TODO\n    function editTodo() {\n        console.log('edit project');\n    }\n    \n    // DELETE TODO\n    function deleteTodo() {\n        console.log('delete todo');\n    };\n    \n    // function deleteTodo(index) {\n    //     projects.projectsArray[index].todos.splice(index, 1);\n    //     addToStorage();\n    //     dom.renderTodos();\n    // };\n\n    return {\n        newTodo,\n        editTodo,\n        deleteTodo\n    };\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todos);\n\n//# sourceURL=webpack://top-todo-list/./src/todos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;