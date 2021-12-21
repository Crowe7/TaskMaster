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

    project.addEventListener('click', makeTaskUI);

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

    taskBtnWrapper.appendChild(taskBtn);
}

function clearTaskUI() {
    let taskDiv = document.querySelector('#taskUI');
    taskDiv.innerHTML = '';


    let taskBtnWrapper = document.querySelector('.new-task-wrapper');
    taskBtnWrapper.innerHTML = '';
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
        projectName.newTask(task);
    }



}
function makeTask(description, name, date, projectName) {
    let task = new Task;
    task.Name = name;
    task.Date = date;
    task.Description = description;
    task.pushToProject(projectName, task);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7OztBQUd6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLDhEQUEwQixFQUFFO0FBQ3ZELHFDQUFxQyx1REFBbUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBVTtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUEsZ0RBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7OztBQUlsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN6RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttYWtlVGFzaywgbWFrZVByb2plY3QsIHRhc2tNYXN0ZXJ9IGZyb20gXCIuL2luZGV4XCJcblxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0KCkge1xuICAgIGxldCBuZXdCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdCcpO1xuICAgIGxldCBwcm9qZWN0Wm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Wm9uZScpO1xuICAgIG5ld0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdFpvbmUuaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwiaW5wdXRcIiBjbGFzcz1cInRpdGxlLWlucHV0XCIgYWN0aW9uPVwiXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicFRpdGxlXCIgcGxhY2Vob2xkZXI9XCJXaGF0IGlzIHRoZSB0aXRsZSBvZiB0aGUgUHJvamVjdD9cIiByZXF1aXJlZCBtYXhsZW5ndGg9XCI0MFwiID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtcHJvamVjdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjcmVhdGVQcm9qZWN0XCIgY2xhc3M9XCJuZXctcHJvamVjdC1idXR0b25cIj5DUkVBVEUgUFJPSkVDVDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJjYW5jZWxQcm9qZWN0XCIgY2xhc3M9XCJuZXctcHJvamVjdC1idXR0b25cIj5DQU5DRUw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPmA7XG4gICAgICAgIG5ld0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBuZXdQcm9qZWN0Qm94VUkocHJvamVjdFpvbmUsIG5ld0J0bik7XG4gICAgICAgIGxldCBjcmVhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlUHJvamVjdCcpO1xuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVCdG4pO1xuICAgICAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRQcm9qZWN0KTtcbiAgICB9KTtcblxufVxuZnVuY3Rpb24gbmV3UHJvamVjdEJveFVJKHByb2plY3Rab25lLCBuZXdCdG4pIHtcbiAgICBsZXQgY2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFByb2plY3QnKTtcbiAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBuZXdCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9qZWN0QnRuKG5hbWUpe1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cycpO1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QnKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3BybycpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG4gICAgcHJvamVjdC5pbm5lclRleHQgPSBuYW1lO1xuXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1ha2VUYXNrVUkpO1xuXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3QoKSB7XG4gICAgbGV0IHByb2plY3Rab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3Rab25lJyk7XG4gICAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0Jyk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BUaXRsZScpO1xuICAgIFxuICAgIGlmKHByb2plY3ROYW1lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgIGFsZXJ0KFwiTmFtZSBDYW4ndCBCZSBCbGFuayFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrTWFzdGVyLlByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihwcm9qZWN0TmFtZS52YWx1ZSA9PT0gdGFza01hc3Rlci5Qcm9qZWN0c1tpXS5OYW1lKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ1Byb2plY3QgQWxyZWFkeSBFeGlzdHMhJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1ha2VQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgbWFrZVByb2plY3RCdG4ocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTWFzdGVyKTtcbiAgICB9XG59IFxuXG5mdW5jdGlvbiBtYWtlVGFza1VJKCkge1xuICAgIGNsZWFyVGFza1VJKCk7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza1VJJyk7XG4gICAgdGFza0Rpdi5pbm5lckhUTUwgPSBcbiAgICBgPGRpdiBjbGFzcz1cInByb2plY3QtYm9hcmRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicDFcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmxvdy1wcmlvcml0eTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYXJlYVwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwMlwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+aW4tcHJvZ3Jlc3M8L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicDNcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmNvbXBsZXRlZDwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYXJlYVwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwNFwiPlxuICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+ZHVlLXNvb248L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PmA7XG5cbi8vIHByb2JhYmx5IHB1dCBhIGZ1bmN0aW9uIGhlcmUgdGhhdCBsb2FkcyBpbiBlYWNoIGluZGl2aWR1YWwgdGFzayB0aGF0cyBpbiB0aGUgcHJvamVjdFxuXG5sZXQgdGFza0J0bldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2std3JhcHBlcicpO1xubGV0IHRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0YXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFzaycpO1xuICAgIHRhc2tCdG4udGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuXG4gICAgdGFza0J0bldyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0J0bik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza1VJKCkge1xuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tVSScpO1xuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gJyc7XG5cblxuICAgIGxldCB0YXNrQnRuV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzay13cmFwcGVyJyk7XG4gICAgdGFza0J0bldyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG59XG5cbmV4cG9ydCB7bmV3UHJvamVjdH07IiwiaW1wb3J0IHtuZXdQcm9qZWN0fSBmcm9tIFwiLi9kb21cIjtcbi8vIFdFIEhBVkUgREFURS1GTlMgVE8gSU1QT1JUIENFUlRBSU4gRlVOQ1RJT05TIEZST00hXG4vLyA8YnV0dG9uIGlkPVwicHJvamVjdFwiIGNsYXNzPVwicHJvXCI+cHJvamVjdDwvYnV0dG9uPiBpcyB0aGUgSFRNTCBmb3IgdGhlIGFjdHVhbCBtYWRlIHByb2plY3RzLi4uIGFwcGVuZGVkIHRvIGFsbCBwcm9qZWN0c1xuLy8gICAgICAgICA8YnV0dG9uIGlkPVwibmV3VGFza1wiPk5ldyBUYXNrPC9idXR0b24+IGFwcGVkIHRvIGl0cyB3cmFwcGVyIGZvciBhZGRpbmcgdGFza3MgdG8gYW55IHByb2plY3QuIGdlbmVyYXRlIGl0IHdoZW4gaSBsb2FkIHRoZSBwcm9qZWN0IGlueVxuXG5uZXdQcm9qZWN0KCk7XG4vLyBnb25uYSBoYXZlIHRvIHB1dCBzb21lIHN0b3JhZ2UgZnVuY3Rpb25zIGluIHRoZXNlIGxhdGVyXG5jbGFzcyBUYXNrbWFzdGVyIHtcbiAgICBQcm9qZWN0cyA9IFtdO1xuICAgIG5ld1Byb2plY3QobmFtZSkge1xuICAgICAgICB0aGlzLlByb2plY3RzLnB1c2gobmFtZSk7XG4gICAgfVxufVxubGV0IHRhc2tNYXN0ZXIgPSBuZXcgVGFza21hc3RlcjtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgTmFtZSA9IHVuZGVmaW5lZDtcbiAgICBUYXNrcyA9IFtdO1xuICAgIG5ld1Rhc2sobmFtZSkge1xuICAgICAgICB0aGlzLlRhc2tzLnB1c2gobmFtZSk7XG4gICAgfVxuICAgIHB1c2hUb1Rhc2ttYXN0ZXIobmFtZSkge1xuICAgICAgICB0YXNrTWFzdGVyLm5ld1Byb2plY3QobmFtZSk7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBtYWtlUHJvamVjdChuYW1lKSB7XG4gICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdDtcbiAgICBwcm9qZWN0Lk5hbWUgPSBuYW1lO1xuICAgIHByb2plY3QucHVzaFRvVGFza21hc3Rlcihwcm9qZWN0KTtcbn1cbmNsYXNzIFRhc2sge1xuICAgIE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgRGVzY3JpcHRpb24gPSBcIlwiO1xuICAgIExvd1ByaW9yaXR5ID0gdHJ1ZTtcbiAgICBJblByb2dyZXNzID0gZmFsc2U7XG4gICAgQ29tcGxldGVkID0gZmFsc2U7XG4gICAgRGF0ZSA9IHVuZGVmaW5lZDtcblxuICAgIHB1c2hUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spIHtcbiAgICAgICAgcHJvamVjdE5hbWUubmV3VGFzayh0YXNrKTtcbiAgICB9XG5cblxuXG59XG5mdW5jdGlvbiBtYWtlVGFzayhkZXNjcmlwdGlvbiwgbmFtZSwgZGF0ZSwgcHJvamVjdE5hbWUpIHtcbiAgICBsZXQgdGFzayA9IG5ldyBUYXNrO1xuICAgIHRhc2suTmFtZSA9IG5hbWU7XG4gICAgdGFzay5EYXRlID0gZGF0ZTtcbiAgICB0YXNrLkRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGFzay5wdXNoVG9Qcm9qZWN0KHByb2plY3ROYW1lLCB0YXNrKTtcbn1cblxuZXhwb3J0IHttYWtlVGFzaywgbWFrZVByb2plY3QsIHRhc2tNYXN0ZXJ9O1xuLypsZXQgZXhQcm9qZWN0ID0gbmV3IFByb2plY3Q7XG5leFByb2plY3QuTmFtZSA9ICdleFByb2plY3QnO1xuY29uc29sZS5sb2coZXhQcm9qZWN0KTtcbmV4UHJvamVjdC5wdXNoVG9UYXNrbWFzdGVyKGV4UHJvamVjdCk7XG5jb25zb2xlLmxvZyh0YXNrTWFzdGVyLlByb2plY3RzKTsgKi9cblxuXG5cbi8qICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWJvYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5sb3ctcHJpb3JpdHk8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrXCI+dGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicDJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmluLXByb2dyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFza1wiPnRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5jb21wbGV0ZWQ8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrXCI+dGFza3Rhc2t0YXNrdGFza3Rhc2t0YXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFza1wiPnRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInA0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVhZGVyLXBcIj5kdWUtc29vbjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2tcIj50YXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+Ki9cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZG9tLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9