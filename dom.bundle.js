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

/*                         <form id="input" class="title-input" action="">
                            <div class="project-form-input">
                                <input type="text" id="pTitle" placeholder="What is the title of the Project?" required maxlength="40" >
                            </div>
                            <div class="submit-project">
                                <input type="submit" value="CREATE PROJECT" id="createProject" class="new-project-button">
                                <button type="button" id="cancelProject" class="new-project-button">CANCEL</button>
                            </div>
                        </form> */
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
makeProject("Bruh");
console.log(taskMaster);
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
makeTask("no","Doin Your Mom", "69", taskMaster.Projects[0]);
makeTask("yes","Doin Your Mom", "67", taskMaster.Projects[0]);

console.log(taskMaster.Projects[0].Tasks);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJLDhEQUEwQixFQUFFO0FBQ3ZELHFDQUFxQyx1REFBbUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFXO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBVTtBQUM5QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUEsZ0RBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7Ozs7QUFJbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOUZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrbWFzdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFza21hc3Rlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rhc2ttYXN0ZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bWFrZVRhc2ssIG1ha2VQcm9qZWN0LCB0YXNrTWFzdGVyfSBmcm9tIFwiLi9pbmRleFwiXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dFwiIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwVGl0bGVcIiBwbGFjZWhvbGRlcj1cIldoYXQgaXMgdGhlIHRpdGxlIG9mIHRoZSBQcm9qZWN0P1wiIHJlcXVpcmVkIG1heGxlbmd0aD1cIjQwXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtcHJvamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ1JFQVRFIFBST0pFQ1RcIiBpZD1cImNyZWF0ZVByb2plY3RcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImNhbmNlbFByb2plY3RcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWJ1dHRvblwiPkNBTkNFTDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPiAqL1xuZnVuY3Rpb24gbmV3UHJvamVjdCgpIHtcbiAgICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbiAgICBsZXQgcHJvamVjdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFpvbmUnKTtcbiAgICBuZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9IGA8Zm9ybSBpZD1cImlucHV0XCIgY2xhc3M9XCJ0aXRsZS1pbnB1dFwiIGFjdGlvbj1cIlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWlucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBUaXRsZVwiIHBsYWNlaG9sZGVyPVwiV2hhdCBpcyB0aGUgdGl0bGUgb2YgdGhlIFByb2plY3Q/XCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiNDBcIiA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXByb2plY3RcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY3JlYXRlUHJvamVjdFwiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q1JFQVRFIFBST0pFQ1Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2FuY2VsUHJvamVjdFwiIGNsYXNzPVwibmV3LXByb2plY3QtYnV0dG9uXCI+Q0FOQ0VMPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5gO1xuICAgICAgICBuZXdCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgbmV3UHJvamVjdEJveFVJKHByb2plY3Rab25lLCBuZXdCdG4pO1xuICAgICAgICBsZXQgY3JlYXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZVByb2plY3QnKTtcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlQnRuKTtcbiAgICAgICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0UHJvamVjdCk7XG4gICAgfSk7XG5cbn1cbmZ1bmN0aW9uIG5ld1Byb2plY3RCb3hVSShwcm9qZWN0Wm9uZSwgbmV3QnRuKSB7XG4gICAgbGV0IGNhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxQcm9qZWN0Jyk7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Wm9uZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbmV3QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvamVjdEJ0bihuYW1lKXtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtcHJvamVjdHMnKTtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Jyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm8nKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIHByb2plY3QuaW5uZXJUZXh0ID0gbmFtZTtcbn1cblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdCgpIHtcbiAgICBsZXQgcHJvamVjdFpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdFpvbmUnKTtcbiAgICBsZXQgbmV3QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QnKTtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncFRpdGxlJyk7XG4gICAgXG4gICAgaWYocHJvamVjdE5hbWUudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgYWxlcnQoXCJOYW1lIENhbid0IEJlIEJsYW5rIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tNYXN0ZXIuUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHByb2plY3ROYW1lLnZhbHVlID09PSB0YXNrTWFzdGVyLlByb2plY3RzW2ldLk5hbWUpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnUHJvamVjdCBBbHJlYWR5IEV4aXN0cyEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFrZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xuICAgICAgICBtYWtlUHJvamVjdEJ0bihwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgIHByb2plY3Rab25lLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBuZXdCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tNYXN0ZXIpO1xuICAgIH1cbn0gXG5cbmV4cG9ydCB7bmV3UHJvamVjdH07IiwiaW1wb3J0IHtuZXdQcm9qZWN0fSBmcm9tIFwiLi9kb21cIjtcbi8vIFdFIEhBVkUgREFURS1GTlMgVE8gSU1QT1JUIENFUlRBSU4gRlVOQ1RJT05TIEZST00hXG4vLyA8YnV0dG9uIGlkPVwicHJvamVjdFwiIGNsYXNzPVwicHJvXCI+cHJvamVjdDwvYnV0dG9uPiBpcyB0aGUgSFRNTCBmb3IgdGhlIGFjdHVhbCBtYWRlIHByb2plY3RzLi4uIGFwcGVuZGVkIHRvIGFsbCBwcm9qZWN0c1xuLy8gICAgICAgICA8YnV0dG9uIGlkPVwibmV3VGFza1wiPk5ldyBUYXNrPC9idXR0b24+IGFwcGVkIHRvIGl0cyB3cmFwcGVyIGZvciBhZGRpbmcgdGFza3MgdG8gYW55IHByb2plY3QuIGdlbmVyYXRlIGl0IHdoZW4gaSBsb2FkIHRoZSBwcm9qZWN0IGlueVxuXG5uZXdQcm9qZWN0KCk7XG4vLyBnb25uYSBoYXZlIHRvIHB1dCBzb21lIHN0b3JhZ2UgZnVuY3Rpb25zIGluIHRoZXNlIGxhdGVyXG5jbGFzcyBUYXNrbWFzdGVyIHtcbiAgICBQcm9qZWN0cyA9IFtdO1xuICAgIG5ld1Byb2plY3QobmFtZSkge1xuICAgICAgICB0aGlzLlByb2plY3RzLnB1c2gobmFtZSk7XG4gICAgfVxufVxubGV0IHRhc2tNYXN0ZXIgPSBuZXcgVGFza21hc3RlcjtcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgTmFtZSA9IHVuZGVmaW5lZDtcbiAgICBUYXNrcyA9IFtdO1xuICAgIG5ld1Rhc2sobmFtZSkge1xuICAgICAgICB0aGlzLlRhc2tzLnB1c2gobmFtZSk7XG4gICAgfVxuICAgIHB1c2hUb1Rhc2ttYXN0ZXIobmFtZSkge1xuICAgICAgICB0YXNrTWFzdGVyLm5ld1Byb2plY3QobmFtZSk7XG4gICAgfVxuXG59XG5mdW5jdGlvbiBtYWtlUHJvamVjdChuYW1lKSB7XG4gICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdDtcbiAgICBwcm9qZWN0Lk5hbWUgPSBuYW1lO1xuICAgIHByb2plY3QucHVzaFRvVGFza21hc3Rlcihwcm9qZWN0KTtcbn1cbm1ha2VQcm9qZWN0KFwiQnJ1aFwiKTtcbmNvbnNvbGUubG9nKHRhc2tNYXN0ZXIpO1xuY2xhc3MgVGFzayB7XG4gICAgTmFtZSA9IHVuZGVmaW5lZDtcbiAgICBEZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgTG93UHJpb3JpdHkgPSB0cnVlO1xuICAgIEluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICBDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICBEYXRlID0gdW5kZWZpbmVkO1xuXG4gICAgcHVzaFRvUHJvamVjdChwcm9qZWN0TmFtZSwgdGFzaykge1xuICAgICAgICBwcm9qZWN0TmFtZS5uZXdUYXNrKHRhc2spO1xuICAgIH1cblxuXG5cbn1cbmZ1bmN0aW9uIG1ha2VUYXNrKGRlc2NyaXB0aW9uLCBuYW1lLCBkYXRlLCBwcm9qZWN0TmFtZSkge1xuICAgIGxldCB0YXNrID0gbmV3IFRhc2s7XG4gICAgdGFzay5OYW1lID0gbmFtZTtcbiAgICB0YXNrLkRhdGUgPSBkYXRlO1xuICAgIHRhc2suRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0YXNrLnB1c2hUb1Byb2plY3QocHJvamVjdE5hbWUsIHRhc2spO1xufVxubWFrZVRhc2soXCJub1wiLFwiRG9pbiBZb3VyIE1vbVwiLCBcIjY5XCIsIHRhc2tNYXN0ZXIuUHJvamVjdHNbMF0pO1xubWFrZVRhc2soXCJ5ZXNcIixcIkRvaW4gWW91ciBNb21cIiwgXCI2N1wiLCB0YXNrTWFzdGVyLlByb2plY3RzWzBdKTtcblxuY29uc29sZS5sb2codGFza01hc3Rlci5Qcm9qZWN0c1swXS5UYXNrcyk7XG5leHBvcnQge21ha2VUYXNrLCBtYWtlUHJvamVjdCwgdGFza01hc3Rlcn07XG4vKmxldCBleFByb2plY3QgPSBuZXcgUHJvamVjdDtcbmV4UHJvamVjdC5OYW1lID0gJ2V4UHJvamVjdCc7XG5jb25zb2xlLmxvZyhleFByb2plY3QpO1xuZXhQcm9qZWN0LnB1c2hUb1Rhc2ttYXN0ZXIoZXhQcm9qZWN0KTtcbmNvbnNvbGUubG9nKHRhc2tNYXN0ZXIuUHJvamVjdHMpOyAqL1xuXG5cblxuLyogICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtYm9hcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicDFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmxvdy1wcmlvcml0eTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2tcIj50YXNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwMlwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlYWRlci1wXCI+aW4tcHJvZ3Jlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrXCI+dGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicDNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmNvbXBsZXRlZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYXJlYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2tcIj50YXNrdGFza3Rhc2t0YXNrdGFza3Rhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrXCI+dGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicDRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkZXItcFwiPmR1ZS1zb29uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGFza1wiPnRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4qL1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kb20uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=