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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaWQgfSBmcm9tIFwiZGF0ZS1mbnMvbG9jYWxlXCI7XG5pbXBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn0gZnJvbSBcIi4vaW5kZXhcIlxuaW1wb3J0IHtsb2FkVGFza01hc3Rlciwgc2F2ZVRhc2ttYXN0ZXJ9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmZ1bmN0aW9uIGhvbWVCdG4oKSB7XG4gICAgbGV0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZUJ0bicpO1xuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYWtlSG9tZU1lbnUpO1xufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0KCkge1xuICAgIGxldCBuZXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuICAgIGxldCBwcm9qZWN0Wm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Wm9uZScpO1xuICAgIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdFpvbmUuaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwiaW5wdXRcIiBjbGFzcz1cInRpdGxlLWlucHV0XCIgYWN0aW9uPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicFRpdGxlXCIgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgUHJvamVjdD9cIiByZXF1aXJlZCBtYXhsZW5ndGg9XCI0MFwiID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtcHJvamVjdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjcmVhdGVQcm9qZWN0XCIgY2xhc3M9XCJuZXctcHJvamVjdC1idXR0b25cIj5DUkVBVEUgUFJPSkVDVDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWxQcm9qZWN0XCIgY2xhc3M9XCJuZXctcHJvamVjdC1idXR0b25cIj5DQU5DRUw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPmA7XG4gICAgICAgIG5ld0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBuZXdQcm9qZWN0Qm94VUkocHJvamVjdFpvbmUsIG5ld0J0bik7XG4gICAgICAgIGxldCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlUHJvamVjdCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVCdG4pO1xuICAgICAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRQcm9qZWN0KTtcbiAgICB9KTtcblxufVxuZnVuY3Rpb24gbmV3UHJvamVjdEJveFVJKHByb2plY3Rab25lLCBuZXdCdG4pIHtcbiAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFByb2plY3QnKTtcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBuZXdCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9qZWN0QnRuKG5hbWUpe1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm8nKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIHByb2plY3QuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG1ha2VEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpKTtcbiAgICBcblxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1ha2VUYXNrVUkoKTtcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzVGFza3MoKTtcbiAgICB9KTtcblxufVxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYod3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1wcm9qZWN0JykpIHtcbiAgICAgICAgICAgIHdyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3QnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG59XG5mdW5jdGlvbiByZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgd3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih3cmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXByb2plY3QnKSkge1xuXG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gd3JhcHBlci5jaGlsZHJlbltpXS5pZDtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZXR1cm5Qcm9qZWN0KCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZS50cmltKCkgPT09IHJldHVybkFjdGl2ZVByb2plY3ROYW1lKCkpIHtcbiAgICAgICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gdGFza01hc3Rlci5Qcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0O1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdFRvRGVsZXRlKHByb2plY3QpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUudHJpbSgpID09PSBwcm9qZWN0LmlkKSB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZVByb2plY3QnKTtcbiAgICBkZWxldGVCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0LCBlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVsZXRlQnRuO1xufVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0LCBlKSB7XG4gICAgdGFza01hc3Rlci5kZWxldGVQcm9qZWN0KHJldHVyblByb2plY3RUb0RlbGV0ZShwcm9qZWN0KSk7XG4gICAgcHJvamVjdC5yZW1vdmUoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsZWFyVGFza1VJKCk7XG4gICAgc2F2ZVRhc2ttYXN0ZXIoKTtcbiAgICBpZihyZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWFrZUFuZERpc3BsYXlUYXNrcygpO1xuICAgIH1cblxufVxuXG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0KCkge1xuICAgIGxldCBwcm9qZWN0Wm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Wm9uZScpO1xuICAgIGxldCBuZXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwVGl0bGUnKTtcbiAgICBcbiAgICBpZihwcm9qZWN0TmFtZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIk5hbWUgQ2FuJ3QgQmUgQmxhbmshXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYocHJvamVjdE5hbWUudmFsdWUgPT09IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IEFscmVhZHkgRXhpc3RzIScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYWtlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgIG1ha2VQcm9qZWN0QnRuKHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgc2F2ZVRhc2ttYXN0ZXIoKTtcbiAgICAgICAgcHJvamVjdFpvbmUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIG5ld0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgY29uc29sZS5sb2codGFza01hc3Rlcik7XG4gICAgfVxufSBcblxuZnVuY3Rpb24gbWFrZVRhc2tVSSgpIHtcbiAgICBjbGVhclRhc2tVSSgpO1xuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tVSScpO1xuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9XCJwcm9qZWN0LWJvYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cInAxXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5sb3ctcHJpb3JpdHk8L3A+XG4gICAgICAgIDxkaXYgaWQ9XCJsb3ctcHJpb1wiIGNsYXNzPVwidGFzay1hcmVhXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInAyXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5pbi1wcm9ncmVzczwvcD5cbiAgICAgICAgPGRpdiBpZCA9IFwiaW4tcHJvXCIgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicDNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmNvbXBsZXRlZDwvcD5cbiAgICAgICAgPGRpdiBpZD1cImNvbXBsZXRlXCIgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicDRcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmR1ZS1zb29uPC9wPlxuICAgICAgICA8ZGl2IGlkPVwiZHVlLXNvb25cIiBjbGFzcz1cInRhc2stYXJlYVwiPlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+YDtcblxuLy8gcHJvYmFibHkgcHV0IGEgZnVuY3Rpb24gaGVyZSB0aGF0IGxvYWRzIGluIGVhY2ggaW5kaXZpZHVhbCB0YXNrIHRoYXRzIGluIHRoZSBwcm9qZWN0XG5cbmxldCB0YXNrQnRuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay13cmFwcGVyJyk7XG5sZXQgdGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrJyk7XG4gICAgdGFza0J0bi50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG5cbiAgICB0YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVGFza0J0bk1vZGFsKTtcbiAgICB0YXNrQnRuV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrQnRuKTtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQnRuTW9kYWwoKSB7XG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJtb2RhbElEXCIgY2xhc3M9XCJwcm9qZWN0LW1vZGFsXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLXByb2plY3QtY29udGVudFwiPlxuXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbC1oZWFkZXItdGl0bGVcIj5UYXNrIEluZm88L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbG9zZU1vZGFsXCIgY2xhc3M9XCJjbG9zZVwiPlg8L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxmb3JtIGlkPVwiaW5wdXRcIiBjbGFzcz1cInRpdGxlLWlucHV0LW1vZGFsXCIgYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0LW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtVGl0bGVcIiBwbGFjZWhvbGRlcj1cIldoYXQgaXMgdGhlIHRpdGxlIG9mIHRoZSB0YXNrP1wiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjQwXCIgPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRhc2tEZXNjXCIgcGxhY2Vob2xkZXI9XCJUYXNrIGRlc2NyaXB0aW9uXCIgcm93cz1cIjE1XCIgbWF4bGVuZ3RoPVwiMjAwXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdC10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZS1EYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY3JlYXRlVGFza1wiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q1JFQVRFIFRBU0s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICBkYXRlLnZhbHVlID0nMjAyMi0xMi0zMSc7XG4gICAgVGFza0J0bk1vZGFsTG9naWMoKTtcbn1cbmZ1bmN0aW9uIFRhc2tCdG5Nb2RhbExvZ2ljKCkge1xuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2tNb2RhbCk7XG4gICAgXG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVUYXNrJyk7XG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VGFzayk7XG59XG5mdW5jdGlvbiBjbG9zZVRhc2tNb2RhbCgpIHtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbn1cbmZ1bmN0aW9uIGNsZWFyVGFza1VJKCkge1xuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tVSScpO1xuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gJyc7XG5cblxuICAgIGxldCB0YXNrQnRuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay13cmFwcGVyJyk7XG4gICAgdGFza0J0bldyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG59XG5mdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xuXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzYycpLnZhbHVlO1xuICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtVGl0bGUnKTtcbiAgICBpZih0YXNrTmFtZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlRpdGxlIENhbid0IEJlIEJsYW5rIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhyZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpKTtcbiAgICBtYWtlVGFzayhkZXNjcmlwdGlvbiwgdGFza05hbWUudmFsdWUsIGRhdGUudmFsdWUsIHJldHVybkFjdGl2ZVByb2plY3ROYW1lKCksIFwiTG93UHJpb3JpdHlcIik7XG4gICAgc2F2ZVRhc2ttYXN0ZXIoKTtcbiAgICBtYWtlVGFza0J0bih0YXNrTmFtZS52YWx1ZSwgXCJMb3dQcmlvcml0eVwiKTtcbiAgICBjbG9zZVRhc2tNb2RhbCgpO1xufVxuZnVuY3Rpb24gcmV0dXJuQ3VyclRhc2socHJvamVjdCwgbmFtZSkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LlRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gcHJvamVjdC5UYXNrc1tpXTtcbiAgICAgICAgaWYodGFzay5OYW1lLnRyaW0oKSA9PT0gbmFtZS50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZVRhc2tCdG4obmFtZSwgc3RhdHVzKSB7XG5cbiAgICBpZihzdGF0dXMgPT09IFwiTG93UHJpb3JpdHlcIikge1xuICAgICAgICBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG93LXByaW8nKTtcbiAgICB9XG4gICAgZWxzZSBpZihzdGF0dXMgPT09IFwiSW5Qcm9ncmVzc1wiKXtcbiAgICAgICAgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luLXBybycpO1xuICAgIH1cbiAgICBlbHNlIGlmKHN0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIil7XG4gICAgICAgIHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZScpO1xuICAgIH1cbiAgICBlbHNlIGlmKHN0YXR1cyA9PT0gNCl7XG4gICAgICAgIHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtc29vbicpO1xuICAgIH1cblxuXG4gICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHRhc2sudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlUYXNrSW5mbyh0YXNrKTtcbiAgICB9KTtcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQodGFzayk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0c1Rhc2tzKCkgeyAgICBcbiAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSByZXR1cm5Qcm9qZWN0KCk7XG4gICAgICAgIGlmKGFjdGl2ZVByb2plY3QuVGFza3MubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBhY3RpdmVQcm9qZWN0LlRhc2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFRhc2sgPSBhY3RpdmVQcm9qZWN0LlRhc2tzW2pdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2spO1xuICAgICAgICAgICAgbWFrZVRhc2tCdG4oY3VycmVudFRhc2suTmFtZSwgY3VycmVudFRhc2suU3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICAvLyBQVVQgVEhFIENIRUNLIEZPUiBEVUUgU09PTiBGVU5DVElPTiBIRVJFISFcbiAgICAgICAgfVxuICAgIH1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tJbmZvKGUpIHtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgICBtb2RhbC5pbm5lckhUTUwgPVxuICAgIGA8ZGl2IGlkPVwibW9kYWxJRFwiIGNsYXNzPVwicHJvamVjdC1tb2RhbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC10YXNrLWNvbnRlbnRcIj5cblxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGgyIGlkPVwidGFza1RpdGxlXCIgY2xhc3M9XCJtb2RhbC1oZWFkZXItdGl0bGVcIj48L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbG9zZU1vZGFsXCIgY2xhc3M9XCJjbG9zZVwiPlg8L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxmb3JtIGlkPVwiaW5wdXRcIiBjbGFzcz1cInRpdGxlLWlucHV0LW1vZGFsXCIgYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0LW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLWRlc2NcIiBpZD1cInRhc2tEZXNjXCI+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXRhc2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlLURhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiPiA8L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN0YXRCdG5cIiBjbGFzcz1cInN0YXR1cy1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImxvd1wiPkxvdyBQcmlvcml0eTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJpblwiPkluLVByb2dyZXNzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNvbXBcIj5Db21wbGV0ZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjb25maXJtQ2hhbmdlc1wiIGNsYXNzPVwiY29uZmlybVwiPkNPTkZJUk0gQ0hBTkdFUzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cInRhc2stZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImRlbGV0ZVRhc2tcIj5ERUxFVEUgVEFTSyE8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG48L2Rpdj4gYDtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbCcpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrTW9kYWwpO1xuXG4gICAgXG5cbiAgICBsZXQgcGFyZW50UHJvamVjdCA9IHJldHVyblByb2plY3QoKTtcblxuICAgIGxldCB0YXNrID0gcmV0dXJuQ3VyclRhc2socGFyZW50UHJvamVjdCwgZS5pZCk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay5OYW1lO1xuXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2MnKTtcbiAgICBkZXNjLmlubmVyVGV4dCA9IHRhc2suRGVzY3JpcHRpb247XG4gICAgaWYoZGVzYy5pbm5lclRleHQgPT09IFwiXCIpIHtcbiAgICAgICAgZGVzYy5pbm5lclRleHQgPSBcIjpdXCI7XG4gICAgfVxuXG4gICAgbGV0IGR1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XG4gICAgZHVlLnZhbHVlID0gdGFzay5EYXRlO1xuXG4gICAgbGV0IHN0YXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdEJ0bicpO1xuICAgIFxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YXRCdG4uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RhdEJ0bi5jaGlsZHJlbltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGhpZ2hsaWdodFN0YXR1cyhzdGF0QnRuLCBzdGF0QnRuLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGlmKHRhc2suU3RhdHVzID09PSBcIkxvd1ByaW9yaXR5XCIpIHtcbiAgICAgICAgICAgIHN0YXRCdG4uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhc2suU3RhdHVzID09PSBcIkluUHJvZ3Jlc3NcIikge1xuICAgICAgICAgICAgc3RhdEJ0bi5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFzay5TdGF0dXMgPT09IFwiQ29tcGxldGVkXCIpIHtcbiAgICAgICAgICAgIHN0YXRCdG4uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlVGFzaycpO1xuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlVGFzayhwYXJlbnRQcm9qZWN0LCB0YXNrLCBlKTtcbiAgICB9KTtcblxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUNoYW5nZXMnKTtcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZVRhc2sodGFzaywgZSk7XG4gICAgfSk7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGhpZ2hsaWdodFN0YXR1cyhzdGF0dXNXcmFwcGVyLCBzdGF0QnRuKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YXR1c1dyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoc3RhdHVzV3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcbiAgICAgICAgICAgIHN0YXR1c1dyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhc2snKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XG59XG5mdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3QsIHRhc2ssIGUpIHtcbiAgICBlLnJlbW92ZSgpO1xuICAgIGNsb3NlVGFza01vZGFsKCk7XG4gICAgcHJvamVjdC5kZWxldGVUYXNrKHRhc2spO1xuICAgIHNhdmVUYXNrbWFzdGVyKCk7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlVGFza09iamVjdCh0YXNrKSB7XG4gICAgbGV0IGR1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XG4gICAgdGFzay5EYXRlID0gZHVlLnZhbHVlO1xuXG4gICAgdGFzay5TdGF0dXMgPSB0YXNrU3RhdHVzKCk7XG5cbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFzayh0YXNrLCBlKSB7XG4gICAgbGV0IG9sZEJ1dHRvbklEID0gZS5pZDtcbiAgICBlLnJlbW92ZSgpO1xuICAgIHVwZGF0ZVRhc2tPYmplY3QodGFzayk7XG4gICAgbWFrZVRhc2tCdG4ob2xkQnV0dG9uSUQsIHRhc2suU3RhdHVzKTtcbiAgICBjbG9zZVRhc2tNb2RhbCgpO1xuICAgIHNhdmVUYXNrbWFzdGVyKCk7XG59XG5cbmZ1bmN0aW9uIHRhc2tTdGF0dXMoKSB7XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvdycpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhc2snKSkge1xuICAgICAgICByZXR1cm4gXCJMb3dQcmlvcml0eVwiO1xuICAgIH1cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW4nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcbiAgICAgICAgcmV0dXJuIFwiSW5Qcm9ncmVzc1wiO1xuICAgIH1cbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcCcpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXRhc2snKSkge1xuICAgICAgICByZXR1cm4gXCJDb21wbGV0ZWRcIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VBbmREaXNwbGF5VGFza3MoKSB7XG4gICAgbWFrZVRhc2tVSSgpO1xuICAgIGRpc3BsYXlQcm9qZWN0c1Rhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c09uQm9vdCgpIHtcbiAgICBpZiAodGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG1ha2VQcm9qZWN0QnRuKHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VIb21lTWVudSgpIHtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVUknKTtcbiAgICBjbGVhclRhc2tVSSgpO1xuXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RIb21lTWVudScpO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQobWVudSlcblxuICAgIGlmICh0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBsZXQgbm9Qcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIG5vUHJvamVjdHMudGV4dENvbnRlbnQgPSAnTk8gUFJPSkVDVFMhIE1BWUJFIENSRUFURSBPTkU/JztcblxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKG5vUHJvamVjdHMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gdGFza01hc3Rlci5Qcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuICAgICAgICAgICAgbWFrZUhvbWVCdXR0b25zKHByb2plY3QsIG1lbnUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIG1ha2VIb21lQnV0dG9ucyhwcm9qZWN0LCBtZW51KSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgbGV0IGhvbWVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZVByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdEhvbWUnKTtcbiAgICBob21lUHJvamVjdC5pbm5lclRleHQgPSBwcm9qZWN0Lk5hbWU7XG5cbiAgICBob21lUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFrZVRhc2tVSSgpO1xuICAgICAgICBzZXRIb21lQnV0dG9ucyhwcm9qZWN0Lk5hbWUpO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHNUYXNrcygpO1xuICAgIH0pO1xuXG4gICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCd0YXNrTnVtYmVyJyk7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGhvd01hbnlVbmNvbXBsZXRlVGFza3MocHJvamVjdCk7XG4gICAgaG9tZVByb2plY3QuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGhvbWVQcm9qZWN0KTtcbn1cbmZ1bmN0aW9uIHNldEhvbWVCdXR0b25zKG5hbWUpIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgd3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih3cmFwcGVyLmNoaWxkcmVuW2ldLmlkID09PSBuYW1lKSB7XG4gICAgICAgICAgICBzZXRBY3RpdmVQcm9qZWN0KHdyYXBwZXIuY2hpbGRyZW5baV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gaG93TWFueVVuY29tcGxldGVUYXNrcyhwcm9qZWN0KSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LlRhc2tzLmxlbmd0aDsgaSArKykge1xuICAgICAgICBpZihwcm9qZWN0LlRhc2tzW2ldLlN0YXR1cyAhPT0gJ0NvbXBsZXRlZCcpIHtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY291bnRlcjtcbn1cbi8qICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdEhvbWVNZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0SG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrTnVtYmVyXCI+MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcm9qZWN0SG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YXNrTnVtYmVyXCI+MDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4qL1xuXG5leHBvcnQge25ld1Byb2plY3QsIGxvYWRQcm9qZWN0c09uQm9vdCwgbWFrZUhvbWVNZW51LCBob21lQnRufTtcblxuIiwiaW1wb3J0IHtuZXdQcm9qZWN0LCBsb2FkUHJvamVjdHNPbkJvb3QsIG1ha2VIb21lTWVudSwgaG9tZUJ0bn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQge2xvYWRUYXNrTWFzdGVyLCBzYXZlVGFza21hc3Rlcn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuLy8gV0UgSEFWRSBEQVRFLUZOUyBUTyBJTVBPUlQgQ0VSVEFJTiBGVU5DVElPTlMgRlJPTSFcbm5ld1Byb2plY3QoKTtcblxuXG4vLyBnb25uYSBoYXZlIHRvIHB1dCBzb21lIHN0b3JhZ2UgZnVuY3Rpb25zIGluIHRoZXNlIGxhdGVyXG5jbGFzcyBUYXNrbWFzdGVyIHtcbiAgICBQcm9qZWN0cyA9IFtdO1xuICAgIG5ld1Byb2plY3QobmFtZSkge1xuICAgICAgICB0aGlzLlByb2plY3RzLnB1c2gobmFtZSk7XG4gICAgfVxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy5Qcm9qZWN0c1tpXSA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxubGV0IHRhc2tNYXN0ZXIgPSBuZXcgVGFza21hc3RlcjtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgTmFtZSA9IHVuZGVmaW5lZDtcbiAgICBUYXNrcyA9IFtdO1xuICAgIG5ld1Rhc2sobmFtZSkge1xuICAgICAgICB0aGlzLlRhc2tzLnB1c2gobmFtZSk7XG4gICAgfVxuICAgIHB1c2hUb1Rhc2ttYXN0ZXIobmFtZSkge1xuICAgICAgICB0YXNrTWFzdGVyLm5ld1Byb2plY3QobmFtZSk7XG4gICAgfVxuICAgIGRlbGV0ZVRhc2sodGFzaykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5UYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGhpcy5UYXNrc1tpXSA9PT0gdGFzaykge1xuICAgICAgICAgICAgICAgIHRoaXMuVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZVByb2plY3QobmFtZSkge1xuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3Q7XG4gICAgcHJvamVjdC5OYW1lID0gbmFtZTtcbiAgICBwcm9qZWN0LnB1c2hUb1Rhc2ttYXN0ZXIocHJvamVjdCk7XG59XG5cblxuLy8gbWF5YmUgY2hhbmdlIGxvdyBpbiBhbmQgY29tcGxldGVkIHRvIGEgc2luZ2xlIHN0YXR1cyB0aGF0IHRob3NlIHdvdWxkIGJlIHRoZSBrZXkgdG9cbi8vIGFkZCBpc0R1ZVNvb24gbWV0aG9kIHRoYXQgY2hlY2tzIHdpdGggZGF0ZS1mbnMgaWYgdGhlIHRhc2sgaXMgZHVlIGluIGEgbGVzcyB0aGFuIGEgd2Vla1xuXG5jbGFzcyBUYXNrIHtcbiAgICBOYW1lID0gdW5kZWZpbmVkO1xuICAgIERlc2NyaXB0aW9uID0gXCJcIjtcbiAgICBTdGF0dXMgPSBcIkxvd1ByaW9yaXR5XCJcbiAgICBEYXRlID0gdW5kZWZpbmVkO1xuXG4gICAgcHVzaFRvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzaykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lLnRyaW0oKSA9PT0gcHJvamVjdE5hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdGFza01hc3Rlci5Qcm9qZWN0c1tpXS5uZXdUYXNrKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuLy8gc3RhdHVzIGNhbiBiZSBMb3dQcmlvcml0eSBJblByb2dyZXNzIENvbXBsZXRlZFxuZnVuY3Rpb24gbWFrZVRhc2soZGVzY3JpcHRpb24sIG5hbWUsIGRhdGUsIHByb2plY3ROYW1lLCBzdGF0dXMpIHtcbiAgICBsZXQgdGFzayA9IG5ldyBUYXNrO1xuICAgIHRhc2suTmFtZSA9IG5hbWU7XG4gICAgdGFzay5EYXRlID0gZGF0ZTtcbiAgICB0YXNrLlN0YXR1cyA9IHN0YXR1cztcbiAgICB0YXNrLkRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGFzay5wdXNoVG9Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbn1cbmxvYWRUYXNrTWFzdGVyKCk7XG5sb2FkUHJvamVjdHNPbkJvb3QoKTtcbm1ha2VIb21lTWVudSgpO1xuaG9tZUJ0bigpO1xuXG5leHBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn07XG4iLCJpbXBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn0gZnJvbSBcIi4vaW5kZXhcIlxuXG5mdW5jdGlvbiBzYXZlVGFza21hc3RlcigpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza01hc3RlcicsIEpTT04uc3RyaW5naWZ5KHRhc2tNYXN0ZXIpKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrTWFzdGVyKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRhc2tNYXN0ZXIoKSB7XG4gICAgbGV0IGxvY2FsVGFza01hc3RlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tNYXN0ZXInKSk7XG4gICAgaWYobG9jYWxUYXNrTWFzdGVyICE9PSBudWxsKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBQcm9qZWN0ID0gbG9jYWxUYXNrTWFzdGVyLlByb2plY3RzW2ldO1xuICAgICAgICAgICAgbWFrZVByb2plY3QoUHJvamVjdC5OYW1lKTtcbiAgICAgICAgICAgIGxvYWRUYXNrcyhQcm9qZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuZnVuY3Rpb24gbG9hZFRhc2tzKFByb2plY3QpIHtcbiAgICBpZihQcm9qZWN0LlRhc2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5UYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBQcm9qZWN0LlRhc2tzW2ldO1xuICAgICAgICAgICAgbWFrZVRhc2sodGFzay5EZXNjcmlwdGlvbiwgdGFzay5OYW1lLCB0YXNrLkRhdGUsIFByb2plY3QuTmFtZSwgdGFzay5TdGF0dXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHtzYXZlVGFza21hc3RlciwgbG9hZFRhc2tNYXN0ZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=