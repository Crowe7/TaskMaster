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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dom.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7OztBQUd6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLElBQUksOERBQTBCLEVBQUU7QUFDdkQscUNBQXFDLHVEQUFtQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbURBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhDQUFVO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVE7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFNaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBLGdEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsZ0NBQWdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDOzs7O0FBSWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzlGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn0gZnJvbSBcIi4vaW5kZXhcIlxuXG5cbmZ1bmN0aW9uIG5ld1Byb2plY3QoKSB7XG4gICAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XG4gICAgbGV0IHByb2plY3Rab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Rab25lJyk7XG4gICAgbmV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSBgPGZvcm0gaWQ9XCJpbnB1dFwiIGNsYXNzPVwidGl0bGUtaW5wdXRcIiBhY3Rpb249XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1pbnB1dFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwVGl0bGVcIiBwbGFjZWhvbGRlcj1cIldoYXQgaXMgdGhlIHRpdGxlIG9mIHRoZSBQcm9qZWN0P1wiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjQwXCIgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdC1wcm9qZWN0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNyZWF0ZVByb2plY3RcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNSRUFURSBQUk9KRUNUPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbFByb2plY3RcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNBTkNFTDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+YDtcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG5ld1Byb2plY3RCb3hVSShwcm9qZWN0Wm9uZSwgbmV3QnRuKTtcbiAgICAgICAgbGV0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGVQcm9qZWN0Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZUJ0bik7XG4gICAgICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFByb2plY3QpO1xuICAgIH0pO1xuXG59XG5mdW5jdGlvbiBuZXdQcm9qZWN0Qm94VUkocHJvamVjdFpvbmUsIG5ld0J0bikge1xuICAgIGxldCBjYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsUHJvamVjdCcpO1xuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdFpvbmUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIG5ld0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbWFrZVByb2plY3RCdG4obmFtZSl7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdCcpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBwcm9qZWN0LmlubmVyVGV4dCA9IG5hbWU7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChtYWtlRGVsZXRlUHJvamVjdEJ1dHRvbigpKTtcblxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1ha2VUYXNrVUkoKTtcbiAgICAgICAgc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KTtcbiAgICB9KTtcblxufVxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHdyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYod3JhcHBlci5jaGlsZHJlbltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZS1wcm9qZWN0JykpIHtcbiAgICAgICAgICAgIHdyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3QnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XG59XG5mdW5jdGlvbiByZXR1cm5BY3RpdmVQcm9qZWN0KCkge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3cmFwcGVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHdyYXBwZXIuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtcHJvamVjdCcpKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jaGlsZHJlbltpXS5pbm5lclRleHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZnVuY3Rpb24gbWFrZURlbGV0ZVByb2plY3RCdXR0b24oKSB7XG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVQcm9qZWN0Jyk7XG4gICAgZGVsZXRlQnRuLmlubmVyVGV4dCA9ICdYJztcblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZVByb2plY3QpO1xuICAgIHJldHVybiBkZWxldGVCdG47XG59XG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKCdUT0RPIElNUE9SVCBBIERFTEVURSBGVU5DVElPTiBGT1IgQk9USCBTVE9SQUdFIERJViBBTkQgRlJPTSBUQVNLTUFTVEVSJyk7XG4gICAgLy9UT0RPIElNUE9SVCBBIERFTEVURSBGVU5DVElPTiBGT1IgQk9USCBTVE9SQUdFIERJViBBTkQgRlJPTSBUQVNLTUFTVEVSXG59XG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0KCkge1xuICAgIGxldCBwcm9qZWN0Wm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Wm9uZScpO1xuICAgIGxldCBuZXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwVGl0bGUnKTtcbiAgICBcbiAgICBpZihwcm9qZWN0TmFtZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIk5hbWUgQ2FuJ3QgQmUgQmxhbmshXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza01hc3Rlci5Qcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYocHJvamVjdE5hbWUudmFsdWUgPT09IHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdQcm9qZWN0IEFscmVhZHkgRXhpc3RzIScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYWtlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgIG1ha2VQcm9qZWN0QnRuKHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgcHJvamVjdFpvbmUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIG5ld0J0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgY29uc29sZS5sb2codGFza01hc3Rlcik7XG4gICAgfVxufSBcblxuZnVuY3Rpb24gbWFrZVRhc2tVSSgpIHtcbiAgICBjbGVhclRhc2tVSSgpO1xuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tVSScpO1xuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gXG4gICAgYDxkaXYgY2xhc3M9XCJwcm9qZWN0LWJvYXJkXCI+XG4gICAgPGRpdiBjbGFzcz1cInAxXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5sb3ctcHJpb3JpdHk8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicDJcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmluLXByb2dyZXNzPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1hcmVhXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInAzXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5jb21wbGV0ZWQ8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicDRcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmR1ZS1zb29uPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1hcmVhXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuXG4vLyBwcm9iYWJseSBwdXQgYSBmdW5jdGlvbiBoZXJlIHRoYXQgbG9hZHMgaW4gZWFjaCBpbmRpdmlkdWFsIHRhc2sgdGhhdHMgaW4gdGhlIHByb2plY3RcblxubGV0IHRhc2tCdG5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrLXdyYXBwZXInKTtcbmxldCB0YXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2snKTtcbiAgICB0YXNrQnRuLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcblxuICAgIHRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVUYXNrQnRuTW9kYWwpO1xuICAgIHRhc2tCdG5XcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tCdG4pO1xufVxuZnVuY3Rpb24gY3JlYXRlVGFza0J0bk1vZGFsKCkge1xuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xuICAgIG1vZGFsLmlubmVySFRNTCA9IGA8ZGl2IGlkPVwibW9kYWxJRFwiIGNsYXNzPVwicHJvamVjdC1tb2RhbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1wcm9qZWN0LWNvbnRlbnRcIj5cblxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwibW9kYWwtaGVhZGVyLXRpdGxlXCI+VGFzayBJbmZvPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xvc2VNb2RhbFwiIGNsYXNzPVwiY2xvc2VcIj5YPC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dC1tb2RhbFwiIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1pbnB1dC1tb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibVRpdGxlXCIgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgdGFzaz9cIiByZXF1aXJlZCBtYXhsZW5ndGg9XCI0MFwiID5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0YXNrRGVzY1wiIHBsYWNlaG9sZGVyPVwiVGFzayBkZXNjcmlwdGlvblwiIHJvd3M9XCIxNVwiIG1heGxlbmd0aD1cIjIwMFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtdGFza1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUtRGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiBuYW1lPVwiZHVlLWRhdGVcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNyZWF0ZVRhc2tcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNSRUFURSBUQVNLPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuPC9kaXY+YDtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XG4gICAgZGF0ZS52YWx1ZSA9JzIwMjItMTItMzEnO1xuICAgIFRhc2tCdG5Nb2RhbExvZ2ljKCk7XG59XG5mdW5jdGlvbiBUYXNrQnRuTW9kYWxMb2dpYygpIHtcbiAgICBsZXQgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VNb2RhbCcpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VUYXNrTW9kYWwpO1xuICAgIFxuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlVGFzaycpO1xuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFRhc2spO1xufVxuZnVuY3Rpb24gY2xvc2VUYXNrTW9kYWwoKSB7XG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gJyc7XG59XG5mdW5jdGlvbiBjbGVhclRhc2tVSSgpIHtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrVUknKTtcbiAgICB0YXNrRGl2LmlubmVySFRNTCA9ICcnO1xuXG5cbiAgICBsZXQgdGFza0J0bldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2std3JhcHBlcicpO1xuICAgIHRhc2tCdG5XcmFwcGVyLmlubmVySFRNTCA9ICcnO1xufVxuZnVuY3Rpb24gc3VibWl0VGFzaygpIHtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJyk7XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tEZXNjJykudmFsdWU7XG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21UaXRsZScpO1xuICAgIGlmKHRhc2tOYW1lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiVGl0bGUgQ2FuJ3QgQmUgQmxhbmshXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG1ha2VUYXNrKGRlc2NyaXB0aW9uLCB0YXNrTmFtZS52YWx1ZSwgZGF0ZS52YWx1ZSwgcmV0dXJuQWN0aXZlUHJvamVjdCgpKTtcbiAgICBjbG9zZVRhc2tNb2RhbCgpO1xufVxuXG5cblxuXG5cbmV4cG9ydCB7bmV3UHJvamVjdH07IiwiaW1wb3J0IHtuZXdQcm9qZWN0fSBmcm9tIFwiLi9kb21cIjtcbi8vIFdFIEhBVkUgREFURS1GTlMgVE8gSU1QT1JUIENFUlRBSU4gRlVOQ1RJT05TIEZST00hXG4vLyA8YnV0dG9uIGlkPVwicHJvamVjdFwiIGNsYXNzPVwicHJvXCI+cHJvamVjdDwvYnV0dG9uPiBpcyB0aGUgSFRNTCBmb3IgdGhlIGFjdHVhbCBtYWRlIHByb2plY3RzLi4uIGFwcGVuZGVkIHRvIGFsbCBwcm9qZWN0c1xuLy8gICAgICAgICA8YnV0dG9uIGlkPVwibmV3VGFza1wiPk5ldyBUYXNrPC9idXR0b24+IGFwcGVkIHRvIGl0cyB3cmFwcGVyIGZvciBhZGRpbmcgdGFza3MgdG8gYW55IHByb2plY3QuIGdlbmVyYXRlIGl0IHdoZW4gaSBsb2FkIHRoZSBwcm9qZWN0IGlueVxuXG5uZXdQcm9qZWN0KCk7XG4vLyBnb25uYSBoYXZlIHRvIHB1dCBzb21lIHN0b3JhZ2UgZnVuY3Rpb25zIGluIHRoZXNlIGxhdGVyXG5jbGFzcyBUYXNrbWFzdGVyIHtcbiAgICBQcm9qZWN0cyA9IFtdO1xuICAgIG5ld1Byb2plY3QobmFtZSkge1xuICAgICAgICB0aGlzLlByb2plY3RzLnB1c2gobmFtZSk7XG4gICAgfVxufVxubGV0IHRhc2tNYXN0ZXIgPSBuZXcgVGFza21hc3RlcjtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgTmFtZSA9IHVuZGVmaW5lZDtcbiAgICBUYXNrcyA9IFtdO1xuICAgIG5ld1Rhc2sobmFtZSkge1xuICAgICAgICB0aGlzLlRhc2tzLnB1c2gobmFtZSk7XG4gICAgfVxuICAgIHB1c2hUb1Rhc2ttYXN0ZXIobmFtZSkge1xuICAgICAgICB0YXNrTWFzdGVyLm5ld1Byb2plY3QobmFtZSk7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBtYWtlUHJvamVjdChuYW1lKSB7XG4gICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdDtcbiAgICBwcm9qZWN0Lk5hbWUgPSBuYW1lO1xuICAgIHByb2plY3QucHVzaFRvVGFza21hc3Rlcihwcm9qZWN0KTtcbn1cbmNsYXNzIFRhc2sge1xuICAgIE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgRGVzY3JpcHRpb24gPSBcIlwiO1xuICAgIExvd1ByaW9yaXR5ID0gdHJ1ZTtcbiAgICBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgQ29tcGxldGVkID0gZmFsc2U7XG4gICAgRGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIHB1c2hUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0uTmFtZS50cmltKCkgPT09IHByb2plY3ROYW1lLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHRhc2tNYXN0ZXIuUHJvamVjdHNbaV0ubmV3VGFzayh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbmZ1bmN0aW9uIG1ha2VUYXNrKGRlc2NyaXB0aW9uLCBuYW1lLCBkYXRlLCBwcm9qZWN0TmFtZSkge1xuICAgIGxldCB0YXNrID0gbmV3IFRhc2s7XG4gICAgdGFzay5OYW1lID0gbmFtZTtcbiAgICB0YXNrLkRhdGUgPSBkYXRlO1xuICAgIHRhc2suRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0YXNrLnB1c2hUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2spO1xufVxuXG5leHBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn07XG4vKmxldCBleFByb2plY3QgPSBuZXcgUHJvamVjdDtcbmV4UHJvamVjdC5OYW1lID0gJ2V4UHJvamVjdCc7XG5jb25zb2xlLmxvZyhleFByb2plY3QpO1xuZXhQcm9qZWN0LnB1c2hUb1Rhc2ttYXN0ZXIoZXhQcm9qZWN0KTtcbmNvbnNvbGUubG9nKHRhc2tNYXN0ZXIuUHJvamVjdHMpOyAqL1xuXG5cblxuLyogICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtYm9hcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicDFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmxvdy1wcmlvcml0eTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2tcIj50YXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwMlwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+aW4tcHJvZ3Jlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrXCI+dGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicDNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmNvbXBsZXRlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2tcIj50YXNrdGFza3Rhc2t0YXNrdGFza3Rhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrXCI+dGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicDRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmR1ZS1zb29uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFza1wiPnRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4qL1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kb20uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=