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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\n\n\nconst dom = (() => {\n\n\n    const projectsContainer = document.querySelector('#projectsContainer');\n    const toDoList = document.querySelector('#toDoList');\n    \n    // Render Projects in sidebar\n    function renderProjects() {\n        \n        projectsContainer.innerText = '';\n\n        _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((project, index) => {\n\n            if (project.type === 'Work') {\n                const projectItems = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('li', null, ['project-items', '|', 'no-bullets', 'flex', 'gap-sm', 'align-items-center'], 'data-index', index, null, projectsContainer);\n\n                const projectType = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['fa-solid', 'fa-briefcase'], null, null, null, projectItems);\n            \n                const projectTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('p', null, ['project-title'], null, null, project.title, projectItems);\n            }\n            if (project.type === 'Personal') {\n                const projectItems = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('li', null, ['project-items', '|', 'no-bullets', 'flex', 'gap-sm', 'align-items-center'], 'data-index', index, null, projectsContainer);\n\n                const projectType = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['fa-solid', 'fa-martini-glass'], null, null, null, projectItems);\n            \n                const projectTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('p', null, ['project-title'], null, null, project.title, projectItems);\n            } \n\n\n        })\n    };\n    \n    // Render Tasks on main page\n    function renderTasks() {\n    \n        toDoList.innerText = '';\n\n        const taskHeader = document.createElement('h2');\n        taskHeader.classList.add('title--sm', 'task-list__header');\n        taskHeader.innerText = 'All Tasks';\n        toDoList.append(taskHeader);\n\n        _tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((task, index) => {\n          \n            \n            const taskItems = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('li', null, ['task-item'], 'data-index', index, null, toDoList);\n    \n            const taskTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('h3', null, ['task-item__title'], 'data-action', 'check', task.title, taskItems);\n            \n            // const taskDescription = createHtmlElement('p', null, ['task-item__description'], 'data-action', 'description', task.description, taskItems);\n\n            // const taskProject = createHtmlElement('p', null, ['task-item__project'], null, null, task.project, taskItems);\n\n            const taskDate = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('p', null, ['task-item__date'], null, null, task.date, taskItems);\n\n            const taskDetailsBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['fa', 'fa-eye'], 'data-action', 'details', null, taskItems);\n\n            const taskPriority = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('p', null, ['task-item__priority'], null, null, task.priority, taskItems);\n            \n            const taskBtnContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('div', null, ['task-item__btn-container', '|', 'flex', 'gap-sm', 'align-items-center'], null, null, null, taskItems)\n\n            const taskEditBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['fas', 'fa-edit'], 'data-action', 'edit', null, taskBtnContainer);\n\n            const taskDeleteBtn = (0,_elements__WEBPACK_IMPORTED_MODULE_2__.createHtmlElement)('i', null, ['fa-solid', 'fa-trash'], 'data-action', 'delete', null, taskBtnContainer);\n   \n            // CLICK EVENT LISTENER FOR ALL TASKS\n            toDoList.addEventListener('click', (e) => {\n                const target = e.target;\n                const parentElement = target.parentNode;\n\n                if (parentElement.className !== 'task-item') { \n                    return;\n                }\n\n                const task = parentElement;\n                const taskIndex = task.dataset.index;\n                const action = target.dataset.action;\n\n                // action === 'check' && toggleTask(taskIndex);\n                // action === 'details' && toggleDetails(taskIndex);\n                // action === 'edit' && editTask(taskIndex);\n                // action === 'delete' && deleteTask(taskIndex);\n\n            })\n    \n        });\n    };\n\n    function setActive() {\n        \n        const allNavItems = document.querySelectorAll('.nav-items');  \n        const allProjectItems = document.querySelectorAll('.project-items'); \n\n        allNavItems.forEach((item) => {\n            addEventListener('click', (e) => {\n                const target = e.target;\n\n                item.classList.remove('nav-items-active');\n                if (target.id === 'navInbox') {\n                    navInbox.classList.add('nav-items-active');\n                }\n                if (target.id === 'navToday') {\n                    navToday.classList.add('nav-items-active');\n                } \n                if (target.id === 'navWeek') {\n                    navWeek.classList.add('nav-items-active');\n                } \n                if (target.id === 'navImportant') {\n                    navImportant.classList.add('nav-items-active');\n                } \n                \n            })\n    \n        });\n    };\n\n        // // TOGGLE ON/OFF COMPLETED TASK\n        // function toggleTask(taskIndex) {\n        //     tasks = tasks.map((task, index) => {\n        //         return {\n        //             ...task,\n        //             checked: index === taskIndex ? !task.checked : task.checked\n        //         }\n        //     })\n    \n        //     renderTasks();\n        // };\n\n        // TOGGLE TASK DETAILS\n        // function toggleDetails(taskIndex) {\n        //     if ()\n        // }\n\n        // EDIT TASK\n        // function editTask(taskIndex) {\n        //     taskTitle.value = tasks[taskIndex].value;\n        // }\n\n    return {\n        renderTasks,\n        renderProjects,\n        setActive\n    }\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://top-todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)\n/* harmony export */ });\nconst createHtmlElement = (type, id, classArray, attKey, attVal, content, parent) => {\n    const element = document.createElement(type);\n    if (id) element.id = id;\n    if (classArray)\n      classArray.forEach((myClass) => element.classList.add(myClass));\n    if (attKey) element.setAttribute(attKey, attVal);\n    if (content) element.innerText = content;\n    if (parent) parent.append(element);\n    \n    return element;\n  }\n\n//# sourceURL=webpack://top-todo-list/./src/elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderTasks();\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderProjects();\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setActive();\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projects = [\n    {\n        title: 'Client Presentation',\n        type: 'Work'\n    },\n    {\n        title: 'Blind Date',\n        type: 'Personal'\n    }\n];\n\n\nclass Project {\n    constructor(title) {\n        this.title = title;\n    }\n};\n\nconst addToStorage = () => { \n    localStorage.setItem(\"project\", JSON.stringify(projects));\n};\n\nconst newProject = () => {\n\n    // Get form input values\n    const title = document.querySelector('#projectTitle').value;\n\n    const project = new Project(title);\n\n    // Add task to array\n    projects.push(project)\n\n    // Add task to local storage\n    addToStorage();\n\n    return newProject;\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://top-todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst tasks = [\n    // {\n    //     title: 'Display Array',\n    //     description: 'Display array of tasks on DOM',\n    //     date: '2023-11-08',\n    //     priority: 'High',\n    //     project: 'default'\n    // },\n    // {\n    //     title: 'Display Local Storage',\n    //     description: 'Display local storage of tasks on DOM',\n    //     date: '2023-11-08',\n    //     priority: 'High',\n    //     project: 'default'\n    // }\n];\n\nclass Task {\n    constructor(title, description, date, priority, project) {\n        this.title = title;\n        this.description = description;\n        this.date = date;\n        this.priority = priority;\n        this.project = project;\n    }\n};\n\nconst addToStorage = () => { \n    localStorage.setItem(\"task\", JSON.stringify(tasks));\n};\n\nconst newTask = () => {\n\n    const btnAdd = document.querySelector('#btnAdd');\n    btnAdd.addEventListener('click', () => {\n        console.log('click');\n    })\n\n    // Get form input values\n    const title = document.querySelector('#taskTitle').value;\n    const description = document.querySelector('#taskDescription').value;\n    const date = document.querySelector('#taskDate').value;\n    const priority = document.querySelector('#taskPriority').value;\n    const project = document.querySelector('#taskProject').value;\n\n    // function formatDate() {\n    //     if (date.length > 8) {\n    //         const newDate = format(parseISO(date), 'MMM do');\n    //         return newDate;\n    //     } else return date;\n    // };\n\n    const task = new Task(title, description, undefined.formatDate(date), priority, project);\n\n    // const task = new Task(title, description, date, priority, project);\n\n    // Add task to array\n    tasks.push(task)\n\n    // Add task to local storage\n    addToStorage();\n\n    console.log(tasks);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://top-todo-list/./src/tasks.js?");

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