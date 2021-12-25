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
    project.setAttribute('id', 'project');
    project.classList.add('pro');
    wrapper.appendChild(project);
    project.innerText = name;
    project.appendChild(makeDeleteProjectButton());

    project.addEventListener('click', () => {
        makeTaskUI();
        setActiveProject(project);
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
function returnActiveProject() {
    let wrapper = document.querySelector('.all-projects');
    for(let i = 0; i < wrapper.children.length; i++) {
        if(wrapper.children[i].classList.contains('active-project')) {
            return wrapper.children[i].innerText;
        }
    }
}


function makeDeleteProjectButton() {
    let deleteBtn = document.createElement('span');
    deleteBtn.setAttribute('id', 'deleteProject');
    deleteBtn.innerText = 'X';

    deleteBtn.addEventListener('click', deleteProject);
    return deleteBtn;
}
function deleteProject() {
    console.log('TODO IMPORT A DELETE FUNCTION FOR BOTH STORAGE DIV AND FROM TASKMASTER');
    //TODO IMPORT A DELETE FUNCTION FOR BOTH STORAGE DIV AND FROM TASKMASTER
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
        <div class="task-area">

        </div>
    </div>
    <div class="p2">
        <p class="header-p">in-progress</p>
        <div class="task-area">

        </div>
    </div>
    <div class="p3">
        <p class="header-p">completed</p>
        <div class="task-area">

        </div>
    </div>
    <div class="p4">
        <p class="header-p">due-soon</p>
        <div class="task-area">
            
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
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.makeTask)(description, taskName.value, date.value, returnActiveProject());
    closeTaskModal();
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

// WE HAVE DATE-FNS TO IMPORT CERTAIN FUNCTIONS FROM!
// <button id="project" class="pro">project</button> is the HTML for the actual made projects... appended to all projects
//         <button id="newTask">New Task</button> apped to its wrapper for adding tasks to any project. generate it when i load the project iny

(0,_dom__WEBPACK_IMPORTED_MODULE_0__.newProject)();
// gonna have to put some storage functions in these later
class Taskmaster {
    Projects = [];
    newProject(name) {
        this.Projects.push(name);
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

}
function makeProject(name) {
    let project = new Project;
    project.Name = name;
    project.pushToTaskmaster(project);
}
class Task {
    Name = undefined;
    Description = "";
    LowPriority = true;
    InProgress = false;
    Completed = false;
    Date = undefined;

    pushToProject(projectName, task) {
        for(let i = 0; i < taskMaster.Projects.length; i++) {
            if(taskMaster.Projects[i].Name.trim() === projectName.trim()) {
                taskMaster.Projects[i].newTask(task);
            }
        }
    }



}
function makeTask(description, name, date, projectName) {
    let task = new Task;
    task.Name = name;
    task.Date = date;
    task.Description = description;
    task.pushToProject(projectName, task);
    console.log(task);
}


/*let exProject = new Project;
exProject.Name = 'exProject';
console.log(exProject);
exProject.pushToTaskmaster(exProject);
console.log(taskMaster.Projects); */



/*             <div class="project-board">
                <div class="p1">
                    <p class="header-p">low-priority</p>
                    <div class="task-area">
                        <button class="task">task</button>
                    </div>
                </div>
                <div class="p2">
                    <p class="header-p">in-progress</p>
                    <div class="task-area">
                        <button class="task">task</button>
                    </div>
                </div>
                <div class="p3">
                    <p class="header-p">completed</p>
                    <div class="task-area">
                        <button class="task">tasktasktasktasktasktask</button>
                        <button class="task">task</button>
                    </div>
                </div>
                <div class="p4">
                    <p class="header-p">due-soon</p>
                    <div class="task-area">
                        <button class="task">task</button>
                    </div>
                </div>
            </div>*/


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDs7O0FBR3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsSUFBSSw4REFBMEIsRUFBRTtBQUN2RCxxQ0FBcUMsdURBQW1CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOENBQVU7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBUTtBQUNaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU1pQztBQUNqQztBQUNBO0FBQ0E7O0FBRUEsZ0RBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7Ozs7QUFJbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWFrZVRhc2ssIG1ha2VQcm9qZWN0LCB0YXNrTWFzdGVyfSBmcm9tIFwiLi9pbmRleFwiXG5cblxuZnVuY3Rpb24gbmV3UHJvamVjdCgpIHtcbiAgICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbiAgICBsZXQgcHJvamVjdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFpvbmUnKTtcbiAgICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dFwiIGFjdGlvbj1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBUaXRsZVwiIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgdGl0bGUgb2YgdGhlIFByb2plY3Q/XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiNDBcIiA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXByb2plY3RcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY3JlYXRlUHJvamVjdFwiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q1JFQVRFIFBST0pFQ1Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsUHJvamVjdFwiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q0FOQ0VMPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5gO1xuICAgICAgICBuZXdCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbmV3UHJvamVjdEJveFVJKHByb2plY3Rab25lLCBuZXdCdG4pO1xuICAgICAgICBsZXQgY3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3QnKTtcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlQnRuKTtcbiAgICAgICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0UHJvamVjdCk7XG4gICAgfSk7XG5cbn1cbmZ1bmN0aW9uIG5ld1Byb2plY3RCb3hVSShwcm9qZWN0Wm9uZSwgbmV3QnRuKSB7XG4gICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxQcm9qZWN0Jyk7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvamVjdEJ0bihuYW1lKXtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm8nKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIHByb2plY3QuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKG1ha2VEZWxldGVQcm9qZWN0QnV0dG9uKCkpO1xuXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFrZVRhc2tVSSgpO1xuICAgICAgICBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xuICAgIH0pO1xuXG59XG5mdW5jdGlvbiBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgd3JhcHBlci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih3cmFwcGVyLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXByb2plY3QnKSkge1xuICAgICAgICAgICAgd3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXByb2plY3QnKTtcbn1cbmZ1bmN0aW9uIHJldHVybkFjdGl2ZVByb2plY3QoKSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYod3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1wcm9qZWN0JykpIHtcbiAgICAgICAgICAgIHJldHVybiB3cmFwcGVyLmNoaWxkcmVuW2ldLmlubmVyVGV4dDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBtYWtlRGVsZXRlUHJvamVjdEJ1dHRvbigpIHtcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZVByb2plY3QnKTtcbiAgICBkZWxldGVCdG4uaW5uZXJUZXh0ID0gJ1gnO1xuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlUHJvamVjdCk7XG4gICAgcmV0dXJuIGRlbGV0ZUJ0bjtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgY29uc29sZS5sb2coJ1RPRE8gSU1QT1JUIEEgREVMRVRFIEZVTkNUSU9OIEZPUiBCT1RIIFNUT1JBR0UgRElWIEFORCBGUk9NIFRBU0tNQVNURVInKTtcbiAgICAvL1RPRE8gSU1QT1JUIEEgREVMRVRFIEZVTkNUSU9OIEZPUiBCT1RIIFNUT1JBR0UgRElWIEFORCBGUk9NIFRBU0tNQVNURVJcbn1cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XG4gICAgbGV0IHByb2plY3Rab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Rab25lJyk7XG4gICAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BUaXRsZScpO1xuICAgIFxuICAgIGlmKHByb2plY3ROYW1lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiTmFtZSBDYW4ndCBCZSBCbGFuayFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihwcm9qZWN0TmFtZS52YWx1ZSA9PT0gdGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgQWxyZWFkeSBFeGlzdHMhJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1ha2VQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgbWFrZVByb2plY3RCdG4ocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTWFzdGVyKTtcbiAgICB9XG59IFxuXG5mdW5jdGlvbiBtYWtlVGFza1VJKCkge1xuICAgIGNsZWFyVGFza1VJKCk7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1VJJyk7XG4gICAgdGFza0Rpdi5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz1cInByb2plY3QtYm9hcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicDFcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmxvdy1wcmlvcml0eTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYXJlYVwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwMlwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+aW4tcHJvZ3Jlc3M8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicDNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmNvbXBsZXRlZDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYXJlYVwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwNFwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+ZHVlLXNvb248L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG5cbi8vIHByb2JhYmx5IHB1dCBhIGZ1bmN0aW9uIGhlcmUgdGhhdCBsb2FkcyBpbiBlYWNoIGluZGl2aWR1YWwgdGFzayB0aGF0cyBpbiB0aGUgcHJvamVjdFxuXG5sZXQgdGFza0J0bldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2std3JhcHBlcicpO1xubGV0IHRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFzaycpO1xuICAgIHRhc2tCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuXG4gICAgdGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRhc2tCdG5Nb2RhbCk7XG4gICAgdGFza0J0bldyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0J0bik7XG59XG5mdW5jdGlvbiBjcmVhdGVUYXNrQnRuTW9kYWwoKSB7XG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYDxkaXYgaWQ9XCJtb2RhbElEXCIgY2xhc3M9XCJwcm9qZWN0LW1vZGFsXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLXByb2plY3QtY29udGVudFwiPlxuXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJtb2RhbC1oZWFkZXItdGl0bGVcIj5UYXNrIEluZm88L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjbG9zZU1vZGFsXCIgY2xhc3M9XCJjbG9zZVwiPlg8L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxmb3JtIGlkPVwiaW5wdXRcIiBjbGFzcz1cInRpdGxlLWlucHV0LW1vZGFsXCIgYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0LW1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtVGl0bGVcIiBwbGFjZWhvbGRlcj1cIldoYXQgaXMgdGhlIHRpdGxlIG9mIHRoZSB0YXNrP1wiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjQwXCIgPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInRhc2tEZXNjXCIgcGxhY2Vob2xkZXI9XCJUYXNrIGRlc2NyaXB0aW9uXCIgcm93cz1cIjE1XCIgbWF4bGVuZ3RoPVwiMjAwXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdC10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGUtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZS1EYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlRGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY3JlYXRlVGFza1wiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q1JFQVRFIFRBU0s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICBkYXRlLnZhbHVlID0nMjAyMi0xMi0zMSc7XG4gICAgVGFza0J0bk1vZGFsTG9naWMoKTtcbn1cbmZ1bmN0aW9uIFRhc2tCdG5Nb2RhbExvZ2ljKCkge1xuICAgIGxldCBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZU1vZGFsJyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVRhc2tNb2RhbCk7XG4gICAgXG4gICAgbGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVUYXNrJyk7XG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VGFzayk7XG59XG5mdW5jdGlvbiBjbG9zZVRhc2tNb2RhbCgpIHtcbiAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSAnJztcbn1cbmZ1bmN0aW9uIGNsZWFyVGFza1VJKCkge1xuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tVSScpO1xuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gJyc7XG5cblxuICAgIGxldCB0YXNrQnRuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay13cmFwcGVyJyk7XG4gICAgdGFza0J0bldyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG59XG5mdW5jdGlvbiBzdWJtaXRUYXNrKCkge1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2MnKS52YWx1ZTtcbiAgICBsZXQgdGFza05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbVRpdGxlJyk7XG4gICAgaWYodGFza05hbWUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJUaXRsZSBDYW4ndCBCZSBCbGFuayFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbWFrZVRhc2soZGVzY3JpcHRpb24sIHRhc2tOYW1lLnZhbHVlLCBkYXRlLnZhbHVlLCByZXR1cm5BY3RpdmVQcm9qZWN0KCkpO1xuICAgIGNsb3NlVGFza01vZGFsKCk7XG59XG5cblxuXG5cblxuZXhwb3J0IHtuZXdQcm9qZWN0fTsiLCJpbXBvcnQge25ld1Byb2plY3R9IGZyb20gXCIuL2RvbVwiO1xuLy8gV0UgSEFWRSBEQVRFLUZOUyBUTyBJTVBPUlQgQ0VSVEFJTiBGVU5DVElPTlMgRlJPTSFcbi8vIDxidXR0b24gaWQ9XCJwcm9qZWN0XCIgY2xhc3M9XCJwcm9cIj5wcm9qZWN0PC9idXR0b24+IGlzIHRoZSBIVE1MIGZvciB0aGUgYWN0dWFsIG1hZGUgcHJvamVjdHMuLi4gYXBwZW5kZWQgdG8gYWxsIHByb2plY3RzXG4vLyAgICAgICAgIDxidXR0b24gaWQ9XCJuZXdUYXNrXCI+TmV3IFRhc2s8L2J1dHRvbj4gYXBwZWQgdG8gaXRzIHdyYXBwZXIgZm9yIGFkZGluZyB0YXNrcyB0byBhbnkgcHJvamVjdC4gZ2VuZXJhdGUgaXQgd2hlbiBpIGxvYWQgdGhlIHByb2plY3QgaW55XG5cbm5ld1Byb2plY3QoKTtcbi8vIGdvbm5hIGhhdmUgdG8gcHV0IHNvbWUgc3RvcmFnZSBmdW5jdGlvbnMgaW4gdGhlc2UgbGF0ZXJcbmNsYXNzIFRhc2ttYXN0ZXIge1xuICAgIFByb2plY3RzID0gW107XG4gICAgbmV3UHJvamVjdChuYW1lKSB7XG4gICAgICAgIHRoaXMuUHJvamVjdHMucHVzaChuYW1lKTtcbiAgICB9XG59XG5sZXQgdGFza01hc3RlciA9IG5ldyBUYXNrbWFzdGVyO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBOYW1lID0gdW5kZWZpbmVkO1xuICAgIFRhc2tzID0gW107XG4gICAgbmV3VGFzayhuYW1lKSB7XG4gICAgICAgIHRoaXMuVGFza3MucHVzaChuYW1lKTtcbiAgICB9XG4gICAgcHVzaFRvVGFza21hc3RlcihuYW1lKSB7XG4gICAgICAgIHRhc2tNYXN0ZXIubmV3UHJvamVjdChuYW1lKTtcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIG1ha2VQcm9qZWN0KG5hbWUpIHtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0O1xuICAgIHByb2plY3QuTmFtZSA9IG5hbWU7XG4gICAgcHJvamVjdC5wdXNoVG9UYXNrbWFzdGVyKHByb2plY3QpO1xufVxuY2xhc3MgVGFzayB7XG4gICAgTmFtZSA9IHVuZGVmaW5lZDtcbiAgICBEZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgTG93UHJpb3JpdHkgPSB0cnVlO1xuICAgIEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICBDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBEYXRlID0gdW5kZWZpbmVkO1xuXG4gICAgcHVzaFRvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzaykge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lLnRyaW0oKSA9PT0gcHJvamVjdE5hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdGFza01hc3Rlci5Qcm9qZWN0c1tpXS5uZXdUYXNrKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxuZnVuY3Rpb24gbWFrZVRhc2soZGVzY3JpcHRpb24sIG5hbWUsIGRhdGUsIHByb2plY3ROYW1lKSB7XG4gICAgbGV0IHRhc2sgPSBuZXcgVGFzaztcbiAgICB0YXNrLk5hbWUgPSBuYW1lO1xuICAgIHRhc2suRGF0ZSA9IGRhdGU7XG4gICAgdGFzay5EZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRhc2sucHVzaFRvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzayk7XG4gICAgY29uc29sZS5sb2codGFzayk7XG59XG5cbmV4cG9ydCB7bWFrZVRhc2ssIG1ha2VQcm9qZWN0LCB0YXNrTWFzdGVyfTtcbi8qbGV0IGV4UHJvamVjdCA9IG5ldyBQcm9qZWN0O1xuZXhQcm9qZWN0Lk5hbWUgPSAnZXhQcm9qZWN0JztcbmNvbnNvbGUubG9nKGV4UHJvamVjdCk7XG5leFByb2plY3QucHVzaFRvVGFza21hc3RlcihleFByb2plY3QpO1xuY29uc29sZS5sb2codGFza01hc3Rlci5Qcm9qZWN0cyk7ICovXG5cblxuXG4vKiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1ib2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwMVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+bG93LXByaW9yaXR5PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFza1wiPnRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5pbi1wcm9ncmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2tcIj50YXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwM1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+Y29tcGxldGVkPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFza1wiPnRhc2t0YXNrdGFza3Rhc2t0YXNrdGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2tcIj50YXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwNFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+ZHVlLXNvb248L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrXCI+dGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiovXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9