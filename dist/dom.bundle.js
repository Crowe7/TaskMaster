/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "loadProjectsOnBoot": () => (/* binding */ loadProjectsOnBoot),
/* harmony export */   "makeHomeMenu": () => (/* binding */ makeHomeMenu),
/* harmony export */   "homeBtn": () => (/* binding */ homeBtn)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



function homeBtn() {
    let homeBtn = document.getElementById('homeBtn');
    homeBtn.addEventListener('click', makeHomeMenu);
}

function newProject() {
    let newBtn = document.getElementById('newProject');
    let projectZone = document.getElementById('projectZone');
    newBtn.addEventListener('click', () => {
        projectZone.innerHTML = `<form id="input" class="title-input" action="">
        <div class="project-form-input">
            <input type="text" id="pTitle" placeholder="What is the title of the Project?" required maxlength="40" >
        </div>
        <div class="submit-project">
            <button type="button" id="createProject" class="new-project-button">CREATE PROJECT</button>
            <button type="button" id="cancelProject" class="new-project-button">CANCEL</button>
        </div>
    </form>`;
        newBtn.style.display = 'none';
        newProjectBoxUI(projectZone, newBtn);
        let createBtn = document.querySelector('#createProject');
        console.log(createBtn);
        createBtn.addEventListener('click', submitProject);
    });

}
function newProjectBoxUI(projectZone, newBtn) {
    let cancel = document.getElementById('cancelProject');
    cancel.addEventListener('click', () => {
        projectZone.innerHTML = '';
        newBtn.style.display = 'block';
    });
}

function makeProjectBtn(name){
    let wrapper = document.querySelector('.all-projects');
    let project = document.createElement('button');
    project.setAttribute('id', name);
    project.classList.add('pro');
    wrapper.appendChild(project);
    project.innerText = name;
    project.appendChild(makeDeleteProjectButton(project));
    

    project.addEventListener('click', () => {
        makeTaskUI();
        setActiveProject(project);
        displayProjectsTasks();
    });

}
function setActiveProject(project) {
    let wrapper = document.querySelector('.all-projects');
    for(let i = 0; i < wrapper.children.length; i++) {
        if(wrapper.children[i].classList.contains('active-project')) {
            wrapper.children[i].classList.remove('active-project');
        }
    }
    project.classList.add('active-project');
}
function returnActiveProjectName() {
    let wrapper = document.querySelector('.all-projects');
    for(let i = 0; i < wrapper.children.length; i++) {
        if(wrapper.children[i].classList.contains('active-project')) {

            let active = wrapper.children[i].id;
            return active;
        }
    }
}
function returnProject() {
    for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length; i++) {
        if(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i].Name.trim() === returnActiveProjectName()) {
            let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i];
            return activeProject;
        }
    }
}
function returnProjectToDelete(project) {
    for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length; i++) {
        if(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i].Name.trim() === project.id) {
            let activeProject = _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i];
            return activeProject;
        }
    }
}
function makeDeleteProjectButton(project) {
    let deleteBtn = document.createElement('span');
    deleteBtn.setAttribute('id', 'deleteProject');
    deleteBtn.innerText = 'X';

    deleteBtn.addEventListener('click', (e) => {
        deleteProject(project, e);
    });
    return deleteBtn;
}
function deleteProject(project, e) {
    _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.deleteProject(returnProjectToDelete(project));
    project.remove();
    e.stopPropagation();
    clearTaskUI();
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveTaskmaster)();
    if(returnActiveProjectName() !== undefined) {
        makeAndDisplayTasks();
    }

}

function submitProject() {
    let projectZone = document.getElementById('projectZone');
    let newBtn = document.getElementById('newProject');
    let projectName = document.getElementById('pTitle');
    
    if(projectName.value === "") {
        alert("Name Can't Be Blank!");
        return;
    }
    else {
        for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length; i++) {
            if(projectName.value === _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i].Name) {
                alert('Project Already Exists!');
                return;
            }
        }
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.makeProject)(projectName.value);
        makeProjectBtn(projectName.value);
        (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveTaskmaster)();
        projectZone.innerHTML = '';
        newBtn.style.display = 'block';
        console.log(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster);
    }
} 

function makeTaskUI() {
    clearTaskUI();
    let taskDiv = document.querySelector('#taskUI');
    taskDiv.innerHTML = 
    `<div class="project-board">
    <div class="p1">
        <p class="header-p">low-priority</p>
        <div id="low-prio" class="task-area">

        </div>
    </div>
    <div class="p2">
        <p class="header-p">in-progress</p>
        <div id = "in-pro" class="task-area">

        </div>
    </div>
    <div class="p3">
        <p class="header-p">completed</p>
        <div id="complete" class="task-area">

        </div>
    </div>
    <div class="p4">
        <p class="header-p">due-soon</p>
        <div id="due-soon" class="task-area">
            
        </div>
    </div>
</div>`;

// probably put a function here that loads in each individual task thats in the project

let taskBtnWrapper = document.querySelector('.new-task-wrapper');
let taskBtn = document.createElement('button');
    taskBtn.setAttribute('id', 'newTask');
    taskBtn.textContent = 'New Task';

    taskBtn.addEventListener('click', createTaskBtnModal);
    taskBtnWrapper.appendChild(taskBtn);
}


function createTaskBtnModal() {
    let modal = document.getElementById('modal');
    modal.innerHTML = `<div id="modalID" class="project-modal">
    <div class="modal-project-content">

        <header class="modal-header">
            <div></div>
            <h2 class="modal-header-title">Task Info</h1>
            <button type="button" id="closeModal" class="close">X</button>
        </header>
        <form id="input" class="title-input-modal" action="">
            <div class="project-form-input-modal">
                <input type="text" id="mTitle" placeholder="What is the title of the task?" required maxlength="40" >
                <textarea id="taskDesc" placeholder="Task description" rows="15" maxlength="200"></textarea>
            </div>
            <div class="submit-task">
                <div class="date-box">
                    <label for="due-date">Due-Date:</label>
                    <input type="date" id="dueDate" name="due-date">
                </div>
                <button type="button" id="createTask" class="new-project-button">CREATE TASK</button>
                
            </div>
        </form>
    </div>
</div>`;
    let date = document.getElementById('dueDate');
    date.value ='2022-12-31';
    TaskBtnModalLogic();
}
function TaskBtnModalLogic() {
    let close = document.getElementById('closeModal');
    close.addEventListener('click', closeTaskModal);
    
    let submit = document.getElementById('createTask');
    submit.addEventListener('click', submitTask);
}
function closeTaskModal() {
    let modal = document.getElementById('modal');
    modal.innerHTML = '';
}
function clearTaskUI() {
    let taskDiv = document.querySelector('#taskUI');
    taskDiv.innerHTML = '';


    let taskBtnWrapper = document.querySelector('.new-task-wrapper');
    taskBtnWrapper.innerHTML = '';
}
function submitTask() {

    let date = document.getElementById('dueDate');
    let description = document.getElementById('taskDesc').value;
    let taskName = document.getElementById('mTitle');
    if(taskName.value === "") {
        alert("Title Can't Be Blank!");
        return;
    }
    console.log(returnActiveProjectName());
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.makeTask)(description, taskName.value, date.value, returnActiveProjectName(), "LowPriority");
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveTaskmaster)();
    makeTaskBtn(taskName.value, "LowPriority");
    closeTaskModal();
}
function returnCurrTask(project, name) {
    for(let i = 0; i < project.Tasks.length; i++) {
        let task = project.Tasks[i];
        if(task.Name.trim() === name.trim()) {
            return task;
        }
    }
}
function makeTaskBtn(name, status) {

    if(status === "LowPriority") {
        status = document.getElementById('low-prio');
    }
    else if(status === "InProgress"){
        status = document.getElementById('in-pro');
    }
    else if(status === "Completed"){
        status = document.getElementById('complete');
    }
    else if(status === 4){
        status = document.getElementById('due-soon');
    }


    let task = document.createElement('button');

    task.setAttribute('id', name);
    task.classList.add('task');
    task.textContent = name;
    task.addEventListener('click', () => {
        displayTaskInfo(task);
    });
    status.appendChild(task);
}

function displayProjectsTasks() {    
        let activeProject = returnProject();
        if(activeProject.Tasks.length === undefined) {
            return
        }
        for(let j = 0; j < activeProject.Tasks.length; j++) {
            let currentTask = activeProject.Tasks[j];
            console.log(currentTask);
            makeTaskBtn(currentTask.Name, currentTask.Status)
                    // PUT THE CHECK FOR DUE SOON FUNCTION HERE!!
        }
    }

function displayTaskInfo(e) {
    let modal = document.getElementById('modal');
    modal.innerHTML =
    `<div id="modalID" class="project-modal">
    <div class="modal-task-content">

        <header class="modal-header">
            <div></div>
            <h2 id="taskTitle" class="modal-header-title"></h1>
            <button type="button" id="closeModal" class="close">X</button>
        </header>
        <form id="input" class="title-input-modal" action="">
            <div class="project-form-input-modal">
                <p class="task-desc" id="taskDesc"></p>
            </div>
            <div class="submit-task">
                <div class="status">
                    <div class="date-box">
                        <label for="due-date">Due-Date:</label>
                        <input type="date" id="dueDate" name="due-date"> </input>
                    </div>
                    <div id="statBtn" class="status-buttons">
                        <button type="button" id="low">Low Priority</button>
                        <button type="button" id="in">In-Progress</button>
                        <button type="button" id="comp">Completed</button>
                    </div>
                </div>
                <button type="button" id="confirmChanges" class="confirm">CONFIRM CHANGES</button>
                
            </div>
        </form>
        <footer class="task-footer">
            <button type="button" id="deleteTask">DELETE TASK!</button>
        </footer>
    </div>
</div> `;
    let close = document.getElementById('closeModal');
    close.addEventListener('click', closeTaskModal);

    

    let parentProject = returnProject();

    let task = returnCurrTask(parentProject, e.id);

    let title = document.getElementById('taskTitle');
    title.innerText = task.Name;

    let desc = document.getElementById('taskDesc');
    desc.innerText = task.Description;
    if(desc.innerText === "") {
        desc.innerText = ":]";
    }

    let due = document.getElementById('dueDate');
    due.value = task.Date;

    let statBtn = document.getElementById('statBtn');
    

    for(let i = 0; i < statBtn.children.length; i++) {
        statBtn.children[i].addEventListener('click', () => {
            highlightStatus(statBtn, statBtn.children[i]);
        });
    
        if(task.Status === "LowPriority") {
            statBtn.children[0].classList.add('active-task');
        }
        else if(task.Status === "InProgress") {
            statBtn.children[1].classList.add('active-task');
        }
        else if(task.Status === "Completed") {
            statBtn.children[2].classList.add('active-task');
        }
    }

    let remove = document.getElementById('deleteTask');
    remove.addEventListener('click', () => {
        deleteTask(parentProject, task, e);
    });

    let submit = document.getElementById('confirmChanges');
    submit.addEventListener('click', () => {
        updateTask(task, e);
    });
    
}

function highlightStatus(statusWrapper, statBtn) {
    for(let i = 0; i < statusWrapper.children.length; i++) {
        if(statusWrapper.children[i].classList.contains('active-task')) {
            statusWrapper.children[i].classList.remove('active-task');
        }
    }
    statBtn.classList.add('active-task');
}
function deleteTask(project, task, e) {
    e.remove();
    closeTaskModal();
    project.deleteTask(task);
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveTaskmaster)();
}


function updateTaskObject(task) {
    let due = document.getElementById('dueDate');
    task.Date = due.value;

    task.Status = taskStatus();

}

function updateTask(task, e) {
    let oldButtonID = e.id;
    e.remove();
    updateTaskObject(task);
    makeTaskBtn(oldButtonID, task.Status);
    closeTaskModal();
    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveTaskmaster)();
}

function taskStatus() {
    if(document.getElementById('low').classList.contains('active-task')) {
        return "LowPriority";
    }
    if(document.getElementById('in').classList.contains('active-task')) {
        return "InProgress";
    }
    if(document.getElementById('comp').classList.contains('active-task')) {
        return "Completed";
    }
}

function makeAndDisplayTasks() {
    makeTaskUI();
    displayProjectsTasks();
}

function loadProjectsOnBoot() {
    if (_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length !== 0) {
        for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length; i++) {
            makeProjectBtn(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i].Name);
        }
    }
}

function makeHomeMenu() {
    let taskDiv = document.getElementById('taskUI');
    clearTaskUI();

    let menu = document.createElement('div');
    menu.classList.add('projectHomeMenu');
    taskDiv.appendChild(menu)

    if (_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length === 0) {
        let noProjects = document.createElement('h1');
        noProjects.textContent = 'NO PROJECTS! MAYBE CREATE ONE?';

        taskDiv.appendChild(noProjects);
    }
    else {
        for(let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects.length; i++) {
            let project = _index__WEBPACK_IMPORTED_MODULE_0__.taskMaster.Projects[i];
            console.log(project);
            makeHomeButtons(project, menu);
        }
    }

}

function makeHomeButtons(project, menu) {
    console.log(project);
    let homeProject = document.createElement('button');
    homeProject.classList.add('projectHome');
    homeProject.innerText = project.Name;

    homeProject.addEventListener('click', () => {
        makeTaskUI();
        setHomeButtons(project.Name);
        displayProjectsTasks();
    });

    let span = document.createElement('span');
    span.classList.add('taskNumber');
    span.textContent = howManyUncompleteTasks(project);
    homeProject.appendChild(span);

    menu.appendChild(homeProject);
}
function setHomeButtons(name) {
    let wrapper = document.querySelector('.all-projects');
    for(let i = 0; i < wrapper.children.length; i++) {
        if(wrapper.children[i].id === name) {
            setActiveProject(wrapper.children[i]);
        }
    }
}
function howManyUncompleteTasks(project) {
    let counter = 0;
    for(let i = 0; i < project.Tasks.length; i ++) {
        if(project.Tasks[i].Status !== 'Completed') {
            counter++;
        }
    }
    return counter;
}
/*                 <div class="projectHomeMenu">
                    <button class="projectHome">
                        Project
                        <span class="taskNumber">0</span>
                    </button>
                    <button class="projectHome">
                        Project
                        <span class="taskNumber">0</span>
                    </button>
                </div>
*/





/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTask": () => (/* binding */ makeTask),
/* harmony export */   "makeProject": () => (/* binding */ makeProject),
/* harmony export */   "taskMaster": () => (/* binding */ taskMaster)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");


// WE HAVE DATE-FNS TO IMPORT CERTAIN FUNCTIONS FROM!
(0,_dom__WEBPACK_IMPORTED_MODULE_0__.newProject)();


// gonna have to put some storage functions in these later
class Taskmaster {
    Projects = [];
    newProject(name) {
        this.Projects.push(name);
    }
    deleteProject(project) {
        for(let i = 0; i < this.Projects.length; i++) {
            if(this.Projects[i] === project) {
                this.Projects.splice(i, 1);
            }
        }
    }
}
let taskMaster = new Taskmaster;

class Project {
    Name = undefined;
    Tasks = [];
    newTask(name) {
        this.Tasks.push(name);
    }
    pushToTaskmaster(name) {
        taskMaster.newProject(name);
    }
    deleteTask(task) {
        for(let i = 0; i < this.Tasks.length; i++) {
            if(this.Tasks[i] === task) {
                this.Tasks.splice(i, 1);
            }
        }
    }
}
function makeProject(name) {
    let project = new Project;
    project.Name = name;
    project.pushToTaskmaster(project);
}


// maybe change low in and completed to a single status that those would be the key to
// add isDueSoon method that checks with date-fns if the task is due in a less than a week

class Task {
    Name = undefined;
    Description = "";
    Status = "LowPriority"
    Date = undefined;

    pushToProject(projectName, task) {
        for(let i = 0; i < taskMaster.Projects.length; i++) {
            if(taskMaster.Projects[i].Name.trim() === projectName.trim()) {
                taskMaster.Projects[i].newTask(task);
            }
        }
    }



}
// status can be LowPriority InProgress Completed
function makeTask(description, name, date, projectName, status) {
    let task = new Task;
    task.Name = name;
    task.Date = date;
    task.Status = status;
    task.Description = description;
    task.pushToProject(projectName, task);
    console.log(task);
}
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.loadTaskMaster)();
(0,_dom__WEBPACK_IMPORTED_MODULE_0__.loadProjectsOnBoot)();
(0,_dom__WEBPACK_IMPORTED_MODULE_0__.makeHomeMenu)();
(0,_dom__WEBPACK_IMPORTED_MODULE_0__.homeBtn)();




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveTaskmaster": () => (/* binding */ saveTaskmaster),
/* harmony export */   "loadTaskMaster": () => (/* binding */ loadTaskMaster)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function saveTaskmaster() {
    localStorage.setItem('taskMaster', JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster));
    console.log(_index__WEBPACK_IMPORTED_MODULE_0__.taskMaster);
}

function loadTaskMaster() {
    let localTaskMaster = JSON.parse(localStorage.getItem('taskMaster'));
    if(localTaskMaster !== null) {
        for(let i = 0; i < localTaskMaster.Projects.length; i++) {
            let Project = localTaskMaster.Projects[i];
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.makeProject)(Project.Name);
            loadTasks(Project);
        }
    }

}
function loadTasks(Project) {
    if(Project.Tasks.length !== 0) {
        for(let i = 0; i < Project.Tasks.length; i++) {
            let task = Project.Tasks[i];
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.makeTask)(task.Description, task.Name, task.Date, Project.Name, task.Status);
        }
    }
}


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dom.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ29CO0FBQ0E7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixJQUFJLDhEQUEwQixFQUFFO0FBQ25ELFdBQVcsdURBQW1CO0FBQzlCLGdDQUFnQyx1REFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixJQUFJLDhEQUEwQixFQUFFO0FBQ25ELFdBQVcsdURBQW1CO0FBQzlCLGdDQUFnQyx1REFBbUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQXdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWM7QUFDbEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLElBQUksOERBQTBCLEVBQUU7QUFDdkQscUNBQXFDLHVEQUFtQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVc7QUFDbkI7QUFDQSxRQUFRLHdEQUFjO0FBQ3RCO0FBQ0E7QUFDQSxvQkFBb0IsOENBQVU7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFRO0FBQ1osSUFBSSx3REFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7Ozs7VUN6QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlkIH0gZnJvbSBcImRhdGUtZm5zL2xvY2FsZVwiO1xuaW1wb3J0IHttYWtlVGFzaywgbWFrZVByb2plY3QsIHRhc2tNYXN0ZXJ9IGZyb20gXCIuL2luZGV4XCJcbmltcG9ydCB7bG9hZFRhc2tNYXN0ZXIsIHNhdmVUYXNrbWFzdGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5mdW5jdGlvbiBob21lQnRuKCkge1xuICAgIGxldCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdG4nKTtcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFrZUhvbWVNZW51KTtcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdCgpIHtcbiAgICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbiAgICBsZXQgcHJvamVjdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFpvbmUnKTtcbiAgICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dFwiIGFjdGlvbj1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBUaXRsZVwiIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgdGl0bGUgb2YgdGhlIFByb2plY3Q/XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiNDBcIiA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXByb2plY3RcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY3JlYXRlUHJvamVjdFwiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q1JFQVRFIFBST0pFQ1Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsUHJvamVjdFwiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q0FOQ0VMPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5gO1xuICAgICAgICBuZXdCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbmV3UHJvamVjdEJveFVJKHByb2plY3Rab25lLCBuZXdCdG4pO1xuICAgICAgICBsZXQgY3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3QnKTtcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlQnRuKTtcbiAgICAgICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0UHJvamVjdCk7XG4gICAgfSk7XG5cbn1cbmZ1bmN0aW9uIG5ld1Byb2plY3RCb3hVSShwcm9qZWN0Wm9uZSwgbmV3QnRuKSB7XG4gICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxQcm9qZWN0Jyk7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvamVjdEJ0bihuYW1lKXtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBwcm9qZWN0LmlubmVyVGV4dCA9IG5hbWU7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChtYWtlRGVsZXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSk7XG4gICAgXG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtYWtlVGFza1VJKCk7XG4gICAgICAgIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0c1Rhc2tzKCk7XG4gICAgfSk7XG5cbn1cbmZ1bmN0aW9uIHNldEFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3cmFwcGVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHdyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtcHJvamVjdCcpKSB7XG4gICAgICAgICAgICB3cmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xufVxuZnVuY3Rpb24gcmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYod3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1wcm9qZWN0JykpIHtcblxuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IHdyYXBwZXIuY2hpbGRyZW5baV0uaWQ7XG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdCgpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUudHJpbSgpID09PSByZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpKSB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHJldHVyblByb2plY3RUb0RlbGV0ZShwcm9qZWN0KSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lLnRyaW0oKSA9PT0gcHJvamVjdC5pZCkge1xuICAgICAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSB0YXNrTWFzdGVyLlByb2plY3RzW2ldO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlRGVsZXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0KSB7XG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVQcm9qZWN0Jyk7XG4gICAgZGVsZXRlQnRuLmlubmVyVGV4dCA9ICdYJztcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCwgZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRlbGV0ZUJ0bjtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCwgZSkge1xuICAgIHRhc2tNYXN0ZXIuZGVsZXRlUHJvamVjdChyZXR1cm5Qcm9qZWN0VG9EZWxldGUocHJvamVjdCkpO1xuICAgIHByb2plY3QucmVtb3ZlKCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjbGVhclRhc2tVSSgpO1xuICAgIHNhdmVUYXNrbWFzdGVyKCk7XG4gICAgaWYocmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1ha2VBbmREaXNwbGF5VGFza3MoKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdCgpIHtcbiAgICBsZXQgcHJvamVjdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFpvbmUnKTtcbiAgICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncFRpdGxlJyk7XG4gICAgXG4gICAgaWYocHJvamVjdE5hbWUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJOYW1lIENhbid0IEJlIEJsYW5rIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHByb2plY3ROYW1lLnZhbHVlID09PSB0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnUHJvamVjdCBBbHJlYWR5IEV4aXN0cyEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFrZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICBtYWtlUHJvamVjdEJ0bihwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgIHNhdmVUYXNrbWFzdGVyKCk7XG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBuZXdCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tNYXN0ZXIpO1xuICAgIH1cbn0gXG5cbmZ1bmN0aW9uIG1ha2VUYXNrVUkoKSB7XG4gICAgY2xlYXJUYXNrVUkoKTtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrVUknKTtcbiAgICB0YXNrRGl2LmlubmVySFRNTCA9IFxuICAgIGA8ZGl2IGNsYXNzPVwicHJvamVjdC1ib2FyZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJwMVwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+bG93LXByaW9yaXR5PC9wPlxuICAgICAgICA8ZGl2IGlkPVwibG93LXByaW9cIiBjbGFzcz1cInRhc2stYXJlYVwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwMlwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+aW4tcHJvZ3Jlc3M8L3A+XG4gICAgICAgIDxkaXYgaWQgPSBcImluLXByb1wiIGNsYXNzPVwidGFzay1hcmVhXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInAzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5jb21wbGV0ZWQ8L3A+XG4gICAgICAgIDxkaXYgaWQ9XCJjb21wbGV0ZVwiIGNsYXNzPVwidGFzay1hcmVhXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInA0XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5kdWUtc29vbjwvcD5cbiAgICAgICAgPGRpdiBpZD1cImR1ZS1zb29uXCIgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG5cbi8vIHByb2JhYmx5IHB1dCBhIGZ1bmN0aW9uIGhlcmUgdGhhdCBsb2FkcyBpbiBlYWNoIGluZGl2aWR1YWwgdGFzayB0aGF0cyBpbiB0aGUgcHJvamVjdFxuXG5sZXQgdGFza0J0bldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2std3JhcHBlcicpO1xubGV0IHRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFzaycpO1xuICAgIHRhc2tCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuXG4gICAgdGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRhc2tCdG5Nb2RhbCk7XG4gICAgdGFza0J0bldyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0J0bik7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFza0J0bk1vZGFsKCkge1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwibW9kYWxJRFwiIGNsYXNzPVwicHJvamVjdC1tb2RhbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1wcm9qZWN0LWNvbnRlbnRcIj5cblxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWwtaGVhZGVyLXRpdGxlXCI+VGFzayBJbmZvPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xvc2VNb2RhbFwiIGNsYXNzPVwiY2xvc2VcIj5YPC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dC1tb2RhbFwiIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1pbnB1dC1tb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibVRpdGxlXCIgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgdGFzaz9cIiByZXF1aXJlZCBtYXhsZW5ndGg9XCI0MFwiID5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0YXNrRGVzY1wiIHBsYWNlaG9sZGVyPVwiVGFzayBkZXNjcmlwdGlvblwiIHJvd3M9XCIxNVwiIG1heGxlbmd0aD1cIjIwMFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtdGFza1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUtRGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlLWRhdGVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNyZWF0ZVRhc2tcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNSRUFURSBUQVNLPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC9kaXY+YDtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XG4gICAgZGF0ZS52YWx1ZSA9JzIwMjItMTItMzEnO1xuICAgIFRhc2tCdG5Nb2RhbExvZ2ljKCk7XG59XG5mdW5jdGlvbiBUYXNrQnRuTW9kYWxMb2dpYygpIHtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbCcpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrTW9kYWwpO1xuICAgIFxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlVGFzaycpO1xuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFRhc2spO1xufVxuZnVuY3Rpb24gY2xvc2VUYXNrTW9kYWwoKSB7XG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gJyc7XG59XG5mdW5jdGlvbiBjbGVhclRhc2tVSSgpIHtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrVUknKTtcbiAgICB0YXNrRGl2LmlubmVySFRNTCA9ICcnO1xuXG5cbiAgICBsZXQgdGFza0J0bldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2std3JhcHBlcicpO1xuICAgIHRhc2tCdG5XcmFwcGVyLmlubmVySFRNTCA9ICcnO1xufVxuZnVuY3Rpb24gc3VibWl0VGFzaygpIHtcblxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2MnKS52YWx1ZTtcbiAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbVRpdGxlJyk7XG4gICAgaWYodGFza05hbWUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJUaXRsZSBDYW4ndCBCZSBCbGFuayFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSk7XG4gICAgbWFrZVRhc2soZGVzY3JpcHRpb24sIHRhc2tOYW1lLnZhbHVlLCBkYXRlLnZhbHVlLCByZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpLCBcIkxvd1ByaW9yaXR5XCIpO1xuICAgIHNhdmVUYXNrbWFzdGVyKCk7XG4gICAgbWFrZVRhc2tCdG4odGFza05hbWUudmFsdWUsIFwiTG93UHJpb3JpdHlcIik7XG4gICAgY2xvc2VUYXNrTW9kYWwoKTtcbn1cbmZ1bmN0aW9uIHJldHVybkN1cnJUYXNrKHByb2plY3QsIG5hbWUpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5UYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGFzayA9IHByb2plY3QuVGFza3NbaV07XG4gICAgICAgIGlmKHRhc2suTmFtZS50cmltKCkgPT09IG5hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VUYXNrQnRuKG5hbWUsIHN0YXR1cykge1xuXG4gICAgaWYoc3RhdHVzID09PSBcIkxvd1ByaW9yaXR5XCIpIHtcbiAgICAgICAgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvdy1wcmlvJyk7XG4gICAgfVxuICAgIGVsc2UgaWYoc3RhdHVzID09PSBcIkluUHJvZ3Jlc3NcIil7XG4gICAgICAgIHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbi1wcm8nKTtcbiAgICB9XG4gICAgZWxzZSBpZihzdGF0dXMgPT09IFwiQ29tcGxldGVkXCIpe1xuICAgICAgICBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGUnKTtcbiAgICB9XG4gICAgZWxzZSBpZihzdGF0dXMgPT09IDQpe1xuICAgICAgICBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLXNvb24nKTtcbiAgICB9XG5cblxuICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICB0YXNrLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5VGFza0luZm8odGFzayk7XG4gICAgfSk7XG4gICAgc3RhdHVzLmFwcGVuZENoaWxkKHRhc2spO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHNUYXNrcygpIHsgICAgXG4gICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gcmV0dXJuUHJvamVjdCgpO1xuICAgICAgICBpZihhY3RpdmVQcm9qZWN0LlRhc2tzLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYWN0aXZlUHJvamVjdC5UYXNrcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXNrID0gYWN0aXZlUHJvamVjdC5UYXNrc1tqXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrKTtcbiAgICAgICAgICAgIG1ha2VUYXNrQnRuKGN1cnJlbnRUYXNrLk5hbWUsIGN1cnJlbnRUYXNrLlN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgLy8gUFVUIFRIRSBDSEVDSyBGT1IgRFVFIFNPT04gRlVOQ1RJT04gSEVSRSEhXG4gICAgICAgIH1cbiAgICB9XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrSW5mbyhlKSB7XG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID1cbiAgICBgPGRpdiBpZD1cIm1vZGFsSURcIiBjbGFzcz1cInByb2plY3QtbW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtdGFzay1jb250ZW50XCI+XG5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxoMiBpZD1cInRhc2tUaXRsZVwiIGNsYXNzPVwibW9kYWwtaGVhZGVyLXRpdGxlXCI+PC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xvc2VNb2RhbFwiIGNsYXNzPVwiY2xvc2VcIj5YPC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dC1tb2RhbFwiIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1pbnB1dC1tb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGFzay1kZXNjXCIgaWQ9XCJ0YXNrRGVzY1wiPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdC10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZS1EYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlLWRhdGVcIj4gPC9pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzdGF0QnRuXCIgY2xhc3M9XCJzdGF0dXMtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJsb3dcIj5Mb3cgUHJpb3JpdHk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiaW5cIj5Jbi1Qcm9ncmVzczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjb21wXCI+Q29tcGxldGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY29uZmlybUNoYW5nZXNcIiBjbGFzcz1cImNvbmZpcm1cIj5DT05GSVJNIENIQU5HRVM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJ0YXNrLWZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJkZWxldGVUYXNrXCI+REVMRVRFIFRBU0shPC9idXR0b24+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuPC9kaXY+IGA7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWwnKTtcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza01vZGFsKTtcblxuICAgIFxuXG4gICAgbGV0IHBhcmVudFByb2plY3QgPSByZXR1cm5Qcm9qZWN0KCk7XG5cbiAgICBsZXQgdGFzayA9IHJldHVybkN1cnJUYXNrKHBhcmVudFByb2plY3QsIGUuaWQpO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUaXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRhc2suTmFtZTtcblxuICAgIGxldCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjJyk7XG4gICAgZGVzYy5pbm5lclRleHQgPSB0YXNrLkRlc2NyaXB0aW9uO1xuICAgIGlmKGRlc2MuaW5uZXJUZXh0ID09PSBcIlwiKSB7XG4gICAgICAgIGRlc2MuaW5uZXJUZXh0ID0gXCI6XVwiO1xuICAgIH1cblxuICAgIGxldCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xuICAgIGR1ZS52YWx1ZSA9IHRhc2suRGF0ZTtcblxuICAgIGxldCBzdGF0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRCdG4nKTtcbiAgICBcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGF0QnRuLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN0YXRCdG4uY2hpbGRyZW5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoaWdobGlnaHRTdGF0dXMoc3RhdEJ0biwgc3RhdEJ0bi5jaGlsZHJlbltpXSk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBpZih0YXNrLlN0YXR1cyA9PT0gXCJMb3dQcmlvcml0eVwiKSB7XG4gICAgICAgICAgICBzdGF0QnRuLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0YXNrLlN0YXR1cyA9PT0gXCJJblByb2dyZXNzXCIpIHtcbiAgICAgICAgICAgIHN0YXRCdG4uY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhc2suU3RhdHVzID09PSBcIkNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICBzdGF0QnRuLmNoaWxkcmVuWzJdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZVRhc2snKTtcbiAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVRhc2socGFyZW50UHJvamVjdCwgdGFzaywgZSk7XG4gICAgfSk7XG5cbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1DaGFuZ2VzJyk7XG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB1cGRhdGVUYXNrKHRhc2ssIGUpO1xuICAgIH0pO1xuICAgIFxufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRTdGF0dXMoc3RhdHVzV3JhcHBlciwgc3RhdEJ0bikge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGF0dXNXcmFwcGVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHN0YXR1c1dyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdGFzaycpKSB7XG4gICAgICAgICAgICBzdGF0dXNXcmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YXNrJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFzaycpO1xufVxuZnVuY3Rpb24gZGVsZXRlVGFzayhwcm9qZWN0LCB0YXNrLCBlKSB7XG4gICAgZS5yZW1vdmUoKTtcbiAgICBjbG9zZVRhc2tNb2RhbCgpO1xuICAgIHByb2plY3QuZGVsZXRlVGFzayh0YXNrKTtcbiAgICBzYXZlVGFza21hc3RlcigpO1xufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tPYmplY3QodGFzaykge1xuICAgIGxldCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xuICAgIHRhc2suRGF0ZSA9IGR1ZS52YWx1ZTtcblxuICAgIHRhc2suU3RhdHVzID0gdGFza1N0YXR1cygpO1xuXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2sodGFzaywgZSkge1xuICAgIGxldCBvbGRCdXR0b25JRCA9IGUuaWQ7XG4gICAgZS5yZW1vdmUoKTtcbiAgICB1cGRhdGVUYXNrT2JqZWN0KHRhc2spO1xuICAgIG1ha2VUYXNrQnRuKG9sZEJ1dHRvbklELCB0YXNrLlN0YXR1cyk7XG4gICAgY2xvc2VUYXNrTW9kYWwoKTtcbiAgICBzYXZlVGFza21hc3RlcigpO1xufVxuXG5mdW5jdGlvbiB0YXNrU3RhdHVzKCkge1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3cnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcbiAgICAgICAgcmV0dXJuIFwiTG93UHJpb3JpdHlcIjtcbiAgICB9XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdGFzaycpKSB7XG4gICAgICAgIHJldHVybiBcIkluUHJvZ3Jlc3NcIjtcbiAgICB9XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXAnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcbiAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVkXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQW5kRGlzcGxheVRhc2tzKCkge1xuICAgIG1ha2VUYXNrVUkoKTtcbiAgICBkaXNwbGF5UHJvamVjdHNUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNPbkJvb3QoKSB7XG4gICAgaWYgKHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYWtlUHJvamVjdEJ0bih0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlSG9tZU1lbnUoKSB7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1VJJyk7XG4gICAgY2xlYXJUYXNrVUkoKTtcblxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0SG9tZU1lbnUnKTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKG1lbnUpXG5cbiAgICBpZiAodGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGV0IG5vUHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBub1Byb2plY3RzLnRleHRDb250ZW50ID0gJ05PIFBST0pFQ1RTISBNQVlCRSBDUkVBVEUgT05FPyc7XG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChub1Byb2plY3RzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgICAgIG1ha2VIb21lQnV0dG9ucyhwcm9qZWN0LCBtZW51KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBtYWtlSG9tZUJ1dHRvbnMocHJvamVjdCwgbWVudSkge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgIGxldCBob21lUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RIb21lJyk7XG4gICAgaG9tZVByb2plY3QuaW5uZXJUZXh0ID0gcHJvamVjdC5OYW1lO1xuXG4gICAgaG9tZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1ha2VUYXNrVUkoKTtcbiAgICAgICAgc2V0SG9tZUJ1dHRvbnMocHJvamVjdC5OYW1lKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzVGFza3MoKTtcbiAgICB9KTtcblxuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgndGFza051bWJlcicpO1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSBob3dNYW55VW5jb21wbGV0ZVRhc2tzKHByb2plY3QpO1xuICAgIGhvbWVQcm9qZWN0LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChob21lUHJvamVjdCk7XG59XG5mdW5jdGlvbiBzZXRIb21lQnV0dG9ucyhuYW1lKSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYod3JhcHBlci5jaGlsZHJlbltpXS5pZCA9PT0gbmFtZSkge1xuICAgICAgICAgICAgc2V0QWN0aXZlUHJvamVjdCh3cmFwcGVyLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGhvd01hbnlVbmNvbXBsZXRlVGFza3MocHJvamVjdCkge1xuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5UYXNrcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgaWYocHJvamVjdC5UYXNrc1tpXS5TdGF0dXMgIT09ICdDb21wbGV0ZWQnKSB7XG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvdW50ZXI7XG59XG4vKiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RIb21lTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdEhvbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFza051bWJlclwiPjA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdEhvbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFza051bWJlclwiPjA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuKi9cblxuZXhwb3J0IHtuZXdQcm9qZWN0LCBsb2FkUHJvamVjdHNPbkJvb3QsIG1ha2VIb21lTWVudSwgaG9tZUJ0bn07XG5cbiIsImltcG9ydCB7bmV3UHJvamVjdCwgbG9hZFByb2plY3RzT25Cb290LCBtYWtlSG9tZU1lbnUsIGhvbWVCdG59IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHtsb2FkVGFza01hc3Rlciwgc2F2ZVRhc2ttYXN0ZXJ9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbi8vIFdFIEhBVkUgREFURS1GTlMgVE8gSU1QT1JUIENFUlRBSU4gRlVOQ1RJT05TIEZST00hXG5uZXdQcm9qZWN0KCk7XG5cblxuLy8gZ29ubmEgaGF2ZSB0byBwdXQgc29tZSBzdG9yYWdlIGZ1bmN0aW9ucyBpbiB0aGVzZSBsYXRlclxuY2xhc3MgVGFza21hc3RlciB7XG4gICAgUHJvamVjdHMgPSBbXTtcbiAgICBuZXdQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgdGhpcy5Qcm9qZWN0cy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuUHJvamVjdHNbaV0gPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmxldCB0YXNrTWFzdGVyID0gbmV3IFRhc2ttYXN0ZXI7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgVGFza3MgPSBbXTtcbiAgICBuZXdUYXNrKG5hbWUpIHtcbiAgICAgICAgdGhpcy5UYXNrcy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgICBwdXNoVG9UYXNrbWFzdGVyKG5hbWUpIHtcbiAgICAgICAgdGFza01hc3Rlci5uZXdQcm9qZWN0KG5hbWUpO1xuICAgIH1cbiAgICBkZWxldGVUYXNrKHRhc2spIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuVGFza3NbaV0gPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLlRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VQcm9qZWN0KG5hbWUpIHtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0O1xuICAgIHByb2plY3QuTmFtZSA9IG5hbWU7XG4gICAgcHJvamVjdC5wdXNoVG9UYXNrbWFzdGVyKHByb2plY3QpO1xufVxuXG5cbi8vIG1heWJlIGNoYW5nZSBsb3cgaW4gYW5kIGNvbXBsZXRlZCB0byBhIHNpbmdsZSBzdGF0dXMgdGhhdCB0aG9zZSB3b3VsZCBiZSB0aGUga2V5IHRvXG4vLyBhZGQgaXNEdWVTb29uIG1ldGhvZCB0aGF0IGNoZWNrcyB3aXRoIGRhdGUtZm5zIGlmIHRoZSB0YXNrIGlzIGR1ZSBpbiBhIGxlc3MgdGhhbiBhIHdlZWtcblxuY2xhc3MgVGFzayB7XG4gICAgTmFtZSA9IHVuZGVmaW5lZDtcbiAgICBEZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgU3RhdHVzID0gXCJMb3dQcmlvcml0eVwiXG4gICAgRGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIHB1c2hUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZS50cmltKCkgPT09IHByb2plY3ROYW1lLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0ubmV3VGFzayh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbi8vIHN0YXR1cyBjYW4gYmUgTG93UHJpb3JpdHkgSW5Qcm9ncmVzcyBDb21wbGV0ZWRcbmZ1bmN0aW9uIG1ha2VUYXNrKGRlc2NyaXB0aW9uLCBuYW1lLCBkYXRlLCBwcm9qZWN0TmFtZSwgc3RhdHVzKSB7XG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzaztcbiAgICB0YXNrLk5hbWUgPSBuYW1lO1xuICAgIHRhc2suRGF0ZSA9IGRhdGU7XG4gICAgdGFzay5TdGF0dXMgPSBzdGF0dXM7XG4gICAgdGFzay5EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRhc2sucHVzaFRvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzayk7XG4gICAgY29uc29sZS5sb2codGFzayk7XG59XG5sb2FkVGFza01hc3RlcigpO1xubG9hZFByb2plY3RzT25Cb290KCk7XG5tYWtlSG9tZU1lbnUoKTtcbmhvbWVCdG4oKTtcblxuZXhwb3J0IHttYWtlVGFzaywgbWFrZVByb2plY3QsIHRhc2tNYXN0ZXJ9O1xuIiwiaW1wb3J0IHttYWtlVGFzaywgbWFrZVByb2plY3QsIHRhc2tNYXN0ZXJ9IGZyb20gXCIuL2luZGV4XCJcblxuZnVuY3Rpb24gc2F2ZVRhc2ttYXN0ZXIoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tNYXN0ZXInLCBKU09OLnN0cmluZ2lmeSh0YXNrTWFzdGVyKSk7XG4gICAgY29uc29sZS5sb2codGFza01hc3Rlcik7XG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrTWFzdGVyKCkge1xuICAgIGxldCBsb2NhbFRhc2tNYXN0ZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTWFzdGVyJykpO1xuICAgIGlmKGxvY2FsVGFza01hc3RlciAhPT0gbnVsbCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxUYXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgUHJvamVjdCA9IGxvY2FsVGFza01hc3Rlci5Qcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIG1ha2VQcm9qZWN0KFByb2plY3QuTmFtZSk7XG4gICAgICAgICAgICBsb2FkVGFza3MoUHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGxvYWRUYXNrcyhQcm9qZWN0KSB7XG4gICAgaWYoUHJvamVjdC5UYXNrcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IFByb2plY3QuVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0YXNrID0gUHJvamVjdC5UYXNrc1tpXTtcbiAgICAgICAgICAgIG1ha2VUYXNrKHRhc2suRGVzY3JpcHRpb24sIHRhc2suTmFtZSwgdGFzay5EYXRlLCBQcm9qZWN0Lk5hbWUsIHRhc2suU3RhdHVzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCB7c2F2ZVRhc2ttYXN0ZXIsIGxvYWRUYXNrTWFzdGVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2RvbS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==