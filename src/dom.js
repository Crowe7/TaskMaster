import {makeProject, taskMaster} from "./index"
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
        newProjectUI(projectZone, newBtn);
        submitProject();
    });

}
function newProjectUI(projectZone, newBtn) {
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
   let createBtn = document.getElementById('createProject');
   let projectName = document.getElementById('pTitle');
   createBtn.addEventListener('click', () => {
        makeProject(projectName.value);
        makeProjectBtn(projectName.value);
        projectZone.innerHTML = '';
        newBtn.style.display = 'block';
        console.log(taskMaster);
   });

}


export {newProject};