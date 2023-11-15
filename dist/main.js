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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\n\n\nconst dom = (() => {\n\n    const headerProjects = document.querySelector('#headerProjects');\n    const todoHeader = document.querySelector('#todoHeader');\n    const toDoList = document.querySelector('#toDoList');\n    \n    function clearTodoList() {\n        toDoList.innerText = '';\n    }\n    function clearTodoHeader() {\n        todoHeader.innerText = '';\n    }\n\n    // RENDER PROJECTS IN SIDEBAR\n    function renderProjects() {\n        \n        headerProjects.innerText = '';\n\n        _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectsArray.forEach((project, index) => {\n\n            // Create list item for each project\n            const projectItems = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('li', null, ['header-project-items', '|', 'no-bullets', 'flex', 'gap-sm', 'align-items-center'], 'data-index', index, null, headerProjects);\n\n            const projectTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('p', null, ['header-project-title'], null, null, project.title, projectItems);\n\n            projectItems.addEventListener('click', () => {\n                renderProjectsPage(project, index);\n                console.log('click');\n            })\n\n        });\n    };   \n\n    // RENDER PROJECTS PAGE\n    function renderProjectsPage(project, index) {\n        \n        clearTodoHeader()\n        clearTodoList();\n\n        const todoHeaderTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('h2', null, ['todo-header__title', '|', 'title--sm', 'flex', 'justify-content-between'], null, null, project.title, todoHeader);\n\n        const projBtnContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoHeader);\n\n        // Create edit icon\n        const projEditBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['btn--edit', '|', 'fas', 'fa-edit'], 'data-action', 'edit', null, projBtnContainer);\n\n        // Create delete icon\n        const projDeleteBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['btn--delete', '|', 'fa-solid', 'fa-trash'], 'data-action', 'delete', null, projBtnContainer);\n\n        projDeleteBtn.addEventListener('click', () => {\n            _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteProject();\n        })\n\n        renderTodos();\n    };\n\n    \n    // RENDER ALL PROJECTS ON PAGE\n        \n    function renderAllProjects() {\n        _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectsArray.forEach((project) => {\n            project.todos.forEach((todos, index) => {\n\n                const todoItems = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('li', null, ['todo-item'], 'data-index', index, null, toDoList);\n                \n                const todoTitleContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems)\n\n                const todoTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('h3', null, ['todo-item__title'], 'data-action', 'check', todos.title, todoTitleContainer);\n\n                const todoInfoContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['flex', 'gap-sm', 'align-items-center'], null, null, null, todoItems);\n\n                const todoDate = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('p', null, ['todo-item__date'], null, null, todos.date, todoInfoContainer);\n\n                const todoPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('p', null, ['todo-item__priority'], null, null, todos.priority, todoInfoContainer);\n\n                const todoBtnContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['todo-item__btn-container', '|', 'flex', 'gap-sm', 'align-items-center'], null, null, null, todoInfoContainer)\n\n                const todoEditBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['fas', 'fa-edit'], 'data-action', 'edit', null, todoBtnContainer);\n\n                const todoDeleteBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['fa-solid', 'fa-trash'], 'data-action', 'delete', null, todoBtnContainer);\n                todoDeleteBtn.addEventListener('click', () => {\n                    deleteTodo();\n                })\n\n                const todoDetailsBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['fa', 'fa-info-circle'], 'data-action', 'details', null, todoBtnContainer);\n            });\n        })       \n    };\n    \n\n    // SET ACTIVE STATE ON SIDEBAR NAV ITEMS\n    function setActive() {\n        \n        const allNavItems = document.querySelectorAll('.header-nav-items');  \n        const allProjectItems = document.querySelectorAll('.project-items'); \n\n        allNavItems.forEach((item) => {\n            addEventListener('click', (e) => {\n                const target = e.target;\n\n                item.classList.remove('header-nav-items-active');\n                if (target.id === 'navInbox') {\n                    navInbox.classList.add('header-nav-items-active');\n                }\n                if (target.id === 'navToday') {\n                    navToday.classList.add('header-nav-items-active');\n                } \n                if (target.id === 'navWeek') {\n                    navWeek.classList.add('header-nav-items-active');\n                } \n                if (target.id === 'navImportant') {\n                    navImportant.classList.add('header-nav-items-active');\n                }      \n            })\n        });\n    };\n\n    return {\n        renderProjects,\n        renderAllProjects,\n        setActive\n    }\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://top-todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)\n/* harmony export */ });\nconst createHtmlElement = (type, id, classArray, attKey, attVal, content, parent) => {\n    const element = document.createElement(type);\n    if (id) element.id = id;\n    if (classArray)\n      classArray.forEach((myClass) => element.classList.add(myClass));\n    if (attKey) element.setAttribute(attKey, attVal);\n    if (content) element.innerText = content;\n    if (parent) parent.append(element);\n    \n    return element;\n  };\n\n//# sourceURL=webpack://top-todo-list/./src/elements.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n\n\n\nconst handlers = (() => {\n\n    function listenForClicks() {\n\n        // EVENT: Open New Project Modal\n\n        const openProjectModal = document.querySelector('#openProjectModal');\n        const addProjectBtn = document.querySelector('#addProjectBtn');\n        const closeProjectModal = document.querySelector('#closeProjectModal');\n        const projectModal = document.querySelector('#projectModal');\n\n        openProjectModal.addEventListener('click', () => {\n            projectModal.showModal();\n        });\n\n        // EVENT: On form submit, create todo\n        addProjectBtn.addEventListener('click', (e) =>{\n            (e).preventDefault();\n            _projects__WEBPACK_IMPORTED_MODULE_0__[\"default\"].newProject();\n            addProjectForm.reset();\n            projectModal.close();\n\n        });\n\n        // // EVENT: Open New todo Modal\n        // const openTodoModal = document.querySelector('#openTodoModal');\n        // const closeTodoModal = document.querySelector('#closeTodoModal');\n        // const todosModal = document.querySelector('#todosModal');\n        \n        // openTodoModal.addEventListener('click', () => {\n        //     todosModal.showModal();\n        // })\n\n        // closeTodoModal.addEventListener('click', () => {\n        //     todosModal.close();\n        // })\n\n        // // EVENT: On form submit, create todo\n        // const newTodoForm = document.querySelector('#newTodoForm');\n        // newTodoForm.addEventListener('submit', (e) =>{\n        //     (e).preventDefault();\n\n        //     todos.newTodo();\n        // });\n    };\n\n    return { listenForClicks };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\n\n//# sourceURL=webpack://top-todo-list/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\n// ON PAGE LOAD - SHOW ALL TODOS\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderAllProjects();\n\n// ON PAGE LOAD - SHOW ALL PROJECTS\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderProjects();\n// dom.renderToDos();\n\n// SHOW ACTIVE PAGE IN SIDEBAR\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setActive();\n\n_handlers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listenForClicks();\n\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\nconst projects = (() => {\n\n    let projectsArray = [];\n\n    // GET PROJECTS FROM LOCAL STORAGE\n    if (localStorage.getItem('projects') === null) {\n        projectsArray = [\n            {\n                title: 'Client Presentation',\n                todos: [\n                    {\n                        title: 'Project Proposal',\n                        description: 'Prepare project proposal for client',\n                        date: '2023-11-15',\n                        priority: 'Medium',\n                        projectIndex: 0,\n                        todoIndex: 0,\n                        completed: false\n                    },\n                    {\n                        title: 'Presentation Draft',\n                        description: 'Create draft of client presentation to present new marketing campaign proposal',\n                        date: '2023-11-21',\n                        priority: 'High',\n                        projectIndex: 0,\n                        todoIndex: 1,\n                        completed: false\n                    }\n                ]\n            },\n            {\n                title: 'Shareholders Meeting',\n                todos: [\n                    {\n                        title: 'Quarterly Reports',\n                        description: 'Prepare quarterly reports for stakeholders',\n                        date: '2023-11-18',\n                        priority: 'Medium',\n                        projectIndex: 1,\n                        todoIndex: 0,\n                        completed: false\n                    },\n                    {\n                        title: 'Projected Future Earnings',\n                        description: 'Presentation of projected revenues and earnings for upcoming quarter.',\n                        date: '2023-11-22',\n                        priority: 'Low',\n                        projectIndex: 1,\n                        todoIndex: 1,\n                        completed: false\n                    }\n                ]\n            }\n        ];\n    } else {\n        const projectsFromStorage = JSON.parse(localStorage.getItem('projects'));\n        projectsArray = projectsFromStorage;\n    }\n    \n    class Project {\n        constructor(title) {\n            this.title = title;\n            this.todos = [];\n        }\n    };\n    \n    function addToStorage() { \n        localStorage.setItem(\"project\", JSON.stringify(projects));\n    };\n    \n    function newProject() {\n      \n        // Get form input values\n        const title = document.querySelector('#projectTitle').value;\n\n        const project = new Project(title);\n    \n        // Add project to array\n        projectsArray.push(project);\n\n        // Add project to local storage\n        addToStorage();\n\n        //Render Projects to DOM\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderProjects();\n    };\n\n    // DELETE PROJECTS FROM ARRAY\n    function deleteProject(index) {\n        projectsArray.splice(index, 1);\n        // addToStorage();\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderProjects();\n    }\n\n    function activeProject(){\n        let activeProjectArray = projectsArray.filter(project => project.active);\n        return activeProjectArray[0];\n    }\n    \n\n    return {\n        projectsArray,\n        newProject, \n        deleteProject\n    };\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://top-todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\nconst todos =(() => {\n\n    let todosArray = [];\n\n    if (localStorage.getItem('todo') === null) {\n        todosArray = [\n            {\n                title: 'Project Proposal',\n                description: 'Prepare project proposal for client',\n                date: '2023-11-15',\n                priority: 'Medium',\n                projectIndex: 0,\n                todoIndex: 0,\n                completed: false\n            },\n            {\n                title: 'Presentation Draft',\n                description: 'Create draft of client presentation to present new marketing campaign proposal',\n                date: '2023-11-21',\n                priority: 'High',\n                projectIndex: 0,\n                todoIndex: 0,\n                completed: false\n            }\n        ]\n    } else {\n        const todosFromStorage = JSON.parse(localStorage.getItem('todo'));\n        todosArray = todosFromStorage;\n    };\n    \n    class Todo {\n        constructor(title, description, date, priority) {\n            this.title = title;\n            this.description = description;\n            this.date = date;\n            this.priority = priority;\n            this.complete = false;\n        }\n    };\n    \n    function addToStorage() { \n        localStorage.setItem('projects', JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectsArray));\n    };\n    \n    // ADD new todos to todo list\n    function newTodo() {\n  \n        // Get form input values\n        const title = document.querySelector('#todoTitle').value;\n        const description = document.querySelector('#todoDescription').value;\n        const date = document.querySelector('#todoDate').value;\n        const priority = document.querySelector('#todoPriority').value;\n        \n        // Pass values to constructor\n        const todo = new Todo(title, description, date, priority);\n    \n        // Add todo to array\n        _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectsArray[projectIndex].push(todo);\n\n        console.log(_projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectsArray);\n    \n        // Add todo to local storage\n        addToStorage();\n\n        //Render todos to DOM\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderTodos();\n    };\n\n    // DELETE TODOS FROM ARRAY\n    function deleteTodo(index) {\n        todos.todosArray.splice(index, 1);\n        // addToStorage();\n        _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderTodos();\n    }\n\n    return { \n        todosArray,\n        newTodo, \n        deleteTodo\n    };\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todos);\n\n//# sourceURL=webpack://top-todo-list/./src/todos.js?");

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