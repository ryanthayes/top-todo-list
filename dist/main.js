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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\nconst dom = (() => {\n\n    const toDoList = document.querySelector('#toDoList');\n\n    function renderProjects() {\n        \n        toDoList.innerText = '';\n\n        const projectHeader = document.createElement('h2');\n        projectHeader.classList.add('title--sm', 'project-list__header');\n        projectHeader.innerText = 'All Projects';\n        toDoList.append(projectHeader);\n\n        _projects__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forEach((project, index) => {\n\n            const projectItems = document.createElement('div');\n            projectItems.setAttribute('data-index', index);\n            projectItems.classList.add('project-item');\n            toDoList.append(projectItems);\n\n            const projectTitle = document.createElement('h3');\n            projectTitle.classList.add('project-title');\n            projectTitle.innerText = project.title;\n            toDoList.append(projectTitle);\n        })\n    };\n    \n    function renderTasks() {\n    \n        toDoList.innerText = '';\n\n        const taskHeader = document.createElement('h2');\n        taskHeader.classList.add('title--sm', 'task-list__header');\n        taskHeader.innerText = 'All Tasks';\n        toDoList.append(taskHeader);\n    \n        _tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((task, index) => {\n            \n            const taskItems = document.createElement('div');\n            taskItems.setAttribute('data-index', index);\n            taskItems.classList.add('task-item')\n            toDoList.appendChild(taskItems);\n    \n            const taskTitle = document.createElement('h3');\n            taskTitle.classList.add('task-item__title');\n            taskTitle.innerText = task.title;\n            taskItems.append(taskTitle);\n    \n            const taskDescription = document.createElement('p');\n            taskDescription.classList.add('task-item__description');\n            taskDescription.innerText = task.description;\n            taskItems.append(taskDescription);\n    \n            const taskDate = document.createElement('p');\n            taskDate.classList.add('task-item__date');\n            taskDate.innerText = task.date;\n            taskItems.append(taskDate);\n    \n            const taskPriority = document.createElement('p');\n            taskPriority.classList.add('task-item__priority');\n            taskPriority.innerText = task.priority;\n            taskItems.append(taskPriority);\n    \n            const taskProject = document.createElement('p');\n            taskProject.classList.add('task__project');\n            taskProject.innerText = task.project;\n            taskItems.append(taskProject);\n    \n        });\n    };  \n\n    return {\n        renderTasks,\n        renderProjects\n    }\n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://top-todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].renderTasks();\n// dom.renderProjects();\n\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projects = [\n    {\n        title: 'Default'\n    }\n];\n\n\nclass Project {\n    constructor(title) {\n        this.title = title;\n    }\n};\n\nconst addToStorage = () => { \n    localStorage.setItem(\"project\", JSON.stringify(projects));\n};\n\nconst newProject = () => {\n\n    // Get form input values\n    const title = document.querySelector('#projectTitle').value;\n\n    const project = new Project(title);\n\n    // Add task to array\n    projects.push(project)\n\n    // Add task to local storage\n    addToStorage();\n\n    return newProject;\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);\n\n//# sourceURL=webpack://top-todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tasks = [\n    {\n        title: 'Display Array',\n        description: 'Display array of tasks on DOM',\n        date: '2023-11-08',\n        priority: 'High',\n        project: 'default'\n    },\n    {\n        title: 'Display Local Storage',\n        description: 'Display local storage of tasks on DOM',\n        date: '2023-11-08',\n        priority: 'High',\n        project: 'default'\n    }\n];\n\nclass Task {\n    constructor(title, description, date, priority, project) {\n        this.title = title;\n        this.description = description;\n        this.date = date;\n        this.priority = priority;\n        this.project = project;\n    }\n};\n\nconst addToStorage = () => { \n    localStorage.setItem(\"task\", JSON.stringify(tasks));\n};\n\nconst newTask = () => {\n\n    // Get form input values\n    const title = document.querySelector('#taskTitle').value;\n    const description = document.querySelector('#taskDescription').value;\n    const date = document.querySelector('#taskDate').value;\n    const priority = document.querySelector('#taskPriority').value;\n    const project = document.querySelector('#taskProject').value;\n\n    const task = new Task(title, description, date, priority, project);\n\n    // Add task to array\n    tasks.push(task)\n\n    // Add task to local storage\n    addToStorage();\n\n    console.log(tasks);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasks);\n\n//# sourceURL=webpack://top-todo-list/./src/tasks.js?");

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