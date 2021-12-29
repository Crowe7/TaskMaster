import {makeTask, makeProject, taskMaster} from "./index"

function saveTaskmaster() {
    localStorage.setItem('taskMaster', JSON.stringify(taskMaster));
}

function loadTaskMaster() {
    let localTaskMaster = JSON.parse(localStorage.getItem('taskMaster'));
    if(localTaskMaster !== null) {
        for(let i = 0; i < loadTaskMaster.length; i++) {
            let Project = loadTaskMaster[i];
            makeProject(Project.Name);
            loadTasks(Project);
        }
    }
}
function loadTasks(Project) {
    if(Project.Tasks.length !== 0) {
        for(let i = 0; i < Project.Tasks.length; i++) {
            let task = Project.Tasks[i];
            makeTask(task.Description, task.Name, task.Date, Project.Name, task.Status);
        }
    }
}
export {saveTaskmaster, loadTaskMaster};