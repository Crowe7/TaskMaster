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
/* harmony export */   "newProject": () => (/* binding */ newProject)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");



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
    if(returnActiveProjectName() !== undefined) {
        makeAndDisplayTasks();
    }

    //TODO IMPORT A DELETE FUNCTION FOR STORAGE NOW! 
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
makeProject('StorageTwo');
makeProject('Storage');
makeTask('bill', 'StorageTask', '2022-12-31', 'Storage', 'Completed');
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveTaskmaster)();
(0,_storage__WEBPACK_IMPORTED_MODULE_1__.loadTaskMaster)();
console.log(taskMaster.Projects[0].Tasks.length);



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
}

function loadTaskMaster() {
    let localTaskMaster = JSON.parse(localStorage.getItem('taskMaster'));
    if(localTaskMaster !== null) {
        for(let i = 0; i < loadTaskMaster.length; i++) {
            let Project = loadTaskMaster[i];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDs7O0FBR3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsSUFBSSw4REFBMEIsRUFBRTtBQUNuRCxXQUFXLHVEQUFtQjtBQUM5QixnQ0FBZ0MsdURBQW1CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsSUFBSSw4REFBMEIsRUFBRTtBQUNuRCxXQUFXLHVEQUFtQjtBQUM5QixnQ0FBZ0MsdURBQW1CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUF3QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLDhEQUEwQixFQUFFO0FBQ3ZELHFDQUFxQyx1REFBbUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBVTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwYWE7QUFDd0I7QUFDekQ7QUFDQSxnREFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUFjO0FBQ2Qsd0RBQWM7QUFDZDtBQUMyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRmM7O0FBRXpEO0FBQ0Esc0RBQXNELDhDQUFVO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQSxZQUFZLG1EQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQSxZQUFZLGdEQUFRO0FBQ3BCO0FBQ0E7QUFDQTs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttYWtlVGFzaywgbWFrZVByb2plY3QsIHRhc2tNYXN0ZXJ9IGZyb20gXCIuL2luZGV4XCJcblxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0KCkge1xuICAgIGxldCBuZXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuICAgIGxldCBwcm9qZWN0Wm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Wm9uZScpO1xuICAgIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdFpvbmUuaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwiaW5wdXRcIiBjbGFzcz1cInRpdGxlLWlucHV0XCIgYWN0aW9uPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicFRpdGxlXCIgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgUHJvamVjdD9cIiByZXF1aXJlZCBtYXhsZW5ndGg9XCI0MFwiID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtcHJvamVjdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjcmVhdGVQcm9qZWN0XCIgY2xhc3M9XCJuZXctcHJvamVjdC1idXR0b25cIj5DUkVBVEUgUFJPSkVDVDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWxQcm9qZWN0XCIgY2xhc3M9XCJuZXctcHJvamVjdC1idXR0b25cIj5DQU5DRUw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPmA7XG4gICAgICAgIG5ld0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBuZXdQcm9qZWN0Qm94VUkocHJvamVjdFpvbmUsIG5ld0J0bik7XG4gICAgICAgIGxldCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlUHJvamVjdCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVCdG4pO1xuICAgICAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRQcm9qZWN0KTtcbiAgICB9KTtcblxufVxuZnVuY3Rpb24gbmV3UHJvamVjdEJveFVJKHByb2plY3Rab25lLCBuZXdCdG4pIHtcbiAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFByb2plY3QnKTtcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBuZXdCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9qZWN0QnRuKG5hbWUpe1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm8nKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIHByb2plY3QuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG1ha2VEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpKTtcbiAgICBcblxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1ha2VUYXNrVUkoKTtcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzVGFza3MoKTtcbiAgICB9KTtcblxufVxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYod3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1wcm9qZWN0JykpIHtcbiAgICAgICAgICAgIHdyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3QnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG59XG5mdW5jdGlvbiByZXR1cm5BY3RpdmVQcm9qZWN0TmFtZSgpIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgd3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih3cmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXByb2plY3QnKSkge1xuXG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gd3JhcHBlci5jaGlsZHJlbltpXS5pZDtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZXR1cm5Qcm9qZWN0KCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZS50cmltKCkgPT09IHJldHVybkFjdGl2ZVByb2plY3ROYW1lKCkpIHtcbiAgICAgICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gdGFza01hc3Rlci5Qcm9qZWN0c1tpXTtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0O1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcmV0dXJuUHJvamVjdFRvRGVsZXRlKHByb2plY3QpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUudHJpbSgpID09PSBwcm9qZWN0LmlkKSB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlUHJvamVjdCA9IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV07XG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlUHJvamVjdDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VEZWxldGVQcm9qZWN0QnV0dG9uKHByb2plY3QpIHtcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZVByb2plY3QnKTtcbiAgICBkZWxldGVCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0LCBlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGVsZXRlQnRuO1xufVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0LCBlKSB7XG4gICAgdGFza01hc3Rlci5kZWxldGVQcm9qZWN0KHJldHVyblByb2plY3RUb0RlbGV0ZShwcm9qZWN0KSk7XG4gICAgcHJvamVjdC5yZW1vdmUoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsZWFyVGFza1VJKCk7XG4gICAgaWYocmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1ha2VBbmREaXNwbGF5VGFza3MoKTtcbiAgICB9XG5cbiAgICAvL1RPRE8gSU1QT1JUIEEgREVMRVRFIEZVTkNUSU9OIEZPUiBTVE9SQUdFIE5PVyEgXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XG4gICAgbGV0IHByb2plY3Rab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Rab25lJyk7XG4gICAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BUaXRsZScpO1xuICAgIFxuICAgIGlmKHByb2plY3ROYW1lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiTmFtZSBDYW4ndCBCZSBCbGFuayFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihwcm9qZWN0TmFtZS52YWx1ZSA9PT0gdGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgQWxyZWFkeSBFeGlzdHMhJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1ha2VQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgbWFrZVByb2plY3RCdG4ocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTWFzdGVyKTtcbiAgICB9XG59IFxuXG5mdW5jdGlvbiBtYWtlVGFza1VJKCkge1xuICAgIGNsZWFyVGFza1VJKCk7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1VJJyk7XG4gICAgdGFza0Rpdi5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz1cInByb2plY3QtYm9hcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicDFcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmxvdy1wcmlvcml0eTwvcD5cbiAgICAgICAgPGRpdiBpZD1cImxvdy1wcmlvXCIgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicDJcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmluLXByb2dyZXNzPC9wPlxuICAgICAgICA8ZGl2IGlkID0gXCJpbi1wcm9cIiBjbGFzcz1cInRhc2stYXJlYVwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwM1wiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+Y29tcGxldGVkPC9wPlxuICAgICAgICA8ZGl2IGlkPVwiY29tcGxldGVcIiBjbGFzcz1cInRhc2stYXJlYVwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwNFwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+ZHVlLXNvb248L3A+XG4gICAgICAgIDxkaXYgaWQ9XCJkdWUtc29vblwiIGNsYXNzPVwidGFzay1hcmVhXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuXG4vLyBwcm9iYWJseSBwdXQgYSBmdW5jdGlvbiBoZXJlIHRoYXQgbG9hZHMgaW4gZWFjaCBpbmRpdmlkdWFsIHRhc2sgdGhhdHMgaW4gdGhlIHByb2plY3RcblxubGV0IHRhc2tCdG5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLXdyYXBwZXInKTtcbmxldCB0YXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2snKTtcbiAgICB0YXNrQnRuLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcblxuICAgIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrQnRuTW9kYWwpO1xuICAgIHRhc2tCdG5XcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tCdG4pO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tCdG5Nb2RhbCgpIHtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIm1vZGFsSURcIiBjbGFzcz1cInByb2plY3QtbW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtcHJvamVjdC1jb250ZW50XCI+XG5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cIm1vZGFsLWhlYWRlci10aXRsZVwiPlRhc2sgSW5mbzwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNsb3NlTW9kYWxcIiBjbGFzcz1cImNsb3NlXCI+WDwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPGZvcm0gaWQ9XCJpbnB1dFwiIGNsYXNzPVwidGl0bGUtaW5wdXQtbW9kYWxcIiBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWZvcm0taW5wdXQtbW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1UaXRsZVwiIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgdGl0bGUgb2YgdGhlIHRhc2s/XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiNDBcIiA+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwidGFza0Rlc2NcIiBwbGFjZWhvbGRlcj1cIlRhc2sgZGVzY3JpcHRpb25cIiByb3dzPVwiMTVcIiBtYXhsZW5ndGg9XCIyMDBcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXRhc2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlLURhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVEYXRlXCIgbmFtZT1cImR1ZS1kYXRlXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjcmVhdGVUYXNrXCIgY2xhc3M9XCJuZXctcHJvamVjdC1idXR0b25cIj5DUkVBVEUgVEFTSzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xuICAgIGRhdGUudmFsdWUgPScyMDIyLTEyLTMxJztcbiAgICBUYXNrQnRuTW9kYWxMb2dpYygpO1xufVxuZnVuY3Rpb24gVGFza0J0bk1vZGFsTG9naWMoKSB7XG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlTW9kYWwnKTtcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlVGFza01vZGFsKTtcbiAgICBcbiAgICBsZXQgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZVRhc2snKTtcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRUYXNrKTtcbn1cbmZ1bmN0aW9uIGNsb3NlVGFza01vZGFsKCkge1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9ICcnO1xufVxuZnVuY3Rpb24gY2xlYXJUYXNrVUkoKSB7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1VJJyk7XG4gICAgdGFza0Rpdi5pbm5lckhUTUwgPSAnJztcblxuXG4gICAgbGV0IHRhc2tCdG5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLXdyYXBwZXInKTtcbiAgICB0YXNrQnRuV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbn1cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soKSB7XG5cbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjJykudmFsdWU7XG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21UaXRsZScpO1xuICAgIGlmKHRhc2tOYW1lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiVGl0bGUgQ2FuJ3QgQmUgQmxhbmshXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHJldHVybkFjdGl2ZVByb2plY3ROYW1lKCkpO1xuICAgIG1ha2VUYXNrKGRlc2NyaXB0aW9uLCB0YXNrTmFtZS52YWx1ZSwgZGF0ZS52YWx1ZSwgcmV0dXJuQWN0aXZlUHJvamVjdE5hbWUoKSwgXCJMb3dQcmlvcml0eVwiKTtcbiAgICBtYWtlVGFza0J0bih0YXNrTmFtZS52YWx1ZSwgXCJMb3dQcmlvcml0eVwiKTtcbiAgICBjbG9zZVRhc2tNb2RhbCgpO1xufVxuZnVuY3Rpb24gcmV0dXJuQ3VyclRhc2socHJvamVjdCwgbmFtZSkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LlRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0gcHJvamVjdC5UYXNrc1tpXTtcbiAgICAgICAgaWYodGFzay5OYW1lLnRyaW0oKSA9PT0gbmFtZS50cmltKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbWFrZVRhc2tCdG4obmFtZSwgc3RhdHVzKSB7XG5cbiAgICBpZihzdGF0dXMgPT09IFwiTG93UHJpb3JpdHlcIikge1xuICAgICAgICBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG93LXByaW8nKTtcbiAgICB9XG4gICAgZWxzZSBpZihzdGF0dXMgPT09IFwiSW5Qcm9ncmVzc1wiKXtcbiAgICAgICAgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luLXBybycpO1xuICAgIH1cbiAgICBlbHNlIGlmKHN0YXR1cyA9PT0gXCJDb21wbGV0ZWRcIil7XG4gICAgICAgIHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZScpO1xuICAgIH1cbiAgICBlbHNlIGlmKHN0YXR1cyA9PT0gNCl7XG4gICAgICAgIHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtc29vbicpO1xuICAgIH1cblxuXG4gICAgbGV0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHRhc2suc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIHRhc2sudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRpc3BsYXlUYXNrSW5mbyh0YXNrKTtcbiAgICB9KTtcbiAgICBzdGF0dXMuYXBwZW5kQ2hpbGQodGFzayk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0c1Rhc2tzKCkgeyAgICBcbiAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSByZXR1cm5Qcm9qZWN0KCk7XG4gICAgICAgIGlmKGFjdGl2ZVByb2plY3QuVGFza3MubGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBhY3RpdmVQcm9qZWN0LlRhc2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFRhc2sgPSBhY3RpdmVQcm9qZWN0LlRhc2tzW2pdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2spO1xuICAgICAgICAgICAgbWFrZVRhc2tCdG4oY3VycmVudFRhc2suTmFtZSwgY3VycmVudFRhc2suU3RhdHVzKVxuICAgICAgICAgICAgICAgICAgICAvLyBQVVQgVEhFIENIRUNLIEZPUiBEVUUgU09PTiBGVU5DVElPTiBIRVJFISFcbiAgICAgICAgfVxuICAgIH1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tJbmZvKGUpIHtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgICBtb2RhbC5pbm5lckhUTUwgPVxuICAgIGA8ZGl2IGlkPVwibW9kYWxJRFwiIGNsYXNzPVwicHJvamVjdC1tb2RhbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC10YXNrLWNvbnRlbnRcIj5cblxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGgyIGlkPVwidGFza1RpdGxlXCIgY2xhc3M9XCJtb2RhbC1oZWFkZXItdGl0bGVcIj48L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbG9zZU1vZGFsXCIgY2xhc3M9XCJjbG9zZVwiPlg8L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxmb3JtIGlkPVwiaW5wdXRcIiBjbGFzcz1cInRpdGxlLWlucHV0LW1vZGFsXCIgYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0LW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0YXNrLWRlc2NcIiBpZD1cInRhc2tEZXNjXCI+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXRhc2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlLURhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiPiA8L2lucHV0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN0YXRCdG5cIiBjbGFzcz1cInN0YXR1cy1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImxvd1wiPkxvdyBQcmlvcml0eTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJpblwiPkluLVByb2dyZXNzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNvbXBcIj5Db21wbGV0ZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjb25maXJtQ2hhbmdlc1wiIGNsYXNzPVwiY29uZmlybVwiPkNPTkZJUk0gQ0hBTkdFUzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cInRhc2stZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImRlbGV0ZVRhc2tcIj5ERUxFVEUgVEFTSyE8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG48L2Rpdj4gYDtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbCcpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrTW9kYWwpO1xuXG4gICAgXG5cbiAgICBsZXQgcGFyZW50UHJvamVjdCA9IHJldHVyblByb2plY3QoKTtcblxuICAgIGxldCB0YXNrID0gcmV0dXJuQ3VyclRhc2socGFyZW50UHJvamVjdCwgZS5pZCk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay5OYW1lO1xuXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2MnKTtcbiAgICBkZXNjLmlubmVyVGV4dCA9IHRhc2suRGVzY3JpcHRpb247XG4gICAgaWYoZGVzYy5pbm5lclRleHQgPT09IFwiXCIpIHtcbiAgICAgICAgZGVzYy5pbm5lclRleHQgPSBcIjpdXCI7XG4gICAgfVxuXG4gICAgbGV0IGR1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XG4gICAgZHVlLnZhbHVlID0gdGFzay5EYXRlO1xuXG4gICAgbGV0IHN0YXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdEJ0bicpO1xuICAgIFxuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YXRCdG4uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RhdEJ0bi5jaGlsZHJlbltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGhpZ2hsaWdodFN0YXR1cyhzdGF0QnRuLCBzdGF0QnRuLmNoaWxkcmVuW2ldKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGlmKHRhc2suU3RhdHVzID09PSBcIkxvd1ByaW9yaXR5XCIpIHtcbiAgICAgICAgICAgIHN0YXRCdG4uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRhc2suU3RhdHVzID09PSBcIkluUHJvZ3Jlc3NcIikge1xuICAgICAgICAgICAgc3RhdEJ0bi5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtdGFzaycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGFzay5TdGF0dXMgPT09IFwiQ29tcGxldGVkXCIpIHtcbiAgICAgICAgICAgIHN0YXRCdG4uY2hpbGRyZW5bMl0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhc2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCByZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlVGFzaycpO1xuICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlVGFzayhwYXJlbnRQcm9qZWN0LCB0YXNrLCBlKTtcbiAgICB9KTtcblxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybUNoYW5nZXMnKTtcbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHVwZGF0ZVRhc2sodGFzaywgZSk7XG4gICAgfSk7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGhpZ2hsaWdodFN0YXR1cyhzdGF0dXNXcmFwcGVyLCBzdGF0QnRuKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0YXR1c1dyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoc3RhdHVzV3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcbiAgICAgICAgICAgIHN0YXR1c1dyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXRhc2snKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS10YXNrJyk7XG59XG5mdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3QsIHRhc2ssIGUpIHtcbiAgICBlLnJlbW92ZSgpO1xuICAgIGNsb3NlVGFza01vZGFsKCk7XG4gICAgcHJvamVjdC5kZWxldGVUYXNrKHRhc2spO1xufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tPYmplY3QodGFzaykge1xuICAgIGxldCBkdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpO1xuICAgIHRhc2suRGF0ZSA9IGR1ZS52YWx1ZTtcblxuICAgIHRhc2suU3RhdHVzID0gdGFza1N0YXR1cygpO1xuXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2sodGFzaywgZSkge1xuICAgIGxldCBvbGRCdXR0b25JRCA9IGUuaWQ7XG4gICAgZS5yZW1vdmUoKTtcbiAgICB1cGRhdGVUYXNrT2JqZWN0KHRhc2spO1xuICAgIG1ha2VUYXNrQnRuKG9sZEJ1dHRvbklELCB0YXNrLlN0YXR1cyk7XG4gICAgY2xvc2VUYXNrTW9kYWwoKTtcblxufVxuXG5mdW5jdGlvbiB0YXNrU3RhdHVzKCkge1xuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb3cnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcbiAgICAgICAgcmV0dXJuIFwiTG93UHJpb3JpdHlcIjtcbiAgICB9XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luJykuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtdGFzaycpKSB7XG4gICAgICAgIHJldHVybiBcIkluUHJvZ3Jlc3NcIjtcbiAgICB9XG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXAnKS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS10YXNrJykpIHtcbiAgICAgICAgcmV0dXJuIFwiQ29tcGxldGVkXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlQW5kRGlzcGxheVRhc2tzKCkge1xuICAgIG1ha2VUYXNrVUkoKTtcbiAgICBkaXNwbGF5UHJvamVjdHNUYXNrcygpO1xufVxuZXhwb3J0IHtuZXdQcm9qZWN0fTtcblxuIiwiaW1wb3J0IHtuZXdQcm9qZWN0fSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7bG9hZFRhc2tNYXN0ZXIsIHNhdmVUYXNrbWFzdGVyfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG4vLyBXRSBIQVZFIERBVEUtRk5TIFRPIElNUE9SVCBDRVJUQUlOIEZVTkNUSU9OUyBGUk9NIVxubmV3UHJvamVjdCgpO1xuLy8gZ29ubmEgaGF2ZSB0byBwdXQgc29tZSBzdG9yYWdlIGZ1bmN0aW9ucyBpbiB0aGVzZSBsYXRlclxuY2xhc3MgVGFza21hc3RlciB7XG4gICAgUHJvamVjdHMgPSBbXTtcbiAgICBuZXdQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgdGhpcy5Qcm9qZWN0cy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuUHJvamVjdHNbaV0gPT09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLlByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmxldCB0YXNrTWFzdGVyID0gbmV3IFRhc2ttYXN0ZXI7XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgVGFza3MgPSBbXTtcbiAgICBuZXdUYXNrKG5hbWUpIHtcbiAgICAgICAgdGhpcy5UYXNrcy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgICBwdXNoVG9UYXNrbWFzdGVyKG5hbWUpIHtcbiAgICAgICAgdGFza01hc3Rlci5uZXdQcm9qZWN0KG5hbWUpO1xuICAgIH1cbiAgICBkZWxldGVUYXNrKHRhc2spIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRoaXMuVGFza3NbaV0gPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLlRhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VQcm9qZWN0KG5hbWUpIHtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0O1xuICAgIHByb2plY3QuTmFtZSA9IG5hbWU7XG4gICAgcHJvamVjdC5wdXNoVG9UYXNrbWFzdGVyKHByb2plY3QpO1xufVxuXG5cbi8vIG1heWJlIGNoYW5nZSBsb3cgaW4gYW5kIGNvbXBsZXRlZCB0byBhIHNpbmdsZSBzdGF0dXMgdGhhdCB0aG9zZSB3b3VsZCBiZSB0aGUga2V5IHRvXG4vLyBhZGQgaXNEdWVTb29uIG1ldGhvZCB0aGF0IGNoZWNrcyB3aXRoIGRhdGUtZm5zIGlmIHRoZSB0YXNrIGlzIGR1ZSBpbiBhIGxlc3MgdGhhbiBhIHdlZWtcblxuY2xhc3MgVGFzayB7XG4gICAgTmFtZSA9IHVuZGVmaW5lZDtcbiAgICBEZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgU3RhdHVzID0gXCJMb3dQcmlvcml0eVwiXG4gICAgRGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIHB1c2hUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZS50cmltKCkgPT09IHByb2plY3ROYW1lLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0ubmV3VGFzayh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbi8vIHN0YXR1cyBjYW4gYmUgTG93UHJpb3JpdHkgSW5Qcm9ncmVzcyBDb21wbGV0ZWRcbmZ1bmN0aW9uIG1ha2VUYXNrKGRlc2NyaXB0aW9uLCBuYW1lLCBkYXRlLCBwcm9qZWN0TmFtZSwgc3RhdHVzKSB7XG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzaztcbiAgICB0YXNrLk5hbWUgPSBuYW1lO1xuICAgIHRhc2suRGF0ZSA9IGRhdGU7XG4gICAgdGFzay5TdGF0dXMgPSBzdGF0dXM7XG4gICAgdGFzay5EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRhc2sucHVzaFRvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzayk7XG4gICAgY29uc29sZS5sb2codGFzayk7XG59XG5tYWtlUHJvamVjdCgnU3RvcmFnZVR3bycpO1xubWFrZVByb2plY3QoJ1N0b3JhZ2UnKTtcbm1ha2VUYXNrKCdiaWxsJywgJ1N0b3JhZ2VUYXNrJywgJzIwMjItMTItMzEnLCAnU3RvcmFnZScsICdDb21wbGV0ZWQnKTtcbnNhdmVUYXNrbWFzdGVyKCk7XG5sb2FkVGFza01hc3RlcigpO1xuY29uc29sZS5sb2codGFza01hc3Rlci5Qcm9qZWN0c1swXS5UYXNrcy5sZW5ndGgpO1xuZXhwb3J0IHttYWtlVGFzaywgbWFrZVByb2plY3QsIHRhc2tNYXN0ZXJ9O1xuIiwiaW1wb3J0IHttYWtlVGFzaywgbWFrZVByb2plY3QsIHRhc2tNYXN0ZXJ9IGZyb20gXCIuL2luZGV4XCJcblxuZnVuY3Rpb24gc2F2ZVRhc2ttYXN0ZXIoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tNYXN0ZXInLCBKU09OLnN0cmluZ2lmeSh0YXNrTWFzdGVyKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRUYXNrTWFzdGVyKCkge1xuICAgIGxldCBsb2NhbFRhc2tNYXN0ZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrTWFzdGVyJykpO1xuICAgIGlmKGxvY2FsVGFza01hc3RlciAhPT0gbnVsbCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9hZFRhc2tNYXN0ZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBQcm9qZWN0ID0gbG9hZFRhc2tNYXN0ZXJbaV07XG4gICAgICAgICAgICBtYWtlUHJvamVjdChQcm9qZWN0Lk5hbWUpO1xuICAgICAgICAgICAgbG9hZFRhc2tzKFByb2plY3QpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbG9hZFRhc2tzKFByb2plY3QpIHtcbiAgICBpZihQcm9qZWN0LlRhc2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgUHJvamVjdC5UYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBQcm9qZWN0LlRhc2tzW2ldO1xuICAgICAgICAgICAgbWFrZVRhc2sodGFzay5EZXNjcmlwdGlvbiwgdGFzay5OYW1lLCB0YXNrLkRhdGUsIFByb2plY3QuTmFtZSwgdGFzay5TdGF0dXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHtzYXZlVGFza21hc3RlciwgbG9hZFRhc2tNYXN0ZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=